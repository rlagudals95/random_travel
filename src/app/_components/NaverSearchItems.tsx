'use client'

import { usePlaceQuery } from "@/app/_apis/queries/place";

export const NaverSearchItems = () => {

  const { data } = usePlaceQuery({ query: '여수 여행' });
  console.log('data', data)
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}; 