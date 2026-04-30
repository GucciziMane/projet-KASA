const API_BASE_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api').replace(/\/$/, '')

export function getPropertiesUrl() {
  return `${API_BASE_URL}/properties`
}

export function getPropertyUrl(id) {
  return `${API_BASE_URL}/properties/${id}`
}
