import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.componet";
import Shopinglist from "./components/shoping-list/shopinglist.component";
import Header from "./components/header/header.component";
import Signin from "./pages/signin/signin.component.jsx";
import { auth, createFirebaseUser } from "./firebase-auth/firebase.auth.config";
import { connect  } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { setUser } from "./redux/user_reducer/userActions";
import CartitemsPage from "./pages/cartitems/cartitems-page.component";
import { selectCurrentUser } from "./redux/user_reducer/user.selector";
class App extends React.Component {
  
  unsubsscribeUser = null;

  componentDidMount() {
    const { setUser } = this.props;
    this.unsubsscribeUser = auth.onAuthStateChanged(async (user) => {
      const userRef = await createFirebaseUser(user);
      if (user) {
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setUser(user);
    });
  }
  componentWillUnmount() {
    this.unsubsscribeUser();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/item-details" element={<Shopinglist />} />
          <Route
            exact
            path="/sign-in"
            element={<Signin />}
          />
          <Route exact path="/cart-items" element={<CartitemsPage/>} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
