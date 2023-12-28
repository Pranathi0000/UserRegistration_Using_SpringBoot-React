import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomeStyles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="buttons-container">
        <Link to="/registration" className="button">
          Register
        </Link>
        <Link to="/login" className="button">
         Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
