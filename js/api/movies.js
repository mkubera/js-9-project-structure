// API MOVIES (FETCH)

const TMDB_API_KEY = "b118f38ec77100db6763b4cc83604589";
const TMDB_URL = "https://api.themoviedb.org/3/";

const getTrending = async (page = 1) => {
	const url = `${TMDB_URL}/trending?api=${TMDB_API_KEY}&page=${page}`;

	try {
		const resp = await fetch(url);
		const data = await resp.json();

		// TODO: do something with data!
		// const trendingMovies = []
		// View.renderMovies(trendingMovies)

		// TODO: save to STORE
	} catch (e) {
		console.error(e);
	}
};

const getSearched = async (page = 1, query = "") => {
	const url = `${TMDB_URL}/search/movie?api=${TMDB_API_KEY}&page=${page}&query=${query}`;

	try {
		const resp = await fetch(url);
		const data = await resp.json();

		// TODO: do something with data!
		// const serchedMovies = []
		// View.renderMovies(serchedMovies)

		// TODO: save to STORE
	} catch (e) {
		console.error(e);
	}
};

const ApiMovies = { getTrending };

export default ApiMovies;
