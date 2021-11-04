import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Offer from './Components/Home/Home/Offer/Offer';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import myOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header>
          
        </Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
              <Login/>
            </Route>
          <PrivateRoute exact path="/offering/:serviceId">
            <Offer></Offer>
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <AdminDashBoard></AdminDashBoard>
          </PrivateRoute>
          <Route exact path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
      


    </div>
  );
}

export default App;