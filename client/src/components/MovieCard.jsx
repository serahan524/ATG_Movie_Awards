/** 
 * MovieCard works for individual movie object based on searched value 
 * By calling django db, this component enable to save the movie object to the database 
 * 
 * From container
 * props: movie - searched movie
 *        movieList - list of movies in movie table 
*/

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addListMovies, getListMovies } from '../actions/movieActions';
import Modal from './SignInModal';

const MovieCard = (props) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const { movie } = props;
    const { movieList } = props; 
    const [login, setLogin] = useState(
        JSON.parse(localStorage.getItem('login'))
      ); 

    // Dispatching movies from database
    useEffect(() => {
        dispatch(getListMovies())
    }, [dispatch])

    // HandleClick Function takes current user's id and the movie to be saved
    // It calls dispatch to post new movie data into the backend table "movie"
    function HandleClick(mov, login) {
        const item = {
            user: login,
            Title: mov.Title,
            Year: mov.Year,
            Rated: mov.Rated,
            Released: mov.Released,
            Runtime: mov.Runtime,
            Genre: mov.Genre,
            Director: mov.Director,
            Writer: mov.Writer,
            Actors: mov.Actors,
            Plot: mov.Plot,
            Language: mov.Language,
            Country: mov.Country,
            Awards: mov.Awards,
            Poster: mov.Poster,
            Ratings: mov.Ratings,
            Metascore: mov.Metascore,
            imdbRating: mov.imdbRating,
            imdbVotes: mov.imdbVotes,
            imdbID: mov.imdbID, 
            Type: mov.Type,
            DVD: mov.DVD, 
            BoxOffice: mov.BoxOffice,
            Production: mov.Production,
            Website: mov.Website,
            Response: mov.Response,
        };        
        
        dispatch(addListMovies(item));
        dispatch(getListMovies())
        dispatch(getListMovies())
    }
    
    return (
        <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
            <img className="card-img-top w-100 mb-2" 
                    src={movie.Poster !== "N/A" ? movie.Poster : 'http://via.placeholder.com/400'}  
                    alt="Movie Cover" />
            <h5 className="text-light card-text">
                {movie.Title} <br/>
                {movie.Year}
            </h5>
                {login !== null
                ? (
                    <button type="submit" 
                        className="btn btn-primary" 
                        disabled={
                            movieList?.length > 0 && login !== null 
                            ? movieList.some(movList => movList.Title === movie.Title && movList.user === login)
                            : false} 
                        onClick={(e) => { HandleClick(movie, login)}}                    
                        >

                    Save to MyMovies
                    </button> 
                ) : (
                    <>
                    <Button className='btn btn-primary' 
                        onClick={()=>setShowModal(true)}>
                    Save to MyMovie
                    </Button>
                    <Modal show={showModal}
                        onHide={() => setShowModal(false)} />
                    </>
                )}

            </div>
        </div>
    ) 
}

export default MovieCard;
