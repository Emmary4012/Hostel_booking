import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/hotels" element={<List/>}/>
    //     <Route path="/hotels/:id" element={<Hotel/>}/>
    //   </Routes>
    // </Router>
    <div>Hello World! console.log("first")</div>
  );
}

export default App;
