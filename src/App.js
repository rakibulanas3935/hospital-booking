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
import Confirmation from "./Components/Booking/Confirmation";
import Authprovidor from "./Components/Context/Authprovider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Cancelbooking from "./Components/Booking/CancelBooking/Cancelbooking";
import Dashboard from "./Components/Dashboard/Dashboard";
import CancelStep1 from "./Components/Booking/CancelBooking/CancelStep1";
import SuccessfulCancelation from "./Components/Booking/CancelBooking/SuccessfulCancelation";

//Starting part

function App() {
  return (
    <div className="App ">
      <Authprovidor>
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
            <PrivateRoute path="/step1">
              <Shared></Shared>
              <Step1></Step1>
            </PrivateRoute>
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
              <Confirmation></Confirmation>
            </Route>
            {/* cancel booking part */}
            <Route path="/cancelbooking">
              <Shared></Shared>
              <Cancelbooking></Cancelbooking>
            </Route>
            {/* client dashboard */}
            <Route path="/clientdashboard">
              <Shared></Shared>
              <Dashboard></Dashboard>
            </Route>
            <Route path="/cancel-step1">
              <Shared></Shared>
              <CancelStep1></CancelStep1>
            </Route>
            <Route path="/cancelsucessful">
              <Shared></Shared>
              <SuccessfulCancelation></SuccessfulCancelation>
            </Route>
          </Switch>
        </Router>
      </Authprovidor>
    </div>
  );
}

export default App;
