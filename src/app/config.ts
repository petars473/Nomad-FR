/**
 * Application configuration
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

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
    return `${API_BASE_URL}${url.startsWith('/') ? url : `/${url}`}`
  },

  /**
   * API base URL for direct use
   */
  apiBaseUrl: API_BASE_URL,
}

export default config
