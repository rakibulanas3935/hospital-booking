//Components folder structure

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Step1 from "./Components/Booking/Step1";
import Step2 from "./Components/Booking/Step2";
import Login from "./Components/Registration/Login";
import Newaccount from "./Components/Registration/Newaccount";
import SucessRegister from "./Components/Registration/SucessRegister";

//Starting part

function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          {/* Home page  */}
          <Route exact path="/">
            <Login></Login>
          </Route>
          {/* login page */}
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* Declaring step1 marketing page  */}
          <Route path="/step1">
            <Step1></Step1>
          </Route>
          {/* Declaring step2 marketing page  */}
          <Route path="/step2">
            <Step2></Step2>
          </Route>
          {/* Declaring step2 marketing page  */}
          <Route path="/register">
            <Newaccount></Newaccount>
          </Route>
          <Route path="/sucessregister">
            <SucessRegister></SucessRegister>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
