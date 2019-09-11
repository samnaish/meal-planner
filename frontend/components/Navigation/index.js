export default () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav__link"><a className="nav__anchor" href="/">Home</a></li>
        <li className="nav__link"><a className="nav__anchor" href="/about">About</a></li>
        <li className="nav__tag"><a className="nav__anchor" href="">Sign Up</a></li>
        <li className="nav__tag"><a className="nav__anchor" href="/login">Login</a></li>
      </ul>
      <style>{`

        body {
          padding: 0;
          margin: 0;
        }

        .nav {
          background-color: #ffae03;
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          margin: 0;
        }

        .nav__link {
          list-style: none;
          justify-content: left;
          padding: 10px;
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

