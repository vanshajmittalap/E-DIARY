import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://backend-ljql.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("ACCOUNT CREATED SUCCESSFULLY", "success")
    } else {
      props.showAlert("INVALID CREDENTIALS", "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let myStyle1 = {
    color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066',
    fontFamily: 'fantasy'
}
let myStyle2 = {
    color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'black',
    fontFamily: 'cursive'
}

  return (
    <div className="container mt-2">
      <h1 style={myStyle1}>CREATE AN ACCOUNT TO CONTINUE</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="cpassword" className="form-label" style={myStyle2}>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{backgroundColor:'#0000cc'}}>
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
