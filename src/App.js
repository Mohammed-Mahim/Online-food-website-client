
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Offer from './Components/Home/Home/Offer/Offer';
import Login from './Components/Login/Login';




function App() {
  return (
    <div>
      <Router>
        <Header>
          
        </Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/offer">
            <Offer></Offer>
          </Route>
          <Route exact path="/login">
              <Login/>
            </Route>
        </Switch>
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
