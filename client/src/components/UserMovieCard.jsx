/**
 * UserMovieCard takes individual movie object to display in card 
 * Movie objects are from ./pages/UserMovieList.jsx
 * Therefore, only the user's movie will display 
 */

import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteListMovies, getListMovies } from '../actions/movieActions';

const UserMovieCard = (props) => {
    const dispatch = useDispatch();
    const { movie } = props;

    function HandleClick(item) {
        dispatch(deleteListMovies(item.id))
        dispatch(getListMovies())
        dispatch(getListMovies())
    }
    
    console.log("usermoviecard", movie)
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} <br/>
            {movie.Year}
          </h5>
            <button type="button" className="btn btn-danger" onClick={()=>{HandleClick(movie)}}>
            Delete
            </button>            
        </div>
      </div>
    )
  
}

export default UserMovieCard;
