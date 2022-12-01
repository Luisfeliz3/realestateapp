import HomeSearchBar from "../../components/HomeSearchBar";
import InfoCard from "../../components/InfoCard";
import signup from "../../assets/signup.jpg";
import search_homes from "../../assets/search_homes.png";
import buy_home from "../../assets/buy_home.svg";
import buy_page_logo from "../../assets/cozy_living_room.jpg";
import "./styles.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BuyPage = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <section>
        {/* <h2>Creating an Overlay with an Absolutely Positioned Element</h2> */}
        <div className="overlay">
          <div id="search-bar">
            <p>
              A house is made of bricks and beams. A home is made of hopes and
              dreams. We’ll help you find your home.
            </p>
            <p>Creating Opportunities. Building Your Future.</p>
            <HomeSearchBar />
          </div>
        </div>
        {/* <div class="modal">Lorem Ipsum is simply dummy text </div> */}

        <img
          src={buy_page_logo}
          className="w-full flex flex-col h-[800px] items-center justify-center bg-cover bg-center"
        />
      </section>
    </div>
  );
};

export default BuyPage;
