import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ExploreMovies from './Pages/ExploreMovies'
import ContactUs from './Pages/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import MovieDetails from './Components/MovieDetails'
import WatchLater from './Pages/WatchLater'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore_movies" element={<ExploreMovies />} />
          <Route path="/explore_movies/:name" element={<ExploreMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
