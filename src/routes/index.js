import React from "react";
import {Route, Switch} from "react-router-dom";
import Concursuri from "./Concursuri/index";
import About from "./About/index";
import Home from "./HomePage/index";
import Form from "./Form/index";
import Admin from "./Admin/index";
import Privacy from "./PrivacyPolicy/index";
import Terms from "./TermsofUse/index";
const App = ({match}) => (
  <div className="gx-main-content-wrapper">
   <Switch>
      <Route path={`${match.url}acasa`} component={Home}/>
      <Route path={`${match.url}concursuri`} component={Concursuri}/> 
      <Route path={`${match.url}despre`} component={About}/>
      <Route path={`${match.url}form`} component={Form}/>
      <Route path={`${match.url}admin`} component={Admin}/>
      <Route path={`${match.url}privacy`} component={Privacy}/>
      <Route path={`${match.url}terms`} component={Terms}/>
  </Switch>
  </div>
);

export default App;
