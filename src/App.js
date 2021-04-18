import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment/Appointment';
import AllCustomers from './components/AllCustomers/AllCustomers/AllCustomers';
import AddService from './components/Dashboard/DashboardComponents/AddService/AddService';
import AddReview from './components/Dashboard/DashboardComponents/AddReview/AddReview';
import AddAdmin from './components/AddAdmin/AddAdmin';
import ManageService from './components/Dashboard/DashboardComponents/ManageService/ManageService';
import UserOrder from './components/Dashboard/DashboardComponents/UserOrder/UserOrder';
import AboutUs from './components/AboutUs/AboutUs';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allCustomer">
            <AllCustomers></AllCustomers>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/bookingList">
            <UserOrder></UserOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
