import {object} from "prop-types";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import info from "../info";



const Search = () => {
  const[filter,setFilter] = useState('');
  const searchText = (event)=>{
    setFilter(event.target.value);
  
  }
 let infoSearch = info.cardInfo.filter(item =>{
   return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
 }
  );
  return(
    <section className ="py-4 container">
      <div className = "row justify-content-center">
<div className = "col-12 mb-5">
  <div className= "mb-3 col-4 mx-auto">
    <label className="from-label h4">Search</label>
    <input 
    type = "text"
     className = "from-control"
     value={filter}
     onChange={searchText.bind(this)}
/>
  </div>

</div>
        {infoSearch.map((item,id)=>{
        return(
            <div className = "col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div className = "card p-0 overflow-hidden h-100 shadow">
            
              <Link to = '/Dog_1' className = 'img-links'>
            <img src ={item.img} className="card-img-top" alt = "pet img"/>
           
                  <div className = "card-body">
                  <h5 className ="card-title">{item.title}</h5>
               
                      </div>
                          </Link> 
                    <p className="card-text">{item.desc}</p>

                
               

              </div>
         </div>
        )
        })}
      
        

      </div>
    </section>
  )
}

export default Search;
