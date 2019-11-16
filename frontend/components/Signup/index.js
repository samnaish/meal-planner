import React, { useState } from 'react';
import { create } from 'domain';
import { Router } from 'next/router'

export default () => {

    const [ error, setError ] = useState('');
    const [ submitting ,setSubmitting] = useState(false);

    const createAccont = async (ev) => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        setSubmitting(true);
        setError('');
        const createResponse = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.values(data))
        })
        const accountData = await createResponse.json();
        if(accountData.error) {
            setError(accountData.error);
        } else {
            Router.push('/login');
        }
        setSubmitting(false);
        console.log('accountData' ,accountData)
    };

    return(
        <div className="signup">
            <form className="signup__form" onSubmit={createAccont}>
                <input className="signup__input" type="text" placeholder="First Name" required="required" />
                <input className="signup__input" type="text" placeholder="Last Name" required="required" />
                <input className="signup__input" type="text" placeholder="Email Address" required="required" />
                <input className="signup__input" type="password" placeholder="Password" required="required" />
                <input className="signup__input" type="password" placeholder="Confirm Password" required="required" />
                <button disabled={submitting} type="submit" className="signup__button">Join</button>
                <footer className="signup__footer">
                    <span className="signup__caption">Got an Account? </span>
                    <a className="signup__create" href="/login">login!</a>
                </footer>
                {
                    error ? <span className="signup__error"> There was an Error</span> : ''
                }
            </form>
            <style jsx>{`

                .signup {
                    background-color: #F5853F;
                    width: 400px;
                    margin: 20px auto;
                    padding: 50px;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    border-radius: 10px;  
                }

                .signup__input {
                    padding: 0 10px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    height: 40px;
                    width: 280px;
                    font-size: 16px;
                    background-color: #EFE7DA;
                    border: none;
                    border-radius: 10px;
                }

                .signup__form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .signup__button {
                    margin-bottom: 20px;
                    padding: 10px;
                    width: 45%;
                    height: 40px;
                    background-color: #297373;
                    color: white;
                    text-decoration: none;
                    border: none;
                    font-size: 14px;
                    transition: background 0.3s ease;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 10px;
                }

                signup__button:disabled {
                    cursor: not-allowed;
                    background-color: grey;
                }
                
                button:hover {
                    opacity: 0.8;
                    background-color: #615d6c;
                }

                .signup__footer {
                    text-align: center;
                    color: #666;
                }
                
                .signup__create {
                    color: white;
                    text-decoration: none;
                    border-bottom-width: 0;
                    border-bottom: 1px solid transparent;
                    transition: border 0.3s ease;
                }
                
                .signup__create:hover {
                    color: #0E4749;
                }

                .signup__caption {
                    color: white;
                }
            `}</style>
        </div>
    );
}