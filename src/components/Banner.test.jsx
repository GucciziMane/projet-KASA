import { render, screen } from '@testing-library/react'
import Banner from './Banner'

describe('Banner', () => {
  it('affiche le texte quand la prop text est fournie', () => {
    render(<Banner text="Chez vous, partout et ailleurs" />)
    expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()
  })

  it("n'affiche pas de texte quand la prop text est absente", () => {
    const { container } = render(<Banner />)
    expect(container.querySelector('.banner-text')).not.toBeInTheDocument()
  })

  it('applique le style backgroundImage quand image est fournie', () => {
    const { container } = render(<Banner image="banner.png" />)
    const bannerDiv = container.querySelector('.banner')
    expect(bannerDiv).toHaveStyle({ backgroundImage: 'url(banner.png)' })
  })

  it("n'applique pas backgroundImage quand image est absente", () => {
    const { container } = render(<Banner />)
    const bannerDiv = container.querySelector('.banner')
    expect(bannerDiv.style.backgroundImage).toBe('')
  })

  it('ajoute une className supplémentaire quand la prop className est fournie', () => {
    const { container } = render(<Banner className="banner--about" />)
    const bannerDiv = container.querySelector('.banner')
    expect(bannerDiv).toHaveClass('banner', 'banner--about')
  })

  it('contient toujours un overlay', () => {
    const { container } = render(<Banner />)
    expect(container.querySelector('.banner-overlay')).toBeInTheDocument()
  })
})
