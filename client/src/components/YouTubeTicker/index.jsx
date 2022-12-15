import "./styles.css";
import youtube_black_white from "../../assets/youtube_black_white.png";

function YouTubeTicker() {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex -mx-4 img-ticker">
          <div className="promo">
            Check Out Our
            <img id="youtube" src={youtube_black_white} />
            Channel
          </div>
        </div>
      </div>


      <div className="promo_small">
            <p>Check Out Our</p>
            <img id="youtube" src={youtube_black_white} />
            Channel
          </div>
    </div>
  );
}

export default YouTubeTicker;
