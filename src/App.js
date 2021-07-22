import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify"

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; 
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log('i have the token', token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>Hey guys you're connected to spotify</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
