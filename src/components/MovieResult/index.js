import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster }) => {

    let history = useHistory();
    const classes = style();

    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`)
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>

                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MovieResult;
