import { useState } from "react"
import {get, post} from "../../http/service"
import { useNavigate } from "react-router-dom"

const EditUser = ({setLoggedIn}) => {
    const [newUsername, setNewUsername] = useState("")
    const [areYouSure, setAreYouSure] = useState(false)  
    const navigate = useNavigate()
    const deleteUser = () => {
        get("/auth/delete").then(results => {
            console.log(results)
            setLoggedIn(false)
            navigate('/')
        })
        return 
    }

    const updateUsername = () => {
        post("/auth/update-user", {username: newUsername}).then(results => {
            navigate('/')
        })
        return
    }

    return (
        <div className="h-[80vh] flex justify-center items-center">
            <div className="flex flex-col h-52 items-center justify-between">
                <form>
                    <div className="flex justify-center">
                        <input className="border rounded text-lg p-2 mr-2" value={newUsername} type="text" placeholder="Enter New Username" onChange={e => setNewUsername(e.target.value)}/>
                        <button onClick={updateUsername} className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Update Username
                        </button>
                    </div>
                </form>

                {!areYouSure ? <button onClick={() => setAreYouSure(true)} className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Delete Account
                </button> : null}
                {areYouSure ? 
                <div>
                    <p>Are you sure you want to delete your entire account?</p>
                    <button onClick={deleteUser} className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Delete Account
                    </button>
                </div> : 
                null
                }
            </div>
        </div>
    )
}

export default EditUser