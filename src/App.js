import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Mainjs from "./components/Mainpage";

function App() {
  return (
    <Router>
      <Mainjs/>
    </Router>
  );
}

export default App;