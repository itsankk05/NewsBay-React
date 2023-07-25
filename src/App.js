import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  country = "us";
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"general"}
                />
              }
            ></Route>

            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"business"}
                />
              }
            ></Route>

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"general"}
                />
              }
            ></Route>

            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  ageSize={this.pageSize}
                  country={this.country}
                  category={"health"}
                />
              }
            ></Route>

            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  ageSize={this.pageSize}
                  country={this.country}
                  category={"science"}
                />
              }
            ></Route>

            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  ageSize={this.pageSize}
                  country={this.country}
                  category={"sports"}
                />
              }
            ></Route>

            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  ageSize={this.pageSize}
                  country={this.country}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
