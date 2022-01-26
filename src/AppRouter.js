import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import SingleBlog from "./pages/SingleBlog";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blogDetails/:id">
            <SingleBlog />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
