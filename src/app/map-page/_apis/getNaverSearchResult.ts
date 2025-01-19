'use server'

import { cache } from 'react'
import { createApiClient } from "@/shared/api/client"
import { unstable_cache } from 'next/cache'

const NAVER_SEARCH_URL = 'https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=0&acr=1&ie=utf8&query='

interface RequestParams {
  query: string
  revalidate?: number
}

// 방법 1: unstable_cache 사용
// - 장점: 세밀한 캐시 제어 가능, ky 등 커스텀 HTTP 클라이언트 사용 가능
// - 단점: 실험적 API로 향후 변경될 수 있음
export async function getNaverSearchResultWithCache({ 
  query, 
  revalidate = 86400 // 기본값 24시간
}: RequestParams) {
  // 캐시된 함수 생성
  const getCachedResult = unstable_cache(
    async () => {
      const client = createApiClient({
        prefixUrl: NAVER_SEARCH_URL + query,
      })
      const response = await client.get('')
      return response.text()
    },
    // 쿼리별로 다른 캐시 키 사용
    ['place-cache-key', query],
    {
      revalidate,
      tags: ['search']
    }
  )

  // 캐시된 함수 실행
  return getCachedResult()
}

// 방법 2: cache() with fetch 사용
// - 장점: Next.js의 안정적인 캐싱 시스템 사용, 설정이 단순
// - 단점: fetch API에 종속적, 세밀한 캐시 제어 불가
export const getNaverSearchResultWithFetchCache = cache(async ({ query, revalidate = 86400 }: RequestParams) => {
  const response = await fetch(NAVER_SEARCH_URL + query, {
    next: { 
      revalidate // 캐시 유효 시간 (초 단위, 24시간)
      // fetch의 next 옵션은 Next.js의 기본 캐싱 시스템 사용
      // 별도의 캐시 키나 태그 지정 불가
    }
  })


  const htmlText = await response.text()
  return htmlText
})

// 캐시 없이 일반 함수로 사용 (비교용)
// - 매 요청마다 새로운 데이터를 가져옴
// - 캐싱이 필요 없는 실시간 데이터에 적합
export async function getPlaceNoCache({ query }: RequestParams) {
  const client = createApiClient({
    prefixUrl: NAVER_SEARCH_URL + query,
  })

  const response = await client.get('')
  const htmlText = await response.text()
  return htmlText
}

