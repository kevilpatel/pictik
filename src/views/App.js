import React from "react";
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect } from "react-router-dom";
import PhotoSection from "./index-sections/PhotoSection";
import SectionButtons from "./index-sections/SectionButtons";
import ShowPhoto from "./index-sections/ShowPhoto";
import SignUp from "../views/examples/RegisterPage"
//import { Router } from "react-router/cjs/react-router.min";

function App(){
    return  (
        <>
<Router>
            <Switch>
                <Route exact  path='/' component={SignUp} />
                <Route path='/home' component={SectionButtons}/>
                <Route path='/photoSection' component={PhotoSection} />
                <Route path='/ShowPhoto' component={ShowPhoto} />
                <Redirect to="/" />
            </Switch>
            </Router>
        </>
    )
}

export default App;