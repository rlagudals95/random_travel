import ky from 'ky';

interface CreateApiClientParams {
  prefixUrl?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export const createApiClient = ({
  prefixUrl = process.env.NEXT_PUBLIC_API_URL,
  timeout = 10000,
  headers = {},
}: CreateApiClientParams = {}) => {
    
  return ky.create({
    prefixUrl,
    timeout,
    headers,
    hooks: {
      beforeRequest: [
        request => {
          const token = typeof window !== 'undefined' 
            ? localStorage.getItem('token')
            : null;
          
          if (token) {
            request.headers.set('Authorization', `Bearer ${token}`);
          }
        }
      ],
      afterResponse: [
        async (request, options, response) => {
          if (response.status === 401) {
            // Handle unauthorized
          }
        }
      ]
    },
    retry: {
      limit: 2,
      methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
    }
  });
};

export const apiClient = createApiClient(); 