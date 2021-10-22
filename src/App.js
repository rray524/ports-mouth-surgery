import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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


function App() {
  return (
    <div className="container-wrap">

      <AuthProvider>
        <BrowserRouter>
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
            <Route path="/fees">
              <Fees></Fees>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/service/:serviceID">
              <ServiceDetails></ServiceDetails>
            </Route>
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
        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
