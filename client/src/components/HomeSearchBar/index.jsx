import usePlacesAutocomplete from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css";
import { useNavigate } from "react-router-dom";
import "./styles.css"

const HomeSearchBar = () => { 
    const {ready, value, suggestions: {status, data}, setValue} = usePlacesAutocomplete()
    const navigate = useNavigate()
    const addressSelected = async (address) => {
        const nospaceaddress = address.replace(" ", "&")
        navigate(`/homes/${nospaceaddress}`)
    }

    return (ready) ? (
        <Combobox onSelect={(address) => addressSelected(address)} >
            <ComboboxInput className=" max-w-[90%] p-4 w-full h-10 text-xl" value={value} onChange={e => setValue(e.target.value)} disabled={!ready} placeholder="Address, City, Neighborhood, or ZIP Code"/>
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


export default HomeSearchBar