import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
    // Add the code for this action
    const moviesEndpoint = 'http://localhost:5000/movies';
    const movies = axios.get(moviesEndpoint);

    console.log('movies', movies);
    return {
    	type: GET_MOVIES,
    	payload: movies,
    };
};