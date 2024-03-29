import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovies, saveMovie } from "./../services/fakeMovieService";
//import { getGenres } from "./../services/genreService";
//import { getMovies, saveMovie } from "./../services/movieService";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.string()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.string()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  componentDidMount() {
    /*
      Add async to function name

      const {data: genres } = await getGenres();
      this.setState({genres});

       const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovies(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });


    */

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    /*
          
          try{
            const {data: movie} = await getMovie(movieId);
            this.setState({ data: this.mapToViewModel(movie) });
          } catch (ex) {
            
            if (ex.response && ex.response.status === 404) this.props.history.replace("/not-found");
          }
    */
    const movie = getMovies(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = () => {
    /*
      add async

      await saveMovie(this.state.data);
    */

    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderInput("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
