import React from 'react'
function Popup({ selected, closePopup, clickBtn}) {
    return (
        <section  onClick={closePopup} className="popup">
            <div className="content">
                <div className="background"><img src={selected.Poster} /></div>
                <div className="data">
                    <h2>{selected.Title}</h2>
                    <div className="plot">
                        <p>{selected.Plot}</p>
                    </div>
                    <div className="movieDataCont">
                    <div className="movieData">
                        <h2>Rating</h2>
                        <p className="rating"><div className="star-rating" title="Rated 4.00 out of 5"><span style={{ width: selected.Ratings[1].Value }}><strong className="rating">4.00</strong> out of 5</span></div>
                        <span style={{fontSize:"16px"}}>({selected.imdbRating})</span></p>

                  
                    </div>
                    <div className="movieData">
                        <h2>Genre</h2>
                        <p>{selected.Genre}</p>
                    </div>
                    <div className="movieData">
                        <h2>Released</h2>
                        <p>{selected.Released}</p>
                    </div>
                    <div className="movieData">
                        <h2>Directors</h2>
                        <p>{selected.Director}</p>
                    </div>
                    <div className="movieData">
                        <h2>Language</h2>
                        <p className="secondaryColor">{selected.Language}</p>
                    </div>
                    </div>
                    {/* <button className="close" onClick={closePopup}>Close</button> */}
                    <button className="btn" value={'1'} onClick={clickBtn}>More Info</button>
                </div>
            </div>
        </section>
    )
}

export default Popup