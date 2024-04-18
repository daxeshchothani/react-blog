import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div className="topnav" style={navStyle}>
        <Link to='/'>Home</Link>
        {/* <a href="/about">About</a> */}
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/terms'>Terms & Conditions</Link>
        <Link to='/privacy'>Privacy Policy</Link>
      
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/technology-background_23-2148119855.jpg?w=826&t=st=1713380154~exp=1713380754~hmac=95a90c23698f073777f4c3730b30dbc6e90127f078904607b0b5a5abff8b12c3" alt="React Image" style={imgStyle}/>
      </div>
    </>
  );
}

const navStyle = {
  backgroundColor: 'yellow',
  overflow: 'hidden',
  
};
const  imgStyle = {
    margintop: '20px',
};


