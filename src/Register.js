import "./fire"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { DataContext } from './DataContext'


function Register(props) {

    const navigate = useNavigate();
    const [hasAccount, setHasAccount] = useState(false);
   const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    
    
    clearInputs
   } = DataContext();

    const handleSignUp = () => {
        if (email, name, password) {
            const auth = getAuth();
            console.log("Inside auth")
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                const db = getDatabase();
                console.log("userCreated");
                set(ref(db, "users/" + user.uid), {
                    name,
                    email,
                 
                    uuid: user.uid,
                    type: "users",
                    
                });
                alert('Account Created Successfully')
                
                navigate('/login')
            });

        }
        else {
            alert("Please fill the data");
        }

    }


    React.useEffect(() => {

    }, [])


    return (
        <section>
            <div className='login'>
                <div className='loginContainer'>
                    <label>Name</label>
                    <input type='text' id="name" name="name" onChange={(e) => { setName(e.target.value) }}></input>
                    <label>Email</label>
                    <input type='text' id="email" name="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                    <label>Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                   
                    <div className="btnContainer">
                        {hasAccount ? <div></div> : <div>
                            <button onClick={handleSignUp}>Register</button>
                            <p>Already Have an account?
                                <span onClick={() => { navigate('/login') }}>Login</span></p>
                        </div>
                        }
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Register;