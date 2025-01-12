export function createUrlWithParams<
  T extends Record<string, string | number | boolean>,
>(baseUrl: string, params: T): string {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });
  return url.toString();
}
