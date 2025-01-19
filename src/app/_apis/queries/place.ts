'use client'

import { useQuery } from "@tanstack/react-query"
import { getNaverSearchResultWithFetchCache } from "@/app/map-page/_apis/getNaverSearchResult"

export function usePlaceQuery({ query }: { query: string }) {
  return useQuery({
    queryKey: ['place'],
    queryFn: () => getNaverSearchResultWithFetchCache({ query }),
  })
}