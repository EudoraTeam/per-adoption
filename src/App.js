import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer';



function App() {
  return (
    <>
  
      <Router>
    
        <Navbar/>
        <Switch>
        <Route path = '/' exact component = {Home}/>
      
        
        </Switch>
        </Router>
           



<div className = "App">
      
</div> 

        <Footer/>
        

   </>
  );
}

export default App;


