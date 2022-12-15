import HomeSearchBar from "../../components/HomeSearchBar";
import logo from "../../assets/hg_logo.png";
import youtube_black_white from "../../assets/youtube_black_white.png";
import three_execs_samp from "../../assets/three_execs_samp.png";
import YouTubeTicker from "../../components/YouTubeTicker"
import "./styles.css";

const HomePage = (props) => (
  <div>
    <div>
      <img
        id="landing_page_img"
        src={logo}
       />
      <div id="search-bar">
        <HomeSearchBar />
      </div>
    </div>

    <div className="main-box">
      <div className="main-box-1">
        <h2 id="hijar_title">THE HIJAR GROUP</h2>
        <p className="main-box-text">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a
          treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </p>
      </div>

  
      <div id="group_image">
      <img id="exec_pic" src={three_execs_samp} />
      </div>
    </div>

    <YouTubeTicker />

    <div className="intro">
      <div className="sides">
        <div className="side monkeys">
          {/* <h2 class="name">Monkey</h2>  */}
          <div className="emoji">
            <div className="wrapper">
              <div className="box">{/* <p>Radial gradient</p> */}</div>
            </div>
          </div>
        </div>
        <div className="versus">
          <span>H|G</span>
        </div>
        <div className="side robots">
          {/* <h2 class="name">Robot</h2>  */}
          <div className="emoji">
            <div className="wrapper">
              <div className="boxed">{/* <p>Radial gradient</p> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
