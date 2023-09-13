import React from "react";
import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  // Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Layout from "./components/layout";

function App() {
  return (
    // <Layout>
    <Router>
      <Routes>
        <Route path="/profile" caseSensitive={false} element={<Profile />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
    </Router>
    // </Layout>
  );
}

export default App;
