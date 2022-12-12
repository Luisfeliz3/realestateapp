import "./styles.css";
import youtube_black_white from "../../assets/youtube_black_white.png";

function YouTubeTicker() {
  return (
    <div>
      <div class="overflow-hidden">
        <div class="flex -mx-4 img-ticker">
          <div className="promo">
            Check out our
            <img id="youtube" src={youtube_black_white} />
            channel
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default YouTubeTicker;
