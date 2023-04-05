import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ExploreMovies from './Pages/ExploreMovies'
import ContactUs from './Pages/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import NoMoviesFound from './Components/NoMoviesFound'
import MovieDetails from './Components/MovieDetails'
import Loading from './Components/Loading'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore_movies" element={<ExploreMovies />} />
          <Route path="/explore_movies/:name" element={<ExploreMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
