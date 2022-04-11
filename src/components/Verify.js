import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Sign.css';

function Verify(props) {
    const [credentials, setCredentials] = useState({email: "", otp: "", mobotp: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/verify", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, otp: credentials.otp, mobotp: credentials.mobotp})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            localStorage.setItem('token', json.authtoken); 
            props.showAlert("LOGGED IN SUCCESSFULLY", "success")
            history.push("/");
        }
        else{
            props.showAlert("INVALID CREDENTIALS", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    let myStyle1 = {
        color:'rgb(240, 10, 71)',
        fontFamily: 'fantasy'
    }
    let myStyle2 = {
        color:'white',
        fontFamily: 'cursive'
    }
    let myStyle3 = {
        color:'rgb(240, 10, 71)',
        fontFamily: 'cursive'
    }
  return (
    <div className="con">
    <div className="container mt-3">
            <h1 style={{color:'rgb(240, 10, 71)', fontFamily:'fantasy', marginLeft:'35%'}}>E-MAIL VERIFICATION</h1>
            <h2 style={myStyle3}>Please check your E-mail and Mobile. Enter the OTP here.</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={myStyle2}>Email Address</label>
                    <input type="email" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="otp" className="form-label" style={myStyle2}>E-MAIL OTP</label>
                    <input type="otp" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} className="form-control" value={credentials.otp} onChange={onChange} name="otp" id="otp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobotp" className="form-label" style={myStyle2}>MOBILE OTP</label>
                    <input type="otp" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} className="form-control" value={credentials.mobotp} onChange={onChange} name="mobotp" id="mobotp" />
                </div>

                <button type="submit" className="btn btn-primary" style={{backgroundColor:'rgb(240, 10, 71)', marginLeft:'46.6%'}}>VERIFY</button>
            </form>
        </div>
        </div>
  )
}

export default Verify