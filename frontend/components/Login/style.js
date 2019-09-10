    
    export default () => {
      return (
        <style>{`

        * {
          box-sizing: border-box;
        }
        
        body {
          background-color: #005377;
        }
        
        .login-box {
          background-color: #ffffff;
          width: 520px;
          margin: 30px auto;
          padding: 60px;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        }
        
        .login-box__input {
          margin-bottom: 20px;
          padding-left: 20px;
          height: 60px;
          width: 100%;
          font-size: 16px;
          background-color: lightgrey;
          border: none;
        }
        
        .login-box__login-button {
          margin-bottom: 20px;
          padding: 10px;
          width: 100%;
          height: 60px;
          background-color: #052f5f;
          color: white;
          display: inline-block;
          text-decoration: none;
          border: none;
          font-size: 16px;
          transition: background 0.3s ease;
          text-transform: uppercase;
          cursor: pointer;
        }
        
        button:hover {
          opacity: 0.8;
          background-color: #005377;
        }
        
        .login-box__footer {
          text-align: center;
          color: #666;
        }
        
        .login-box__create-account {
          color: #052f5f;
          text-decoration: none;
          border-bottom-width: 0;
          border-bottom: 1px solid transparent;
          transition: border 0.3s ease;
        }
        
        .login-box__create-account:hover {
          border-bottom-color: #052f5f;
        }

        `}</style>
      )
    }
    
    
    