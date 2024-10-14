import { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const login = async (e) => {
        e.preventDefault();
        const result = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
        
        const data = await result.json();
        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);
        if(localStorage.token !== "undefined"){
            setToken(true);
        }
        
    }

    const register = async (e) => {
        e.preventDefault();
        const result = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await result.json();
        alert(data?.error || "Registration successful!!");
        console.log(data);
    }
    


    const logout = () => {
        localStorage.setItem("token","");
        setEmail("");
        setPassword("");
        setToken(false);
    }

    return (
        <UserContext.Provider value={{ 
            token,
            logout , 
            login , 
            register ,
            setPassword , 
            password , 
            setEmail ,
            email
            }}>
            {children}
        </UserContext.Provider>


    )


}

export default UserProvider;