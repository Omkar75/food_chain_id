import { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "foodchainid/register";

const Register = () => {
  const RoleOptions = [
    { label: "Please Select a Role", value:""},
    { label: "FoodChainID Manager", value: "Foodchainid" },
  ];
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [role, setRole] = useState("");
  const [validRole, setValidRole] = useState(false);
  const [RoleFocus, setRoleFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [Email, setEmail] = useState("");
  const [PhoneNO, setPhoneNO] = useState(null);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);
  useEffect(()=>{
    setValidRole(true)
  },[role])
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(JSON.stringify({
      name: user,
      email: Email,
      phone: parseInt(PhoneNO),
      password: pwd,
      role: role,
    }),)
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          name: user,
          email: Email,
          phone: parseInt(PhoneNO),
          password: pwd,
          role: role,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
      setEmail("");
      setPhoneNO("");
      navigate("/", {replace: true});
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <main className="w-full h-full flex justify-center">
        <section className="registerform max-w-sm border-2 !shadow-lg registerform !gap-2  rounded-md">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h3 className="font-semibold text-pitchdark">Register</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="role">
              Select the Role:
            </label>
            <select className="roleselector !text-base"
              value={role}
              ref={userRef}
              aria-describedby="userRole"
              onChange={(e) => setRole(e.target.value)}
              onFocus={() => setRoleFocus(true)}
              onBlur={() => setRoleFocus(false)}
            >
              {RoleOptions.map((ro,i) => (
                <option disabled={i===0 ? true : false} key={ro.value} value={ro.value}>{ro.label}</option>
              ))}
            </select>
            <p
              id="userRole"
              className={RoleFocus && role === "" ? "instructions flex " : "offscreen"}
            > 
              <FaInfoCircle />  Please Select Your Role
            </p>

            <label htmlFor="username">
              Full Name:
              <FaCheck className={validName ? "valid" : "hide"} />
              <FaTimes className={validName || !user ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="username"
              
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            {/* Full name, Phoneno */}
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="email">Email:</label>
              <input
                type="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
              <label htmlFor="PhoneNo">Phone No. :</label>
              <input
                type="text"
                required={true}
                onChange={(e) => setPhoneNO(e.target.value)}
                value={PhoneNO}
              />
              <label htmlFor="password">
              Password:
              <FaCheck className={validPwd ? "valid" : "hide"} />
              <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FaInfoCircle />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FaCheck className={validMatch && matchPwd ? "valid" : "hide"} />
              <FaTimes
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              Must match the first password input field.
            </p>
<div className="flex justify-end text-white mt-2">
            <button
            className="bg-pitchdark !rounded-lg"
              disabled={!validName || !validPwd || !validMatch ? true : false}
              onClick={handleSubmit}            >
              Sign Up
            </button>
            </div>
          </form>
          <p className="mt-4">
              Already registered?
              <br />
              <Link to={"/login"} style={{ textDecoration: 'none' }}>
                {/*put router link here*/}
                <button className="border-2 whitespace-nowrap hover:translate-y-1 bg-pitchdark rounded-lg text-white !min-w-min !max-w-min">Login In</button>
              </Link>
            </p>
        </section>
    </main>
  );
};

export default Register;
