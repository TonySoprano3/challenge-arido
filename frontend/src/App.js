import { useAuth0 } from "@auth0/auth0-react";
import React, { Component }  from 'react';
import { LoginButton } from "./Auth/Login/Login"
import { LogoutButton } from "./Auth/Logout/Logout";

import "./App.scss";
import Header from "./container/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
        {isAuthenticated ? (
          <>
          <Navbar />
           <Header />
          </>
        ) : (
          <LoginButton />
        )}
    </div>
  );
}

export default App;
