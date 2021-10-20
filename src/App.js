import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Enquiry from './Pages/Enquiry/Enquiry';
import Fees from './Pages/Fees/Fees';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="container-wrap">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/fees">
            <Fees></Fees>
          </Route>
          <Route path="/enquiry">
            <Enquiry></Enquiry>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
