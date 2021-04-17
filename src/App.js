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
          <Route path="/dashboard/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/dashboard/allCustomer">
            <AllCustomers></AllCustomers>
          </Route>
          <Route path="/dashboard/addService">
            <AddService></AddService>
          </Route>
          <Route path="/dashboard/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/admin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
