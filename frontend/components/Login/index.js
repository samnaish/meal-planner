
export default () => {
    return (
        <div className="login-box">
            <form method="post">
                <input className="login-box__input" type="text" placeholder="username" required="required" />
                <input className="login-box__input" type="text" placeholder="password" required="required" />
                <button type="submit" className="login-box__login-button">login</button>
                <footer className="login-box__footer">
                    <span className="login-box__caption">Not registered? </span>
                    <a className="login-box__create-account" href="/signup">Create an account</a>
                </footer>
            </form>
            <style>{`
            .login-box {
                background-color: #cc2936;
                width: 500px;
                margin: 20px auto;
                padding: 50px;
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                border-radius: 10px;  
            }
            
            .login-box__input {
                margin-bottom: 20px;
                padding-left: 20px;
                height: 40px;
                width: 80%;
                font-size: 16px;
                background-color: lightgrey;
                border: none;
            }
            
            .login-box__login-button {
                margin-bottom: 20px;
                padding: 10px;
                width: 45%;
                height: 40px;
                background-color: #ffae03;
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

            @media screen and (max-width: 440px) {

                .login-box {
                    width: auto;
                    height: auto;
                }
            }

            `}</style>
        </div>
    );
}
    