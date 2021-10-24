import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Fees from './Pages/Fees/Fees';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PatientForm from './Pages/PatientForm/PatientForm';


function App() {
  return (
    <div className="container-wrap">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Redirect to="/" />
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/fees">
              <Fees></Fees>
            </PrivateRoute>
            <PrivateRoute path="/form">
              <PatientForm></PatientForm>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/service/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
