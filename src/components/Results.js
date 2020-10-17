import React from 'react'
import SingleResult from './SingleResult'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{results.map(singleResult => (
				<SingleResult key={singleResult.imdbID} singleResult={singleResult} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results