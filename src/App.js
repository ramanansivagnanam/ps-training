import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showText: true,
    };
  }

  render() {
    return (
      <div className="App">
          <h1>React</h1>
      </div>
    );
  }
}

export default App;
