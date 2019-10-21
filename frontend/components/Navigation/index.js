import React from 'react';
import NavigationLinks from '../NavigationLinks';

export default () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__title">
          <img className="nav__logo" src="/static/images/logos/logo.png"/>
          <a className="nav__home" href="/">Meal Planner</a>
        </div>
        <NavigationLinks />
      </div>
      <style>{`

        .nav {
          background-color: #ffae03;
          margin: 0;
        }

        .nav__home {
          text-decoration: none;
          color: black;
          font-size: 30px;
          transition: 0.5s ease;
        }

        .nav__home:hover {
          color: white;
        }

        .nav__title {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .nav__logo {
          height: 50px;
          padding: 10px;
        }

        .nav__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

      `}</style>
    </div>
    
  )
};

