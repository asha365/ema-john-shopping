import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google-icon.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('your two password did not matched');
            return;
        }
        if(password.length < 8){
            setError('password must have 8 character or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <br/>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <div className='create-new-account'>
                    <p>Already have an account? <Link to='/login'> Login</Link></p>
                </div>

                <div className='line'>___________________ <span>or</span> ___________________</div>
            
            
                <button className='google-signIn-button'>
                    <img src={google} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SignUp;