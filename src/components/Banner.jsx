import './Banner.css'

function Banner({ image, text, className }) {
  return (
    <div className={`banner${className ? ` ${className}` : ''}`} style={image ? { backgroundImage: `url(${image})` } : {}}>
      <div className="banner-overlay" />
      {text && <p className="banner-text">{text}</p>}
    </div>
  )
}

export default Banner
