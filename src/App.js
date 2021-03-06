import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Navbar from './components/NavbarComponent/NavbarComponent';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ContainerRegulationTO from './components/RegulationTO/ContainerRegulationTO';
import AddTo from './components/AddTo/addTO';
import ContainerMadeTO from './components/MadeTO/ContainerMadeTO';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info'
import CalendarContainer from './components/Calendar/CalendarContainer';
import Recharts from './components/Recharts/Recharts';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" render={ () => <Home /> } /> 
          <Route path="/regulation-to" render={ () => <ContainerRegulationTO /> } />
          <Route path="/made-to" render={ () => <ContainerMadeTO /> } />
          <Route path="/add-to" render={ () => <AddTo /> } /> 
          <Route path="/calendar" render={() => <CalendarContainer />} />
          <Route path="/recharts" render={() => <Recharts />} />
          <Route path="/register" render={ () => <Register/> } />
          <Route path="/login" render={ () => <Login/> } />
          <Route path="/info" render={ () => <Info/> } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
