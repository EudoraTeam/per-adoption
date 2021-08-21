import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Search from './components/Search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <>
     <div className =".App">
      <Router>
    
        <Navbar/>
        <Switch>
        <Route path = '/' exact component = {Home}/>

        </Switch>
      </Router>


        <Router>
      <Switch>
        <Search />
        </Switch>
      </Router>
      </div>

   </>
  );
}

export default App;


