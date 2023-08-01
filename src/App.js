import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Resume from "./components/Resume"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

// background-image: linear-gradient(
// 	to right,
// 	#dea529 0,
//     #cb9b51 22%, 
// 	#f6e27a 45%,
// 	#f6f2c0 50%,
// 	#f6e27a 55%,
// 	#cb9b51 78%,
// 	#a37615 100%
// 	);
//     color:transparent;
//     -webkit-background-clip:text;