import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, index) => 
    <MovieCard 
      key={index}
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
    />

      // We start off with return and grab the imported file of movieData and were going to iterate through it to grab all of the attributes of a movie
      // The map contains the instance of the movie and the index which indicates where the movie is being grabbed from the array of movies
      // The key is associated to the index in order to be more organized?
      // How do i grab the existing data and pass it into this file?
      
      )
    }
    // title: 'Choux and Maru go to Istanbul',
    // IMDBRating: 3,
    // genres: ['cats', 'adventure', 'romance'],
    // poster: 'choux-maru-istanbul'
    
    render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
