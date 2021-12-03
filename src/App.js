import "./App.css";
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.componet";
import Shopinglist from "./components/shoping-list/shopinglist.component";
import Header from './components/header/header.component';
import Signin from './pages/signin/signin.component.jsx';
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
          <Header />
          <Routes>
             <Route exact path="/" element={<Homepage/>} />
             <Route path="/item-details" element={<Shopinglist />}/>
             <Route path="/sign-in" element={<Signin/>} />
          </Routes>
      </div>
    );
  }
}

export default App;
