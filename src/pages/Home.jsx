import Banner from '../components/Banner'
import Card from '../components/Card'
import bannerImg from '../assets/banner.png'
import useFetch from '../hooks/useFetch'
import './Home.css'

function Home() {
  const { data: logements, loading, error } = useFetch('http://localhost:8080/api/properties')

  return (
    <main>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" className="banner--shadow" />
      <section className="home-gallery">
        {loading && <p>Chargement...</p>}
        {error && <p>Erreur : {error}</p>}
        {logements && logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </main>
  )
}

export default Home
