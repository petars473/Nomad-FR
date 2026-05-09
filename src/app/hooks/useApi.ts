import { useCallback } from 'react'
import config from '../config'

/**
 * Hook for making API calls
 * 
 * Automatically handles:
 * - URL resolution (relative URLs resolved via config)
 * - Content-Type header defaults to application/json
 * 
 * @example
 * const { apiCall } = useApi()
 * const response = await apiCall('/users', { method: 'POST', body: JSON.stringify(data) })
 */
export const useApi = () => {
  const apiCall = useCallback(
    async (url: string, options: RequestInit = {}): Promise<Response> => {
      const apiUrl = url.startsWith('http') ? url : config.getApiUrl(url)

      const response = await fetch(apiUrl, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      })


      return response
    },
    [],
  )

  return { apiCall }
}
