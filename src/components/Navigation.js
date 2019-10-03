import React from 'react';
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
           <a href="/">Home</a> 
          <Link to= "/"></Link>
        </div>
        <div>
          <a href="/About">About</a>
          <Link to="/About"></Link>
        </div>
        <div>
          <a href="/Contact">Contact</a>
          <Link to="/Contact"></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
