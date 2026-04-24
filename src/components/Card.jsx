import { Link } from 'react-router-dom'
import './Card.css'

function Card({ logement }) {
  return (
    <Link to={`/housing/${logement.id}`} className="card">
      {logement.cover && (
        <img src={logement.cover} alt={logement.title} className="card-img" />
      )}
      <div className="card-overlay" />
      <p className="card-title">{logement.title}</p>
    </Link>
  )
}

export default Card
