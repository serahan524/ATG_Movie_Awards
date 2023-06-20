/**
 * MoviesContainer is shell of movie cards
 * It also has a method to display the banner if more than 5 movies stored 
 * 
 * From searchMovies 
 * props: movie - searched movies from OMDBApi
 */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { getListMovies } from '../actions/movieActions';
import MovieCard from './MovieCard';

const MoviesContainer = (props) => {
    const { movies } = props;
   
    let content = '';
    let banner = '';
    let counter = 0;
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieLists);
    const { success, loading, userMovie } = movieList;
    const [login, setLogin] = useState(
        JSON.parse(localStorage.getItem('login'))
      );

    useEffect(() => {
        dispatch(getListMovies())
    }, [])

    // Sends searched movie and Calls movie card 
    content = movies?.length > 0 
            ? movies.map((movie, index) => <MovieCard key={index} movie={movie} movieList={userMovie} login={login} />) 
            : null; 

    // Count the number of movies to display banner 
    banner = userMovie?.length > 0 && login !== null 
            ? userMovie.map((mov, index) => login === mov.user  
            ?  counter += 1 
            : null) : null;
                                     
    console.log("container", login)
    return (
      <div className='row' style={{minHeight: '100vh'}}>
        {counter > 4 ? 
        <h3 className='p-3 mb-2 bg-warning text-dark' style={{maxHeight: '9vh'}}>
            You have collected {counter} movies!
            </h3> 
            : null}
        {content}
        
      </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
