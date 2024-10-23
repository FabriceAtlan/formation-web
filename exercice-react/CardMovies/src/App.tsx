import Header from './assets/components/Nav/Header'
import { Card, newMovies } from './assets/components/Card/Card'
import Footer from './assets/components/Nav/Footer'

import './assets/components/Nav/Nav.css'
import './assets/components/Card/Card.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
          <Card movie={newMovies[0]} />
          <Card movie={newMovies[1]} />
          <Card movie={newMovies[2]} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
