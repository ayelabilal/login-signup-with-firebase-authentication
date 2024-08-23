import { signInWithEmailAndPassword,  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendPasswordResetEmail,
 } from "firebase/auth";
import React, { useState } from "react";
import auth from "../config/firebase";
import '../App.css'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const HandleLogin = () => {
    console.log("email", email);
    console.log("password", password);
  };

  signInWithEmailAndPassword(auth, email, password)
  .then((res)=>{
    console.log('res',res);

  })
  .catch((err)=>{
    console.log('err',err);
    
  })

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent..");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" >
      <h1 className="signup">Login Page</h1>
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


      <button className="sinupbtn" onClick={HandleLogin}>Login</button>
      <br />
      <button className="forgot" onClick={handleForgotPassword}>Forgot Password?</button>
      <br />
      <button className="githubbtn" onClick={handleGithub}><u>Login with Github</u></button><br />

      <button className="githubbtn" onClick={handleGoogle}><u>Login with Google</u></button>
    </div>
  );
};

export default Login;
