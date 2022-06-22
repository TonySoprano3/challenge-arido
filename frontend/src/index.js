import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025
    }
  }
};
  
ReactDOM.render(

  <React.StrictMode>
    
    <Auth0Provider
      domain="dev-r756j274.us.auth0.com"
      clientId="Tgfs4sytRRY1zxMrcRrlpaA2frJEjIMU"
      redirectUri={window.location.origin}
    >
      <App />
    
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
