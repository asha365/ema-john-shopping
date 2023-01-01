import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google-icon.png';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <div className='create-new-account'>
                    <p>New to Ema-john? <Link to='/signup'> Create New Account</Link></p>
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

export default Login;