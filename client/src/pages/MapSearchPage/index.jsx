import { useParams } from "react-router-dom"
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api"
import MapSearchBar from "../../components/MapSearchBar"
import FilterBar from "../../components/FilterBar"
import { useRef, useCallback, useState, useEffect } from "react"
import TabsView from "../../components/TabsView"
import {getGeocode, getLatLng, getZipCode} from "use-places-autocomplete"
import findHomes from "../../http/findHomes"

const mapContainerStyle = {
    width: "50vw",
    height: "88vh"
  }

const MapSearch = props => {
    const {address} = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [selectedMarker, setSelectedMarker] = useState(null)
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng})
    }, [])

    const infowindowstuff = listing => {
        setSelectedMarker(listing)
        panTo({lat: listing.lat, lng: listing.lon})
    }

    const closeinfostuff = listing => {
        setSelectedMarker(null)
        panTo({lat: listing.lat, lng: listing.lon})
    }

    useEffect(()=> {
            const realaddress = address.replace("&", " ")
            getGeocode({address: realaddress}).then(results => {
                getZipCode(results[0]).then((zip) => {
                    findHomes(zip, realaddress).then(results => {
                        setSearchResults(results.data.listings)
                    }).catch(err => {
                        console.log(`an error happened : ${err}`)
                    }).then(() => {
                        getLatLng(results[0]).then(({lat, lng}) => {
                            panTo({lat,lng})                    
                        })
                    })
                })
            })
    }, [address, panTo])


    return (
      <>
      <FilterBar/>
      <div className="flex justify-between m-0 mx-2">
             
             <MapSearchBar setSearchResults={setSearchResults} panTo={panTo}/>
             <div>
                 <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={{lat: 37.0902, lng: -95.7129}} onLoad={onMapLoad}>
                     {searchResults.map(listing => {
                         return <Marker key={listing.listing_id} position={{lat: listing.lat, lng: listing.lon}} 
                         label={{ color: 'black', fontWeight: 'bold', fontSize: '14px', text: listing.price }} 
                         onClick={() => infowindowstuff(listing)}></Marker>
                     })}
                     {selectedMarker && (
                         <InfoWindow position={{lat: selectedMarker.lat, lng: selectedMarker.lon}} onCloseClick={() => closeinfostuff(selectedMarker)}>
                             <div>
                                 {selectedMarker.photo_count > 0 && <img className=" h-44" src={selectedMarker.photo} alt="home" />}
                                 <p>{selectedMarker.price}</p>
                                 <p>{selectedMarker.address}</p>
                                 <p>{`${selectedMarker.beds} Bed  |  ${selectedMarker.baths} Bath |  ${selectedMarker.sqft}`}</p>
                             </div>
                         </InfoWindow>)}
                 </GoogleMap>
             </div>
             <div className=" w-[47vw] mr-3 mt-0 mb-0">
                 <TabsView loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} searchResults={searchResults} setSearchResults={setSearchResults}/>
             </div>
         </div>
 
      </>
            )
}
export default MapSearch






