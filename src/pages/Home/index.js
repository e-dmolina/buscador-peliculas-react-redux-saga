import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import styles from './style';
import { MovieIcon } from '../../icons';

const Home = ({ history }) => {

	const [searchText, setSearchText] = useState('');
	const classes = styles();

	const handleSearchTextChange = e => {
		setSearchText(e.target.value);
	}

	const handleCleanTextClick = () => {
		setSearchText('');
	}

	const handleSearchTextClick = () => {
		history.push(`/results?movieName=${searchText}`);
	}

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>
							Bienvenido!
					</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon}/>
					</Grid>
				</Grid>
				<TextField
					className={classes.textFieldSearch}
					value={searchText}
					placeholder="Buscar..."
					onChange={handleSearchTextChange}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button
						variant="contained"
						onClick={handleCleanTextClick}
					>Limpiar
					</Button>
					<Button
						className={classes.searchButton}
						variant="contained"
						color="primary"
						size="large"
						onClick={handleSearchTextClick}
					>Buscar
					</Button>
				</Grid>
			</Card>
		</Container>
	)
}

export default Home
