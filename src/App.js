import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main"
import MoviePage from "./components/MoviePage";

class App extends Component {
  state = {
    renderView: 0
  };

  clickBtn = e => {
    this.setState({
      renderView: +e.target.value
    });
  };

  render() {
    switch (this.state.renderView) {
      case 1:
        return <MoviePage  clickBtn={this.clickBtn} selected= {this.selectedOne}/>;
      default:
        return <Main clickBtn={this.clickBtn} selectedOne= {this.selectedOne} />;
        
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
