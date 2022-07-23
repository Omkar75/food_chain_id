import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const loginUser = (user, roles, accessToken, conn_id) => {
        const data = {user:user, roles:roles, accessToken:accessToken, conn_id:conn_id}
        setAuth(JSON.stringify(data))
        window.location.reload(true)
        window.localStorage.setItem('user',JSON.stringify(data))
        
    }
    const logout = () => {
        window.localStorage.removeItem("user")
        navigate('/', {replace:true})
        window.location.reload(true)
        
    }
    // useEffect(()=>{
    //     const data = localStorage.getItem("user")
    //     if(data){
    //         setAuth(JSON.parse(data));
    //         console.log(location);
    //         JSON.parse(data).roles === "Operator"? navigate("icsdashboard"):navigate("dashboard")
    //         if(auth && location.pathname!=="/" && location?.state?.user){
    //             console.log(location)
    //             navigate(location?.pathname, {state : {user: location?.state?.user}})
    //         }
            
    //     }else{
    //         navigate('/', {replace:true})
    //     }
    // },[])
    
    return (
        <AuthContext.Provider value={{auth, loginUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
