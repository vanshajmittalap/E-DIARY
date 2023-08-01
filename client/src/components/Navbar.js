import React , {useState} from 'react'
import { Link, useLocation, useHistory} from "react-router-dom";

const Navbar = (props) => {
    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("./login");
    }
    let location = useLocation();
    const [theme, setTheme] = useState("false");
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'purple'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">E-DIARY</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "":"active"}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>
                        <li style={{display:'flex', marginLeft:'400px'}}>
                        {theme!=="true" && (<button className="btn btn-primary" onClick={()=>{setTheme("true")}} style={{marginLeft:"100px"}}>Change Theme</button>)}
                        {theme==="true" && (<button className="btn btn-primary" onClick={()=>{setTheme("flase")}}>Close</button>)}
                        {theme==="true" && (<button type="button" className="btn btn-light btn-lg rounded-circle" onClick={()=>{props.toggleMode('light')}}></button>)}
                        {theme==="true" && (<button type="button" className="btn btn-dark btn-lg rounded-circle" onClick={()=>{props.toggleMode('dark')}}></button>)}
                        {theme==="true" && (<button type="button" className="btn btn-primary btn-lg rounded-circle" onClick={()=>{props.toggleMode('primary')}}></button>)}
                        {theme==="true" && (<button type="button" className="btn btn-warning btn-lg rounded-circle" onClick={()=>{props.toggleMode('warning')}}></button>)}
                        {theme==="true" && (<button type="button" className="btn btn-success btn-lg rounded-circle" onClick={()=>{props.toggleMode('success')}}></button>)}
                        {theme==="true" && (<button type="button" className="btn btn-danger btn-lg rounded-circle" onClick={()=>{props.toggleMode('danger')}}></button>)}
                        </li>

                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-primary"> Logout </button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
