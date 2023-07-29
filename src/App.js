import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 12;
  const country = "in";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={2}
          shadow={true}
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category={"general"}
              />
            }
          ></Route>

          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country={country}
                category={"business"}
              />
            }
          ></Route>

          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category={"general"}
              />
            }
          ></Route>

          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                ageSize={pageSize}
                country={country}
                category={"health"}
              />
            }
          ></Route>

          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                ageSize={pageSize}
                country={country}
                category={"science"}
              />
            }
          ></Route>

          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                ageSize={pageSize}
                country={country}
                category={"sports"}
              />
            }
          ></Route>

          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                ageSize={pageSize}
                country={country}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
