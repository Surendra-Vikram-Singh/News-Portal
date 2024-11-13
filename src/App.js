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
            setProgress={setProgress}
            pageSize={pageSize}
            path=""
            element={<News key={Math.random()} category="general" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/business"
            element={<News key={Math.random()} category="business" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/entertainment"
            element={<News key={Math.random()} category="entertainment" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/general"
            element={<News key={Math.random()} category="general" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/health"
            element={<News key={Math.random()} category="health" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/science"
            element={<News key={Math.random()} category="science" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/sports"
            element={<News key={Math.random()} category="sports" />}
          />
          <Route
            exact
            setProgress={setProgress}
            pageSize={pageSize}
            path="/technology"
            element={<News key={Math.random()} category="technology" />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
