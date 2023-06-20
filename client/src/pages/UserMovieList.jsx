/**
 * This page filters movies and users to send correnct movie information to the users. 
 * Calls Navbar, UserMovieCard, Footer components 
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserMovieCard from '../components/UserMovieCard';
import { getListMovies } from '../actions/movieActions';
import { getUser } from '../actions/userActions';

const UserMovieList = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const movieList = useSelector(state => state.movieLists);
  const { userMovie } = movieList;
  const users = useSelector(state => state.users);
  const { user } = users
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem('login'))
  );
  let content = '';

  // Get data from store 
  useEffect(() => {
    dispatch(getListMovies())
  }, [dispatch])
 
  useEffect(() => {
    dispatch(getUser())
  }, [])
  
  // Filters the movie list if it is match to the user's list 
  content = userMovie?.length > 0 && login !== null 
    ? userMovie.map((mov, index) => (login === mov.user || location.state === mov.user) 
    ? <UserMovieCard key={index} movie={mov} /> : null) : null
  
  // Sign-out from the userlistpage and clear local storage, then move to Home 
  const handleSignout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div>
      <div className="App" style={{background: 'black', minHeight: '100vh'}}>
      <Navbar login={login}/>
      <div>
        <Button 
          className='position-absolute start-0'
          style={{backgroundColor: 'transparent', borderColor:'transparent', boxShadow: 'none'}} 
          onClick={()=>{handleSignout()}}
          >
            <i className='fas fa-sign-out-alt fa-2x'></i>
            Log-out
          </Button>
          {login !== null 
          ? <h2 className='text-white mb-5'> {user[login-1].firstName}'s Saved Movie List </h2>
          : <h2 className='text-white mb-5'>Saved Movie List</h2>}
      </div> 
        <div className='row'>
          {content}
        </div>
      </div>
      <div style={{marginTop: '-5vh'}}>
      <Footer />
      </div>
    </div>
  )  
}

export default UserMovieList;
