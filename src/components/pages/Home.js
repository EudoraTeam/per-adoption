import React from 'react'
import Addition from '../Addition';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Search from '../Search';



function Home(){
    return(
        <>
        <Addition />
        <Router>
      <Switch>
      
         <Search />
        </Switch>
      </Router>
        </>
    );
}

export default Home;