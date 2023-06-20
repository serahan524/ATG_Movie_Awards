/**
 * Main page calls components 
 */
import '../App.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchMovies from '../components/SearchMovies';
import MoviesContainer from '../components/MoviesContainer';


const Home = () => {
  const location = useLocation();
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem('login'))
  );

  return (
    
    <div className="App" style={{background: 'black', height: '100%'}}>
        <Navbar propsLogin={location.state}/>
        <SearchMovies />    
        <MoviesContainer propsLogin={location.state}/>
        <Footer/>
    </div>
  );
}

export default Home;
