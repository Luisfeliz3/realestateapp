import HomeSearchBar from "../../components/HomeSearchBar"
import logo from "../../assets/hg_logo.png"
import "./styles.css"

const HomePage = (props) => {
  return (
    <div>
      <div >
                <img src={logo}className="w-full flex flex-col h-[800px] items-center justify-center bg-cover bg-center"/>
               <div id = "search-bar">
               <HomeSearchBar />
               </div>
      </div>

     
        
        <div className="main-box">
        <div className="boxed-1">Left Side Transition</div>
        <div className="boxed-2">Right Side Transition</div>
        </div>
        
         
          {/* <div className="row w-[90vw] justify-content-around">
            <InfoCard title="Search Homes" image={search_homes} text="Find the ideal home in the US that is just right for you."/>
            <InfoCard title="Save Homes" image={signup} text="Sign up to start saving the homes that caught your eye."/>
            <InfoCard title="View Listing Details" image={buy_home} text="Find the right people to contact about the homes you loved."/>
          </div> */}
   
    </div>
  )
}

export default HomePage