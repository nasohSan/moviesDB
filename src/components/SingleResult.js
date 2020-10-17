import React from 'react'

function SingleResult({ singleResult, openPopup }) {
	return (
		<div className="singleResult" onClick={() => openPopup(singleResult.imdbID)}>
			<img src={singleResult.Poster} />
			<h3>{singleResult.Title}</h3>
		</div>
	)
}

export default SingleResult