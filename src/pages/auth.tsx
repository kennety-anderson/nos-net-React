import React from 'react';
import './auth.css';

const Auth: React.FC = () => {
    const oauth2Url = process.env.REACT_APP_OAUTH2_URL;
  
    const handleAuthClick = () => {
      window.location.href = oauth2Url as string;
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>OAuth 2.0 Authentication into Nos Net.</h1>
          <button onClick={handleAuthClick}>Login with Nos Net.</button>
        </header>
      </div>
    );
  };
  

export default Auth;
