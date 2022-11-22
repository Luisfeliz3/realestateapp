import { post } from "../../http/service"

const ListHomes = (({savedHomes, setSavedHomes}) => {
    
    const removeHome = (listing) => {
        post("/homes/delete-home", {listing}).then(results => {
            setSavedHomes(savedHomes.filter(thelisting => thelisting._id !== listing));
        })
    }
    
    return <div className="row justify-content-around">
               
                  </div>
})

export default ListHomes