import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const HomePage = ()=> {
  return (
    <div>
      <div>
    <ul role="nav">
      <li><Link to="/">HomePage</Link></li>
      <li><Link to="/form">Form</Link></li>
    </ul>
  </div>
  <ul>
    <li><a href="/page/register">/page/register</a></li>
    <li><a href="/page/helloworld">/page/helloworld</a></li>
    <li><a href="/page/404">/page/404</a></li>
    <li><a href="/register">/register</a></li>
    </ul>

    </div>
    
    
  );
}

export default HomePage;
