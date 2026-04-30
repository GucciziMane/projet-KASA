import './Rating.css'

function Rating({ value }) {
  const rating = Number(value)

  return (
    <div className="rating" aria-label={`Note ${rating} sur 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? 'rating-star rating-star--active' : 'rating-star'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating
