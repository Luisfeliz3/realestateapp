import HomeSearchBar from "../../components/HomeSearchBar"
import InfoCard from "../../components/InfoCard"
import signup from "../../assets/signup.jpg"
import search_homes from "../../assets/search_homes.png"
import buy_home from "../../assets/buy_home.svg"
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
        {/* <div className=" h-96 flex flex-col items-center justify-evenly">
          <div>
            <h1 className=" text-5xl text-white font-bold">Welcome to Property Zone</h1>
          </div>
          
          <div>
            <p className=" text-3xl text-white font-semibold">The reality of owning a home a click away</p>
          </div>
          <div className=" w-full">
          
          </div>
        </div> */}
      
      </div>

      <div className="flex justify-center items-center w-full mb-8">
        
          {/* <div className="row w-[90vw] justify-content-around">
            <InfoCard title="Search Homes" image={search_homes} text="Find the ideal home in the US that is just right for you."/>
            <InfoCard title="Save Homes" image={signup} text="Sign up to start saving the homes that caught your eye."/>
            <InfoCard title="View Listing Details" image={buy_home} text="Find the right people to contact about the homes you loved."/>
          </div> */}
  
      </div>
    </div>
  )
}

export default HomePage