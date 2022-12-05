import usePlacesAutocomplete, {getGeocode, getLatLng, getZipCode} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";
import findHomes from "../../http/findHomes";

const MapSearchBar = ({setSearchResults, panTo }) => { 
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({requestOptions: {componentRestrictions: {country: "us"}}})
    
    const addressSelected = async (address) => {
        setValue(address, false)
        clearSuggestions()
        const results = await getGeocode({address});
        const zip = await getZipCode(results[0])
        const {lat,lng} = await getLatLng(results[0])
        

        findHomes(zip, address).then(results => {
            setSearchResults(results.data.listings)
        }).catch(err => {
            console.log(err)
        }).then(() => {
            panTo({lat,lng})
        })
    }
    return (ready) ? (
        <Combobox onSelect={address => addressSelected(address)} >
            <ComboboxInput className=" z-10 max-w-[30%] p-3 w-full border rounded h-11 text-l absolute left-[0.6%] top-[10%]" value={value} onChange={e => setValue(e.target.value)} disabled={!ready} placeholder="Enter an address, city, neighborhood, or ZIP code"/>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({description, place_id}) => <ComboboxOption value={description} key={place_id}/>)}  
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
        
    ) :
    (
        <div>Loading map search...</div>
    )
}


export default MapSearchBar