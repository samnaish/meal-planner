import React from 'react';

const ForgetPassword = () => {
    return (
        <div className="forgot">
            <span className="forgot__caption">Forgot your password? </span>
            <a className="forgot__link" href='/reset'>retrieve password</a>
            <style>{`

                .forgot__link {
                    color: white;
                    text-decoration: none;
                    border-bottom-width: 0;
                    border-bottom: 1px solid transparent;
                    transition: border 0.3s ease;
                }

                .forgot__link:hover {
                    border-bottom-color: #A22522;
                }

                .forgot__caption {
                    color: white;
                }

            `}</style>
        </div>
    )
}

export default ForgetPassword;