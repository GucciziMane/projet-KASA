import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import { getPropertyUrl } from '../config/api'
import useFetch from '../hooks/useFetch'
import './Housing.css'

function Housing() {
  const { id } = useParams()
  const { data: logement, loading, error } = useFetch(getPropertyUrl(id))

  if (loading) return null
  if (error || !logement) return <Navigate replace to="/404" />

  const hostName = logement.host?.name ?? ''
  const [hostFirstName, ...hostLastName] = hostName.split(' ')

  return (
    <main className="housing">
      <Slideshow key={logement.id} pictures={logement.pictures} />

      <section className="housing-info">
        <div className="housing-main-info">
          <h1>{logement.title}</h1>
          <p className="housing-location">{logement.location}</p>

          <div className="housing-tags">
            {logement.tags?.map((tag) => (
              <span key={tag} className="housing-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing-side-info">
          <div className="housing-host">
            <p className="housing-host-name">
              <span>{hostFirstName}</span>
              <span>{hostLastName.join(' ')}</span>
            </p>
            {logement.host?.picture && (
              <img
                src={logement.host.picture}
                alt={hostName}
                className="housing-host-picture"
              />
            )}
          </div>

          <Rating value={logement.rating} />
        </div>
      </section>

      <section className="housing-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="housing-equipments">
            {logement.equipments?.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  )
}

export default Housing
