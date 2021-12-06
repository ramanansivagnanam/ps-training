import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.componet";
import Shopinglist from "./components/shoping-list/shopinglist.component";
import Header from "./components/header/header.component";
import Signin from "./pages/signin/signin.component.jsx";
import { auth , createFirebaseUser} from "./firebase-auth/firebase.auth.config";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubsscribeUser = null;

  componentDidMount() {
    this.unsubsscribeUser = auth.onAuthStateChanged(async (user) => {
      const userRef = await createFirebaseUser(user);
      if(user){
        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({currentUser: user});
    });
  }
  componentWillUnmount() {
    this.unsubsscribeUser();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/item-details" element={<Shopinglist />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
      </div>
    );
  }
}

export default App;
