
export default () => {
    return(
        <div className="signin">
            <form className="signin__form">
                <input className="signin__input" type="text" placeholder="First Name" required="required" />
                <input className="signin__input" type="text" placeholder="Last Name" required="required" />
                <input className="signin__input" type="text" placeholder="Email Address" required="required" />
                <input className="signin__input" type="text" placeholder="Password" required="required" />
                <input className="signin__input" type="text" placeholder="Confirm Password" required="required" />
                <button type="submit" className="signin__button">Join</button>
                <footer className="signin__footer">
                    <span className="signin__caption">Got an Account? </span>
                    <a className="signin__create" href="/login">login!</a>
                </footer>
            </form>
            <style jsx>{`

                .signin {
                    background-color: #F5853F;
                    width: 300px;
                    margin: 20px auto;
                    padding: 50px;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    border-radius: 10px;  
                }

                .signin__input {
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

                .signin__form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .signin__button {
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
                
                button:hover {
                    opacity: 0.8;
                    background-color: #615d6c;
                }

                .signin__footer {
                    text-align: center;
                    color: #666;
                }
                
                .signin__create {
                    color: white;
                    text-decoration: none;
                    border-bottom-width: 0;
                    border-bottom: 1px solid transparent;
                    transition: border 0.3s ease;
                }
                
                .signin__create:hover {
                    color: #0E4749;
                }

                .signin__caption {
                    color: white;
                }
            `}</style>
        </div>
    );
}