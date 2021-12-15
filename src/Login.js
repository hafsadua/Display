import { React, useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext'

function Login(props) {
  const navigate = useNavigate();
  const { 
    email,
    setEmail,
    password,
    setPassword
  } = DataContext()

  const [hasAccount, setHasAccount] = useState(false);
 

  const handleLogin = () => {

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const db = getDatabase();
        const starCountRef = ref(db, `users/`);
        console.log("database access done")
        onValue(starCountRef, (snapshot) => {
          let data = snapshot.val();
          let keys = Object.keys(data).filter(
            (val) => val === userCredential.user.uid
          );
          if (keys.length) {
            navigate('/showdata')
            alert("Login Successfull")
          } else {
            alert("Invalid Details ");
          }
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            alert("Invalid Email");

          case "auth/user-diabled":
            alert("User Disbaled");

          case "auth/user-not-found":
            alert("User Not Found");

            break;
          case "auth/wrong-password":

            alert("Wrong Password");
            break;
        }
      });


  };




  return (
    <div className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br></br>

        <div className="btnContainer">
          {hasAccount ? <div></div> : <div>

            <button onClick={() => handleLogin() }>Login</button>

            <p>
              <span onClick={() => { navigate('/forgetpassword') }}>Forget Password?</span></p>
            <p>Don't Have an account?
              <span onClick={() => { navigate('/') }}>Register</span></p>
          </div>
          }
        </div>

      </div>
    </div>
  )


}
export default Login;

