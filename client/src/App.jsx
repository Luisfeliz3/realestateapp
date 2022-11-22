
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import MapSearch from './components/MapSearch';
import EditUser from './components/EditUser';
import { useState } from "react"

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false)
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/homes/:address' element={<MapSearch loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }/>
        <Route path='/user/edit' element={<EditUser setLoggedIn={setLoggedIn}/>}/>
      </Routes>


    </div>
  );
}

export default App;
