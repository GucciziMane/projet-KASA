import { useState, useEffect } from 'react'

function useFetch(url) {
  const [state, setState] = useState({
    url,
    data: null,
    loading: true,
    error: null,
    status: null,
  })

  useEffect(() => {
    const controller = new AbortController()
    let isCurrent = true

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          const error = new Error(`Erreur ${res.status}`)
          error.status = res.status
          throw error
        }

        return res.json()
      })
      .then((json) => {
        if (!isCurrent) return

        setState({
          url,
          data: json,
          loading: false,
          error: null,
          status: null,
        })
      })
      .catch((err) => {
        if (err.name === 'AbortError' || !isCurrent) return

        setState({
          url,
          data: null,
          loading: false,
          error: err.message,
          status: err.status ?? null,
        })
      })

    return () => {
      isCurrent = false
      controller.abort()
    }
  }, [url])

  const isStale = state.url !== url

  return {
    data: isStale ? null : state.data,
    loading: isStale || state.loading,
    error: isStale ? null : state.error,
    status: isStale ? null : state.status,
  }
}

export default useFetch
