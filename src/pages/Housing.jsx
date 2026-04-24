import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Slideshow from '../components/Slideshow'
import useFetch from '../hooks/useFetch'

function Housing() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: logement, loading, error } = useFetch(`http://localhost:8080/api/properties/${id}`)

  useEffect(() => {
    if (error) navigate('/404')
  }, [error, navigate])

  if (loading) return <p>Chargement...</p>
  if (!logement) return null

  return (
    <main style={{ padding: '0 100px 40px' }}>
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
    </main>
  )
}

export default Housing
