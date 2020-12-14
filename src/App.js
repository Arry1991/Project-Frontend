import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import Home from "./pages";
import Register from "./components/Register/Register";
import Business from "./components/Business/Business";
import Login from "./components/Login/Login";
import BusinessInfo from "./components/Business/BusinessInfo";
import BusinessMain from "./components/Business/BusinessMain";
import axios from "axios";
import SelectBusiness from "./components/SelectBusiness/SelectBusiness";
import AddBusiness from "./components/AddBusiness/AddBusiness";
import ChooseRegister from "./components/ChooseRegister/ChooseRegister";
import PatronRegister from "./components/PatronRegister/PatronRegister";
import NewAlert from "./components/Notifications/NewAlert";
import NewNotification from "./components/Business/NewNotification";
import BusinessOwnerInfo from "./components/Business/BusinessOwnerInfo";
import PatronMain from "./components/Patron/PatronMain";
import PatronInfo from "./components/Patron/PatronInfo";
import BusinessSearch from "./components/Patron/BusinessSearch";

function App() {
  // This runs right when the app starts (useEffect)
  useEffect(() => {
    // if cookie with a name of token exists
    // then
    if (Cookies.get("PHPSESSID") !== undefined) {
      console.log("token is here");
      // Send to back end for verification
      const url = "/react-backend/";
      axios
        .put(url, Cookies.get("PHPSESSID")) //URL FROM BACKEND - Token Verification route needed
        // If back end send a succefful response make auth true granting access
        .then((res) => {
          setAuth(true);
        })
        // if backend send fail change auth to false
        .catch((err) => {
          console.log(err);
          setAuth(false); //CHANGE TO FALSE
        });
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [businessType, setBusinessType] = useState();
  const [userType, setUserType] = useState();

  const userTypeHandler = (x) => {
    setUserType(x);
  };

  const businessTypeHandler = (e) => {
    setBusinessType(e.target.value);
    console.log(e.target.value);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
        }
      />
    );
  };
  const handleAuth = (props) => {
    setAuth(props);
    console.log("Auth Changing");
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        auth={auth}
        handleAuth={handleAuth}
        displayState={userType}
        displayStateHandler={userTypeHandler}
      />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/SearchBusiness' component={BusinessSearch} />
        <PrivateRoute exact path='/Business' component={Business} auth={auth} />
        <Route exact path='/Business' component={Business} />
        <Route exact path='/ChooseRegister' component={ChooseRegister} />
        <Route exact path='/Login'>
          <Login
            authHandler={handleAuth}
            value={businessType}
            valueHandler={businessTypeHandler}
            userValueHandler={userTypeHandler}
          />
        </Route>
        <Route exact path='/Register' component={Register}></Route>
        <Route exact path='/PatronRegister' component={PatronRegister}></Route>
        <PrivateRoute exact path='/NewAlert' component={NewAlert} auth={auth} />
        <Route exact path='/NewAlert' component={NewAlert} />
        <PrivateRoute
          exact
          path='/NewNotification'
          component={NewNotification}
          auth={auth}
        />
        <Route exact path='/NewNotification' component={NewNotification} />
        <Route exact path='/AddBusiness' component={AddBusiness}></Route>
        {/* <Route exact path='/Login' component={Login} x={handleAuth} />  */}
        <PrivateRoute
          exact
          path='/BusinessInfo'
          component={BusinessInfo}
          auth={auth}
        />
        <Route exact path='/BusinessInfo' component={BusinessInfo} />
        <PrivateRoute
          exact
          path='/PatronInfo'
          component={PatronInfo}
          auth={auth}
        />
        <Route exact path='/PatronInfo' component={PatronInfo} />
        <PrivateRoute
          exact
          path='/BusinessOwnerInfo'
          component={BusinessOwnerInfo}
          auth={auth}
        />
        <Route exact path='/BusinessOwnerInfo' component={BusinessOwnerInfo} />
        <PrivateRoute
          exact
          path='/PatronMain'
          component={PatronMain}
          auth={auth}
        />
        <Route exact path='/PatronMain' component={PatronMain} />
        <PrivateRoute
          exact
          path='/BusinessMain'
          component={BusinessMain}
          auth={auth}
        />
        <Route exact path='/BusinessMain' component={BusinessMain} />
        <PrivateRoute
          exact
          path='/SelectBusiness'
          component={SelectBusiness}
          auth={auth}
        />
        <Route exact path='/SelectBusiness' component={SelectBusiness} />
        {userType === "1" && (
          <Route exact path='/test1' component={SelectBusiness} />
        )}
        {userType === "2" && (
          <Route exact path='/test2' component={BusinessMain} />
        )}
        {/* 404(page not found) Redirect */}
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
