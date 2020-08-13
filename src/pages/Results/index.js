import React, { useState ,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search';
import { isSearchLoading, movieResults } from '../../redux/selectors';

import MovieResult from '../../components/MovieResult'

const Results = ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    const [isLooked, setIsLooked] = useState(false);

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);

        if (movieName && !isLooked) {
            setIsLooked(true);
            dispatch(searchMovie({ movieName }));
        }
    });

    const renderMovies = () => {
        if (movies) {
            return movies.map(m => <MovieResult key={m.imdbID} {...m}/>)
        } else if (isLoading) {
            return <CircularProgress size={100} color="primary"/>
        }

        return <div></div>
    }

    return (
        <Container>
            {renderMovies()}
            {/* jkljl
            {movies && movies.map(m => (
                <MovieResult
                    key={m.imdbID}
                    imdbID={m.imdbID}
                    Title={m.Title}
                    Poster={m.Poster}
                    Year={m.Year}
                    Type={m.Type}
                />
            ))} */}
        </Container>
    )
}

export default Results;
