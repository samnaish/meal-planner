import Style from "./style.js";

export default () => {
    return (
        <Style>
            <div id="login-page">
        <div className="login-box">
            <form method="post">
                <input className="login-box__input" type="text" placeholder="username" required="required"></input>
                <input className="login-box__input" type="text" placeholder="password" required="required"></input>
                <button type="submit" className="login-box__login-button">login</button>
                <footer className="login-box__footer">
                    <span>Not registered?</span>
                    <a className="login-box__create-account" href="#">Create an account</a>
                </footer>
            </form>
        </div>
    </div>
        </Style>
        
    );
}
    