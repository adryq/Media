import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { MusicBox } from './mediaComponents/Music/Music';



function App() {

  const Playlists = new MusicBox()

  return (

    <Router>
    <Routes>
      <Route path='/' element={Playlists.render()}></Route>
    </Routes>
    </Router>
  );
 
}

export default App;
