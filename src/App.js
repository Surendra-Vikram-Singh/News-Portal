import "./App.css";
import Layout from "./components/Layout";
import News from "./components/News";
import NoPage from "./components/NoPage";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 3;
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
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key={Math.random()}
                setProgress={setProgress}
                pageSize={pageSize}
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
