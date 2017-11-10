import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import EachMovie from './EachMovie.js';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export class MoviesList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return (
            <div>
                <h2>Movies</h2>
                {this.props.movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
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

export default connect(mapStateToProps, { getMovies })(MoviesList);