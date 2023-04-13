import UtilsDom from "../utils/dom";

const moviesDOM = UtilsDom.qs("#moviesDOM");

const renderMovies = (movies) => {
	moviesDOM.innerHTML = movies.map(
		(m) => `
    <li>${m.title}</li>
  `,
	);
};

const View = { renderMovies };

export default View;
