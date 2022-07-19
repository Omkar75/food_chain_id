import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
// import useAuth from "../hooks/useAuth";
import "./Login.css"
import axios from "../../api/axios";
import {Link,useLocation,useNavigate} from "react-router-dom"
import { Spinner } from "react-bootstrap";


const LOGIN_URL = "users/login_credentials";

const Login = () => {
  const { loginUser, auth } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  // const {setAuth} = useAuth();
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname
  if(location.state?.from?.pathname === "/"){
    from =  auth.role === "Operator" ? "icsdashboard":"dashboard";
  }
  const togglePassword =()=>{
    setPasswordShown(!passwordShown);
  }

  const userRef = useRef();
  const errRef = useRef();
  
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ "email":email, "password":pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("------"+JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      const roles = response?.data?.user?.role;
      const user = response?.data?.user?.email;
      const conid = response?.data?.user?.conn_id;
      loginUser( user, roles, accessToken, conid );
      setEmail("");
      setPwd("");
      setloading(false)
      if(roles === "Operator"){
        navigate('/icsdashboard',{state:{user:response?.data}}, {replace: true})
      }else if(roles === "Foodchainid"){
        navigate('/dashboard',{state:{user:response?.data}}, {replace: true})
      }else{
        navigate(from, {replace: true});
      }
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      setloading(false)
      errRef.current.focus();

    }

      // fetch("https://foodchainid.herokuapp.com/users/login_credentials",
      //     {
      //         method: "POST",
      //         headers: {
      //             'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify({ "email":email, "password":pwd })
      //     }
      // ).then((res) => {
      //   res.json().then((data)=>{console.log(data)})
      // })
    
  };

  return ((
    <main className="flex justify-center">
        <section className="loginform shadow-lg border-2 rounded-md items-center max-w-sm">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h3 className="font-semibold text-pitchdark">Login</h3>
          <form>
            <label htmlFor="username">Username:</label>
            <input
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button onClick={togglePassword}>Show Password</button>
            <div className="mt-2 flex !justify-end w-full">
              <button
              onClick={handleSubmit}
              className={`border-2 whitespace-nowrap hover:translate-y-1 bg-pitchdark rounded-lg text-white !min-w-min !max-w-min ${loading === true ? "pointer-events-none": " "} `}
              >
                {(loading === true)? <Spinner animation="border" variant="light" />:"Sign In"}
              </button>
              </div>
          </form>
          <div>
              Need an account?
              <br />
              <div className="space-x-4">
              <Link to={"/register"} style={{ textDecoration: 'none' }}>
                {/*put router link here*/}
                <button className={`border-2 whitespace-nowrap hover:translate-y-1 bg-pitchdark rounded-lg text-white !min-w-min !max-w-min ${loading === true ? "pointer-events-none": " "} `}>Register</button>
              </Link>
              <Link to={"/icsregister"} style={{ textDecoration: 'none' }}>
                {/*put router link here*/}
                <button className={`border-2 whitespace-nowrap hover:translate-y-1 bg-pitchdark rounded-lg text-white !min-w-min !max-w-min ${loading === true ? "pointer-events-none": " "} `}>ICS Register</button>
              </Link>
              </div>
            </div>
        </section>
        </main>)
      
  );
};

export default Login;
