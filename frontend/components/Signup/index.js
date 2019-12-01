import React, { useState } from 'react';
import Link from 'next/link';

import ButtonComponent from '../ButtonComponent';

export default () => {

    const [ error, setError ] = useState('');
    const [ failures, setFailures ] = useState({});
    const [ submitting ,setSubmitting] = useState(false);
    const [ success, setSuccess] = useState(false);

    const createAccount = async (ev) => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        const registerPayload = Object.fromEntries(data);
        setError('');
        setFailures({});
        
        if(registerPayload.password !== registerPayload.confirm_password) {
            setFailures({
                confirm_password: 'Please ensure your password matches.'
            });
            return;
        }

        setSubmitting(true);
        const createResponse = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerPayload)
        })
        const accountData = await createResponse.json();
        setSubmitting(false);

        if(accountData.error) {
            setError(accountData.error);
            accountData.failures && setFailures(accountData.failures);
        } else {
            setSuccess(true);
        }
        
    };

    return(
        <div className="signup">
            {
                success ? (
                    <div>
                        <span>Great Success!</span>
                        <Link href="/login">
                            <a className="signup__link">Login now</a>
                        </Link>
                    </div>
                )
                : (
                    <form className="signup__form" onSubmit={createAccount}>
                        {
                            error ? <span className="signup__error">{error}</span> : ''
                        }
                        <input className="signup__input" name="first_name" type="text" placeholder="First Name" required="required" />
                        { failures.first_name ? <span className="signup__error">{failures.first_name}</span> : ''  }
                        <input className="signup__input" name="last_name" type="text" placeholder="Last Name" required="required" />
                        { failures.last_name ? <span className="signup__error">{failures.last_name}</span> : ''  }
                        <input className="signup__input" name="email" type="email" placeholder="Email Address" required="required" />
                        { failures.email ? <span className="signup__error">{failures.email}</span> : '' }
                        <input className="signup__input" name="password" type="password" placeholder="Password" required="required" />
                        { failures.password ? <span className="signup__error">{failures.password}</span> : '' }
                        <input className="signup__input" name="confirm_password" type="password" placeholder="Confirm Password" required="required" />
                        { failures.confirm_password ? <span className="signup__error">{failures.confirm_password}</span> : '' }
                        <ButtonComponent val={submitting} label="Join" type="submit"/>
                        <footer className="signup__footer">
                            <span className="signup__caption">Got an Account? </span>
                            <a className="signup__link" href="/login">login!</a>
                        </footer>
                    </form>
                )
               
            }
            
            <style jsx>{`

                .signup {
                    background-color: #F5853F;
                    width: 400px;
                    margin: 20px auto;
                    padding: 50px;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    border-radius: 5px;  
                }

                .signup__input {
                    padding: 0 10px;
                    margin-bottom: 10px;
                    height: 36px;
                    width: 100%;
                    font-size: 16px;
                    background-color: #EFE7DA;
                    border: none;
                    border-radius: 5px;
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
                    height: 36px;
                    background-color: #297373;
                    color: white;
                    text-decoration: none;
                    border: none;
                    font-size: 14px;
                    transition: background 0.3s ease;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 5px;
                }

                .signup__button:disabled {
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
                
                .signup__link {
                    color: white;
                    text-decoration: none;
                    border-bottom-width: 0;
                    border-bottom: 1px solid transparent;
                    transition: border 0.3s ease;
                }
                
                .signup__link:hover {
                    color: #0E4749;
                }

                .signup__caption {
                    color: white;
                }

                .signup__error {
                    width: 100%;
                    padding: 5px;
                    border-radius: 5px;
                    margin-bottom: 10px;
                    color: #9e0000;
                    background-color: #f5c6cb;
                    font-size: 14px;
                }
            `}</style>
        </div>
    );
}