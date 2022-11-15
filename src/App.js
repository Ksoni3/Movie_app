import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ExploreMovies from './ExploreMovies';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/explore movies' element={<ExploreMovies />}/>
      <Route path='/contact us' element={<ContactUs/>}/>
    </Routes>
   </Router>
   {/* <HomeResult/> */}
   
   <Footer />
   
   </>
  );
}

export default App;
