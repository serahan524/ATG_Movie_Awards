/**
 * SearchMovies is search bar that is enables user to search movies by title from the OMDBApi
 */
import React, { Component } from "react";
import { connect } from 'react-redux';

import { searchMovie, fetchMovies } from '../actions/searchActions';

export class SearchMovies extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container form-outline w-75">
                    <form id="searchTitle" onSubmit={this.onSubmit} style={{paddingBottom: '1rem'}}>
                        <input
                        type="text"
                        className="form-control"
                        name="searchTitle"
                        placeholder="Search with Movies Title"
                        onChange={this.onChange}
                        />
                    
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
          </div>
          
        )
    }    
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies})(SearchMovies);