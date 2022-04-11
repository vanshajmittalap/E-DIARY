import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Sign.css';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, mobile: credentials.mobile }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/verify");
      props.showAlert("ACCOUNT CREATED SUCCESSFULLY", "success")
    } else {
      props.showAlert("INVALID CREDENTIALS", "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let myStyle1 = {
    color:'rgb(240, 10, 71)',
    fontFamily: 'fantasy'
}
let myStyle2 = {
    color:'white',
    fontFamily: 'cursive'
}

  return (
    <div className="con">
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
      <h1 style={{color:'rgb(240, 10, 71)', fontFamily:'fantasy', marginLeft:'25%'}}>CREATE AN ACCOUNT TO CONTINUE</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={myStyle2}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}}
            onChange={onChange}
            aria-describedby="namehelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={myStyle2}>
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text" style={myStyle1}>
            We'll never share your deatils with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={myStyle2}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label" style={myStyle2}>
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{backgroundColor:'rgb(240, 10, 71)', marginLeft:'42%'}}>SIGN UP</button>
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      </form>
    </div>
    </div>
  );
};

export default Signup;
