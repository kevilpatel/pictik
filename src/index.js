/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
//import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SignUp from "./views/examples/RegisterPage"
import SectionButtons from "./views/index-sections/SectionButtons"
import PhotoSection from "./views/index-sections/PhotoSection"
import ShowPhoto from "./views/index-sections/ShowPhoto"
import App from "./views/App"
// others

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch>
      <Route path="/indexs" component={SignUp} />
      <Route
        path="/nucleo-icons" component={SectionButtons}
      />
      <Route
        path="/landing-page" component={PhotoSection}
      />
      <Route
        path="/profile-page" component={ShowPhoto}
      />
      
      <Redirect to="/indexs" />
    </Switch> */}
   <App />
  </BrowserRouter>,
  document.getElementById("root")
);
