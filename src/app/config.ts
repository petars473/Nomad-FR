/**
 * Application configuration
 */

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/').trim()

function joinUrl(baseUrl: string, path: string): string {
  const normalizedPath = `/${path.replace(/^\/+/, '')}`

  if (!baseUrl || baseUrl === '/') {
    return normalizedPath
  }

  return `${baseUrl.replace(/\/+$/, '')}${normalizedPath}`
}

const config = {
  /**
   * Resolve an API URL
   * If the URL starts with http, use it directly
   * Otherwise, resolve it relative to the API base URL
   */
  getApiUrl: (url: string): string => {
    if (url.startsWith('http')) {
      return url
    }
    return joinUrl(API_BASE_URL, url)
  },

  /**
   * API base URL for direct use
   */
  apiBaseUrl: API_BASE_URL,
}

export default config
