import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Posts from "./components/Posts";
import PostView from "./components/PostView";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/posts/:id' element={<PostView/>}/>
        </Routes>
      </Router>
  );
}

export default App;
