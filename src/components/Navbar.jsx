// THIS COMPONENT IS FROM FREE & OPEN SOURCE TAILWIND EXTENSION https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars    

import React from "react";
import Popup from "./Popup";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";

export default function Navbar({ loggedIn, setLoggedIn }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-emerald-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Property Zone
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {loggedIn ? 
                <>
                  <li className="nav-item">
                    <Popup loggedIn={loggedIn} setLoggedIn={setLoggedIn} title="Sign Out"><SignOut /></Popup>
                  </li>
                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/user/edit">Edit Profile</Link>
                  </li>
                </>
                 : 
              <>
                <li className="nav-item">
                  <Popup loggedIn={loggedIn} setLoggedIn={setLoggedIn} title="Sign Up"><SignUp /></Popup>
                </li>
                <li className="nav-item">
                  <Popup loggedIn={loggedIn} setLoggedIn={setLoggedIn} title="Log In"><LogIn /></Popup>
                </li>
              </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}