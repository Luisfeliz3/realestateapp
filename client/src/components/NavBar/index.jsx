// THIS COMPONENT IS FROM FREE & OPEN SOURCE TAILWIND EXTENSION https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

import React from "react";
import Popup from "../../components/Popup";
import SignUp from "../../pages/SignUp";
import SignOut from "../../pages/SignOut";
import LogIn from "../../pages/LogIn";
import { Link } from "react-router-dom";
import {Nav, NavDropdown} from "react-bootstrap";
import "./styles.css";

export default function Navbar({ loggedIn, setLoggedIn }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              // className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-grey"
              id="home"
              href="/"
            >
              H|G
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
            <Nav id="second_nav">
              <Nav.Item>
                <Nav.Link href="/user/invest" id="nav_link" eventKey="link-1">Invest</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/homes/:address'  id="nav_link" eventKey="link-1">Buy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/user/sell" id="nav_link" eventKey="link-1">Sell</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="nav_link" eventKey="link-1">Testimonials</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contactus" id="nav_link" eventKey="link-1">Contact Us</Nav.Link>
              </Nav.Item>
              <NavDropdown  title="Social Media" id="nav_link">

                <NavDropdown.Item id="nav_link"eventKey="4.1">
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item id="nav_link" eventKey="4.2">
                  TikTok
                </NavDropdown.Item>
                <NavDropdown.Item  id="nav_link"eventKey="4.3">
                  Twitter
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto"> */}
              <ul>
              {loggedIn ? (
                <>
                  <li className="nav-item">
                    <Popup
                      loggedIn={loggedIn}
                      setLoggedIn={setLoggedIn}
                      title="Sign Out"
                    >
                      <SignOut />
                    </Popup>
                  </li>
                  <li className="nav-item">
                    <Link
                      // className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                      to="/user/edit"
                    >
                      Edit Profile
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Popup
                      loggedIn={loggedIn}
                      setLoggedIn={setLoggedIn}
                      title="Sign Up"
                    >
                      <SignUp />
                    </Popup>
                  </li>
                  <li className="nav-item">
                    <Popup
                      loggedIn={loggedIn}
                      setLoggedIn={setLoggedIn}
                      title="Log In"
                    >
                      <LogIn />
                    </Popup>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
