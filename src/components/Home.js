import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("./login");
    }
  return (
    <>
    <div className='container' style={{fontSize:'45px', fontFamily:'sans-serif', fontWeight:'700', color:'blueviolet'}}>WELCOME TO THIS AUTHENTICATION WEBSITE</div>
    {!localStorage.getItem('token')?<div className="container" style={{display:'flex', justifyContent:'center', marginTop:'85px'}}> 
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
        </div>: <button onClick={handleLogout} className="btn btn-primary" style={{marginLeft:'500px', marginTop:'85px'}}> Logout </button>}
    </>
  )
}

export default Home