import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import './App.css'


const ForgetPassword = (props) => {
 
    const [email, setEmail] = useState('')
    const [sendEmail, setSendEmail] = useState(false)
    

    const navigate = useNavigate();


    
    const passwordReset = () => {
        const auth = getAuth()
       

        sendPasswordResetEmail(auth, email)
            .then(() => {


                setSendEmail(true)
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                switch (errorCode) {
                    case "auth/too-many-requests":
                       
                        alert('User Try many times request')
                        break;

                    case "auth/invalid-email":
                        
                        alert('Invalid email')
                        break;
                    case "auth/user-not-found":
                        
                        alert('User Not Found')
                        break;



                }


            });






    }

  
    return (

        <section >
        
           
            <div className='login'>
                <div className='loginContainer'>
                    <h1 style={{ textAlign: 'center' }}>Forget Password</h1>
                    <label className={sendEmail ? 'checkEmail' : 'checkEmailNot'} >{sendEmail ? 'Check Your Email' : 'Email'}   </label>
                    <input type='text' className={sendEmail ? 'checkEmail' : 'checkEmailNot'} autoFocus required value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>

                    <div>

            <br />



                        <button className="btnContainer" onClick={() => navigate('/login')} className={!sendEmail ? 'checkEmail' : 'checkEmailNot'} >Login</button><br /><br />
                        <button className={sendEmail ? 'checkEmailb' : 'checkEmailNotb'} onClick={passwordReset}>Forget Password</button>

                    </div>






                </div>

            </div>

        </section >
    )
}

export default ForgetPassword;