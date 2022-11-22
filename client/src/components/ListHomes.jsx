import { post } from "../http/service"

const ListHomes = (({savedHomes, setSavedHomes}) => {
    
    const removeHome = (listing) => {
        post("/homes/delete-home", {listing}).then(results => {
            setSavedHomes(savedHomes.filter(thelisting => thelisting._id !== listing));
        })
    }
    
    return <div className="row justify-content-around">
                    {savedHomes.map(listing => {
                      return (
                        <div className="col-12 col-lg-6 my-2" key={listing.listing_id_api}>
                          <div className=" border-2 rounded">
                            {listing.image_link ? <img src={listing.image_link} className=" h-36 mx-auto" alt="house" /> : <div className="h-36 flex justify-center items-center"><p>No Photo Available</p></div>}
                            <div>
                              <p className=" text-left ml-2 mt-2">{listing.price}</p>
                            </div>
                            <div>
                              <p className=" text-left ml-2">{listing.beds} Bed  |  {listing.baths} Bath  |  {listing.sqft}</p>
                            </div>
                            <div>
                              <p className=" text-sm text-left ml-2">{listing.address}</p>
                            </div>
                            <div>
                              <p className="text-sm text-left ml-2">{listing.office_name}</p>
                            </div>
                            <br />
                            <div>
                            
  <i onClick={() => removeHome(listing._id)} className="fas fa-heart hover:cursor-pointer"></i>

                            </div>
                            <br />
                          </div>
                        </div>
                      )
                    })}
                  </div>
})

export default ListHomes