import React, { Fragment, useContext } from 'react';

import SessionContext from '../../contexts/session';

export default () => {

  const { user } = useContext(SessionContext) || {};
  return (
      <ul className="nav__links">
        <li className="nav__link"><a className="nav__anchor" href="/about">About</a></li>
        <li className="nav__link"><a className="nav__anchor" href="/search">Search</a></li>
        { 
          !user ?
            <Fragment>
              <li className="nav__link"><a className="nav__anchor" href="/signup">Sign Up</a></li>
              <li className="nav__link"><a className="nav__anchor" href="/login">Login</a></li>
            </Fragment>
          : (
            <Fragment>
              <li className="nav__link"><a className="nav__anchor">Hello {user.first_name}</a></li>
              <li className="nav__link"><a className="nav__anchor" href="/logout">Logout</a></li>
            </Fragment>
          )
        }
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