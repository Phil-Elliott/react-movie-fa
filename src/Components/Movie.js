import React from 'react'

const Img_API = "http://image.tmdb.org/t/p/w1280"

const setVoteColor = (vote) => {
	if (vote >= 8) {
		return 'green'
	} else if (vote >= 6) {
		return 'orange'
	} else {
		return 'red'
	}
}

const Movie = ({ title, poster_path, vote_average, overview }) => {
	return (
		<div className="movie">
			<img src={Img_API + poster_path} alt={title} />
			<div className="movieInfo">
				<h3>{title}</h3>
				<span className={`tag ${setVoteColor(vote_average)}`}>{vote_average}</span>
			</div>
			<div className="movie-overview">
				<h2>overview:</h2>
				<p>{overview}</p>
			</div>
		</div>
	)
}


export default Movie
