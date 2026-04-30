import { useRef, useState } from 'react'
import './Collapse.css'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)
  const contentRef = useRef(null)

  function handleToggle() {
    if (panelRef.current && contentRef.current) {
      panelRef.current.style.maxHeight = isOpen ? '0px' : `${contentRef.current.scrollHeight}px`
    }

    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`collapse-arrow ${isOpen ? 'collapse-arrow--open' : ''}`} />
      </button>
      <div
        className={`collapse-panel ${isOpen ? 'collapse-panel--open' : ''}`}
        ref={panelRef}
        aria-hidden={!isOpen}
      >
        <div className="collapse-content">
          <div className="collapse-content-inner" ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
