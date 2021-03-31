import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'kJFhAnjalLumIYx1cBjadhITVVLGGIWJ'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    state = {
        movies: []
    }

    componentDidMount(){
        fetch(URL)
            .then(response => response.json())
            .then(movieData => this.setState({ movies: movieData.movies }))
    }

    render() {
        return(

        <div className="searchable-movie-reviews"></div>,
        <MovieReviews movies={this.state.movies} />
        )
    }
}
export default LatestMovieReviewsContainer