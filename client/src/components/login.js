import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault();
        e.target.reset();   

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
            .then(() => {
                setUsername("")
                setPassword("")
            })

        alert("Form submitted successfully")
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800">Login</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter username.." 
                            class="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            placeholder="Enter password.." 
                            class="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-secondary w-full">
                        Submit
                    </button>
                </form>
                <p className="mt-4">
                    Don't have an account? 
                    <Link to='/signup' className="mx-2 text-green-500 font-semibold">Signup</Link>
                </p>
            </div>
        </>
     );
}
 
export default Login;