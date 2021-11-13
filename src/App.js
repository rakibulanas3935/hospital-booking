//Components folder structure

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BookingHeader from "./Components/Booking/MakeBooking/BookingHeader";
import DatePicker from "./Components/Booking/MakeBooking/Date";
import Time from "./Components/Booking/MakeBooking/Time";
import Symptoms from "./Components/Booking/MakeBooking/Symptoms";
import Physio from "./Components/Booking/MakeBooking/Physio";
import Step1 from "./Components/Booking/Step1";
import Step2 from "./Components/Booking/Step2";
import ForgetPassword from "./Components/Registration/ForgetPassword";
import Login from "./Components/Registration/Login";
import Newaccount from "./Components/Registration/Newaccount";
import ResetSucessful from "./Components/Registration/ResetSucessful";
import SucessRegister from "./Components/Registration/SucessRegister";
import Shared from "./Components/Shared/Shared";
import Step5 from "./Components/Booking/Step5";

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

          {/* Register page*/}
          <Route path="/register">
            <Newaccount></Newaccount>
          </Route>
          {/* Success register */}
          <Route path="/sucessregister">
            <SucessRegister></SucessRegister>
          </Route>
          {/* forgetpassword */}
          <Route path="/forgetpassword">
            <ForgetPassword></ForgetPassword>
          </Route>
          {/* Sucessfully register */}
          <Route path="/sucessreset">
            <ResetSucessful></ResetSucessful>
          </Route>
          {/* Step1 booking */}
          <Route path="/step1">
            <Shared></Shared>
            <Step1></Step1>
          </Route>
          {/* Step2 booking */}
          <Route path="/step2">
            <Shared></Shared>
            <Step2></Step2>
          </Route>
          {/* Make booking */}
          <Route path="/makebooking">
            <Shared></Shared>
            <BookingHeader></BookingHeader>
          </Route>
          {/* Make booking physio part */}
          <Route path="/physio">
            <Shared></Shared>
            <BookingHeader></BookingHeader>
            <Physio></Physio>
          </Route>
          {/* Make booking date part */}
          <Route path="/date">
            <Shared></Shared>
            <BookingHeader></BookingHeader>
            <DatePicker></DatePicker>
          </Route>
          {/* Make booking time part */}
          <Route path="/time">
            <Shared></Shared>
            <BookingHeader></BookingHeader>
            <Time></Time>
          </Route>
          {/* Make booking symptoms part */}
          <Route path="/symptoms">
            <Shared></Shared>
            <BookingHeader></BookingHeader>
            <Symptoms></Symptoms>
          </Route>
          {/* step5 part */}
          <Route path="/step5">
            <Shared></Shared>
            <Step5></Step5>
          </Route>
          {/* Confirmation part */}
          <Route path="/confirmation">
            <Shared></Shared>
            <Step5></Step5>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
