import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Slideshow from './Slideshow'

const pictures = ['img1.jpg', 'img2.jpg', 'img3.jpg']

describe('Slideshow', () => {
  it('ne rend rien si pictures est vide', () => {
    const { container } = render(<Slideshow pictures={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('ne rend rien si pictures est absent', () => {
    const { container } = render(<Slideshow />)
    expect(container.firstChild).toBeNull()
  })

  it('affiche la première image au chargement', () => {
    render(<Slideshow pictures={pictures} />)
    expect(screen.getByAltText('Photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Photo 1')).toHaveAttribute('src', 'img1.jpg')
  })

  it("n'affiche pas les flèches ni le compteur avec une seule image", () => {
    render(<Slideshow pictures={['img1.jpg']} />)
    expect(screen.queryByLabelText('Image précédente')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Image suivante')).not.toBeInTheDocument()
    expect(screen.queryByText(/\//)).not.toBeInTheDocument()
  })

  it('affiche les flèches et le compteur avec plusieurs images', () => {
    render(<Slideshow pictures={pictures} />)
    expect(screen.getByLabelText('Image précédente')).toBeInTheDocument()
    expect(screen.getByLabelText('Image suivante')).toBeInTheDocument()
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('passe à la photo suivante au clic sur la flèche droite', async () => {
    const user = userEvent.setup()
    render(<Slideshow pictures={pictures} />)
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByAltText('Photo 2')).toHaveAttribute('src', 'img2.jpg')
    expect(screen.getByText('2/3')).toBeInTheDocument()
  })

  it('passe à la photo précédente au clic sur la flèche gauche', async () => {
    const user = userEvent.setup()
    render(<Slideshow pictures={pictures} />)
    await user.click(screen.getByLabelText('Image suivante'))
    await user.click(screen.getByLabelText('Image précédente'))
    expect(screen.getByAltText('Photo 1')).toHaveAttribute('src', 'img1.jpg')
  })

  it('revient à la première image après la dernière (boucle →)', async () => {
    const user = userEvent.setup()
    render(<Slideshow pictures={pictures} />)
    await user.click(screen.getByLabelText('Image suivante'))
    await user.click(screen.getByLabelText('Image suivante'))
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByAltText('Photo 1')).toHaveAttribute('src', 'img1.jpg')
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('va à la dernière image depuis la première (boucle ←)', async () => {
    const user = userEvent.setup()
    render(<Slideshow pictures={pictures} />)
    await user.click(screen.getByLabelText('Image précédente'))
    expect(screen.getByAltText('Photo 3')).toHaveAttribute('src', 'img3.jpg')
    expect(screen.getByText('3/3')).toBeInTheDocument()
  })
})
