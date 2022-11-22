import { useState, } from "react"

import { post } from "../../http/service"

const SignUp = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState(false)

    const doSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrMessage(false)
        post("/auth/signup", {username, password}).then(response => {
            if (response.status === 200){
                localStorage.setItem("token", response.data);
                props.setLoggedIn(true)
                props.setShowModal(false)
            }

        }).catch(err => {
            setLoading(false)
            setErrMessage(true)
            props.setLoggedIn(false)
        })
        
    }

    return (
        <div>
            <form>
                <div className="h-80 flex flex-col justify-start items-center">
                    <input required placeholder="Username" className="mt-3 mb-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                    <input required placeholder="Password" className="mb-3 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative border bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full" type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                    <button onClick={doSignup} className="bg-emerald-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                    {errMessage ? <p>Something went wrong when signing you up to the site, please try again</p> : null}
                </div>
            </form>
        </div>
    )
}

export default SignUp