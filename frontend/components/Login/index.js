import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

import ButtonComponent from '../ButtonComponent';
import ErrorComponent from '../ErrorComponent';
import ForgotPassword from '../ForgotPassword';

const LoginComponent = () => {
    const { register, handleSubmit, errors } = useForm();
    const [ failure, setFailure ] = useState(null);
    const [ submitting, setSubmitting ] = useState(false);

    const onAccountLogin = async (data) => {
        setSubmitting(true);
        const loginResponse = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const loginData = await loginResponse.json();
        setSubmitting(false);
        if(loginData.error) {
            setFailure(loginData.error);
            return;
        }
        const { token } = loginData;
        localStorage.setItem('token', token);
        Router.push('/recipes');
    }

    return (
        <div className="login-box">
            {
                failure && <ErrorComponent massage={failure} />
            }
            <form className="login-box__form" onSubmit={handleSubmit(onAccountLogin)}>
                <input className="login-box__input" type="text" name="email" placeholder="email" ref={register({ required: true })} />
                { errors.email && <span className="login-box__error">Please enter email</span> }
                <input className="login-box__input" type="password" name="password" placeholder="password" ref={register({ required: true })} />
                { errors.password && <span className="login-box__error">Please enter password</span> }
                <div className="login-box__form-row">
                    <label htmlFor="rememberMe" className="login-box__label">Remember Me</label>
                    <input className="login-box__checkbox" id="rememberMe" type="checkbox" name="rememberMe" ref={register}/>
                </div>
                <ButtonComponent label="Login" disabled={submitting} type="submit"/>
                <footer className="login-box__footer">
                    <span className="login-box__caption">Not registered? </span>
                    <a className="login-box__create-account" href="/signup">Create an account</a>
                    <br/>
                    <ForgotPassword />
                </footer>
            </form>
            <style jsx>{`

            .login-box {
                background-color: #F5853F;
                width: 500px;
                margin: 20px auto;
                padding: 40px;
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                border-radius: 10px;  
            }

            .login-box__error [
                display: block;
                text-align: center;
                margin: 10px auto;
            }
            ]

            .login-box__form {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .login-box__input {
                margin-bottom: 10px;
                padding: 0 10px;
                height: 40px;
                width: 100%;
                font-size: 16px;
                background-color: lightgrey;
                border: none;
                border-radius: 5px;
            }
            
            .login-box__login-button {
                margin-bottom: 20px;
                padding: 10px;
                width: 45%;
                height: 40px;
                background-color: #297373;
                color: white;
                display: inline-block;
                text-decoration: none;
                border: none;
                font-size: 16px;
                transition: background 0.3s ease;
                text-transform: uppercase;
                cursor: pointer;
                border-radius: 10px;
            }

            .login-box__login-button:disabled {
                cursor: not-allowed;
                background-color: grey;
            }
            
            button:hover {
                opacity: 0.8;
                background-color: #615d6c;
            }
            
            .login-box__footer {
                text-align: center;
                color: #666;
            }
            
            .login-box__create-account {
                color: white;
                text-decoration: none;
                border-bottom-width: 0;
                border-bottom: 1px solid transparent;
                transition: border 0.3s ease;
            }
            
            .login-box__create-account:hover {
                border-bottom-color: #cae5ff;
            }

            .login-box__caption {
                color: white;
            }

            login-box__error {
                width: 100%;
                padding: 5px;
                border-radius: 5px;
                margin-bottom: 10px;
                color: #9e0000;
                background-color: #f5c6cb;
                font-size: 14px;
            }

            @media screen and (max-width: 440px) {

                .login-box {
                    width: auto;
                    height: auto;
                }
            }

            `}</style>
        </div>
    );
};

export default LoginComponent;
    