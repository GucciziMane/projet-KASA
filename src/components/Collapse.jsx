import { useState } from 'react'
import './Collapse.css'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`collapse-arrow ${isOpen ? 'collapse-arrow--open' : ''}`} />
      </button>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse
