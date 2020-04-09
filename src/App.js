import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import AuthRoute from "./router/AuthRoute";
import Login from "./modules/Login";
import PropTypes from "prop-types";


function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute isValidUser={props.isValidUser}/>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/login" />}
          ></Route>
          <Redirect exact from="*" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ isValidUser }) => {
  return { isValidUser };
};
export default connect(mapStateToProps, null)(App);


App.defaultProps = {
  isValidUser: true,
};
App.propTypes = {
  isValidUser: PropTypes.bool,
};
