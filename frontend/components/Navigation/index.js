export default () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <a className="nav__home"href="/">Meal Planner</a>
        <ul className="nav__links">
          <li className="nav__link"><a className="nav__anchor" href="">Sign Up</a></li>
          <li className="nav__link"><a className="nav__anchor" href="/login">Login</a></li>
        </ul>
      </div>
      <style>{`

        .nav {
          background-color: #ffae03;
          margin: 0;
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

        .nav__links {
          list-style: none;
          justify-content: left;
          padding: 10px;
        }

        .nav__link {
          float: left;
          padding: 0 20px;
        }

        .nav__anchor:hover {
          color: darkgrey;
        }

        .nav__anchor {
          text-decoration: none;
        }

        .nav__tag {
          list-style: none;
          justify-content: left;
          padding: 10px;
        }

      `}</style>
    </div>
    
  )
};

