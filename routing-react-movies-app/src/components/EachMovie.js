import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import {MoviesList} from './MoviesList';

class EachMovie extends Component{
	constructor(props) {
		super(props);
	}

	getMovieForParamId() {
		return this.props.movies.find((movie) => movie.id === parseInt(this.props.match.params.id));
	}

	render() {
		const mymovie = this.getMovieForParamId();

		return (
			<div>
                <p>Title: {mymovie.title}</p>
                <p>Director: {mymovie.director}</p>
                {mymovie.stars.map((star, index) => {
                	return (
                		<div key={index}>
                		Star {index + 1}: {star}
                		</div>
                	);
                })}
            </div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(EachMovie);