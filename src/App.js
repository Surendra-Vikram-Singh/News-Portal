import "./App.css";
import Layout from "./components/Layout";
import News from "./components/News";
import NoPage from "./components/NoPage";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            exact
            path=""
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                key={Math.random()}
                category="technology"
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
