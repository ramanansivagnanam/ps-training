import "./App.css";
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/homepage.componet";
import Shopinglist from "./components/shoping-list/shopinglist.component";
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
          <Routes>
             <Route exact path="/" element={<Homepage/>} />
             <Route path="/item-details" element={<Shopinglist />}/>
          </Routes>
      </div>
    );
  }
}

export default App;
