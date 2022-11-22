import React, { useEffect } from "react";
import {post, get} from "../../http/service"
import ListHomes from "../ListHomes"
const Tabs = ({ loggedIn, setLoggedIn, searchResults, setSearchResults }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [savedHomes, setSavedHomes] = React.useState([])
  const [saved, setSaved] = React.useState([])
  
  const removeHome = (listing) => {
    post("/homes/delete-home", {listing}).then(results => {
        setSavedHomes(savedHomes.filter(thelisting => thelisting._id !== listing));
    })
}

  const updateSavedHomes = () => {
    get("/homes").then(results => {
      setSavedHomes(results.data.home_list.savedHomes)
    })  
  }

  useEffect(() => {
    let savedIDs = savedHomes.map(home => home.listing_id_api)
    setSaved(searchResults.map(listing => {
      return {liked: savedIDs.includes(listing.listing_id), savedHomesIndex: savedIDs.indexOf(listing.listing_id)}
    }))
  }, [searchResults, savedHomes])

  const addHome = (listing) => {
    const body = {
      address : listing.address_new.line ? `${listing.address_new.line}, ${listing.address_new.city}, ${listing.address_new.state_code} ${listing.address_new.postal_code}` : listing.address,
      city: listing.address_new.city,
      state: listing.address_new.state,
      zip_code: listing.address_new.postal_code,
      state_code: listing.address_new.state_code,
      county_name: listing.address_new.county,
      price: listing.price,
      lat: listing.lat,
      lng: listing.lon,
      property_id_api: listing.property_id,
      sqft: listing.sqft,
      property_type: listing.prop_type,
      listing_id_api: listing.listing_id,
      new_construction: listing.is_new_construction, 
      image_link: listing.photo_count ? listing.photo : null, 
      neighborhood_name: listing.address_new.neighborhood_name,
      office_name: listing.office_name,
      beds: listing.beds, 
      baths: listing.baths, 
      virtual_tour_link: listing.virtual_tour ? listing.virtual_tour.href : null, 
      lot_sqft: listing.lot_size,
    }
    post("/homes/add-home", body).then(results => {
      console.log(results)
    }).catch(err => {
      console.log( err)
    }).then(() => updateSavedHomes())
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full h-[89vh]">
          <ul
            className="flex mb-0 list-none flex-wrap pb-3 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-emerald-600"
                    : "text-emerald-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Search Results
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-emerald-600"
                    : "text-emerald-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                  updateSavedHomes()
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Saved Homes
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded overflow-y-scroll h-[81vh]">
            <div className="px-3 py-3 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="row justify-content-around">
                    {searchResults.map((listing,index) => {
                      return (
                        <div className="col-12 col-lg-6 my-2" key={listing.listing_id}>
                          <div className=" border-2 rounded">
                            {listing.photo_count ? <img src={listing.photo} className=" h-36 mx-auto" alt="house" /> : <div className="h-36 flex justify-center items-center"><p>No Photo Available</p></div>}
                            <div>
                              <p className=" text-left ml-2 mt-2">{listing.price}</p>
                            </div>
                            <div>
                              <p className=" text-left ml-2">{listing.beds} Bed  |  {listing.baths} Bath  |  {listing.sqft}</p>
                            </div>
                            <div>
                              <p className=" text-sm text-left ml-2">{listing.address_new.line ? `${listing.address_new.line}, ${listing.address_new.city}, ${listing.address_new.state_code} ${listing.address_new.postal_code}` : listing.address}</p>
                            </div>
                            <div>
                              <p className="text-sm text-left ml-2">{listing.office_name}</p>
                            </div>
                            <br />
                            <div>
                            {loggedIn ? ( saved[index]?.liked 
                            ?  
                            <i onClick={() => removeHome(savedHomes[saved[index].savedHomesIndex]._id)} className="fas fa-heart hover:cursor-pointer"></i>
                            : 
                            <i onClick={() => addHome(listing)} className="far fa-heart hover:cursor-pointer"></i>) : <p>Please login to save homes</p>}
  

                            </div>
                            <br />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {loggedIn ? <ListHomes savedHomes={savedHomes} setSavedHomes={setSavedHomes}/> :
                    <p>Please sign in to view this information.</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsView(props) {
  return (
    <>
      <Tabs color="emerald" loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
    </>
  );
}