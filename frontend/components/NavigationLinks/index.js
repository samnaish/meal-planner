import React from 'react';

export default () => {
    return (
        <ul className="nav__links">
          <li className="nav__link"><a className="nav__anchor" href="/about">About</a></li>
          <li className="nav__link"><a className="nav__anchor" href="/search">Search</a></li>
          <li className="nav__link"><a className="nav__anchor" href="/signup">Sign Up</a></li>
          <li className="nav__link"><a className="nav__anchor" href="/login">Login</a></li>
          <style jsx>
              {`
                .nav__links {
                    list-style: none;
                  }
          
                  .nav__link {
                    float: left;
                    padding: 0 5px;
                  }
          
                  .nav__anchor:hover {
                    color: black;
                    background-color: #fff;
                  }
          
                  .nav__anchor {
                    text-decoration: none;
                    color: black;
                    padding: 10px;
                    display: inline-block;
                  }
              `}
          </style>
        </ul>
    );
}