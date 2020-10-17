import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search';
import Results from './Results';
import Popup from './Popup';
import Tabs from "./Tabs";

function App({ clickBtn }) {
  const [state, setState] = useState({
    s: "",
    moviesResults: [],
    seriesResults: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=2f1d2907"
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&type=movie" + "&s=" + state.s).then(({ data }) => {
        console.log(data);
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, moviesResults: results }
        })
      });
    }
    if (e.key === "Enter") {
      axios(apiurl + "&type=series" + "&s=" + state.s).then(({ data }) => {
        console.log(data);
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, seriesResults: results }
        })
      });
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
    // console.log(state.s);
  }
  let result
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      result = data;
      console.log(result);
      console.log(result.Type);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

return (
    <div className="App">
      <header>
        <h1>Movies<span>DB</span></h1>
        <Search handleInput={handleInput} search={search} />
      </header>
      <main>
        <p><strong>Recently Viewd shows</strong><i><svg className="downArrow" width="46" height="22" viewBox="0 0 46 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.875 1.75L23 20.5L1.125 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </i></p>
        <div className="resultTabs">
          <Tabs>
            <div label="Movies">
              <Results results={state.moviesResults} openPopup={openPopup} />
              {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} clickBtn={clickBtn} /> : false}
             {/* { (typeof state.selected.Title != "undefined") ? selectedOne = state.selected : false} */}
             
            </div>
            <div label="Series">
              <Results results={state.seriesResults} openPopup={openPopup} />
              {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} clickBtn={clickBtn} /> : false}
            </div>
          </Tabs>
        </div>


      </main>
    </div>
  );
}

export default App;
