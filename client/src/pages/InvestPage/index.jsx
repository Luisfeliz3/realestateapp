import HomeSearchBar from "../../components/HomeSearchBar";
import buy_page_logo from "../../assets/cozy_living_room.jpg";
import "./styles.css";
import React, { useState } from "react";


const InvestPage = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <section>
        {/* <h2>Creating an Overlay with an Absolutely Positioned Element</h2> */}
        <div className="overlay">
          <div id="buy-search-bar">
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

export default InvestPage;
