'use server'
import {  createApiClient } from "@/shared/api/client";

export interface Place {
  id: string;
  name: string;
  description: string;
}

export async function getPlace(): Promise<unknown> {

    const client = createApiClient({
        prefixUrl: 'http://www.naver.com',
    })

    const response = await client.get(''); 
    const htmlText = await response.text();
    
    return htmlText;
}
