import { createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import auth from "../config/firebase";  
import { useNavigate } from "react-router-dom";
import img from '../assets/back.png';
import '../App.css'



const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  let userObject={
    name,
    email
  }

  const HandleSignup = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("paasword", password);
    

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        localStorage.setItem("userData",JSON.stringify(userObject));

        navigate('/login')
      })
     
      .catch((error) => {
        console.log(error);
      });

     

  };
  return (
    <div className="container">
      <h1 className='signup'>Signup Page</h1>
      <input
      className="inputs"
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        />
      <br />
      <br />
      <input
       className="inputs"
        type="text"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        />
      <br />
      <br />
      <input
       className="inputs"
        type="text"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        />
      <br /> <br />
      <button u className="sinupbtn" onClick={HandleSignup}> Sign Up</button>
        </div>
   
  );
};

export default Signup;
