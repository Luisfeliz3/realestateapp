
import './App.css';
import Navbar from './components/NavBar';
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import BuyPage from "./pages/BuyPage"
import MapSearch from './pages/MapSearchPage';
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
        <Route path='/user/buy' element={<BuyPage/>}/>
      </Routes>


    </div>
  );
}

export default App;
