import { get } from 'lodash';

export const isSearchLoading = state => get(state, 'search.isLoading');
export const movieResults = state => get(state, 'search.movieResults.Search');
export const movieResult = state => get(state, 'search.movieResult');

// Sin lodash
// export const isSearchLoading = state => state.search.isloading;
// export const movieResults = state => state.search.movieResults.Search;
