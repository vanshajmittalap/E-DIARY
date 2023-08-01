import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = (nmode)=>{
    setMode(nmode);
    if(mode === 'light'){
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "light");
    }
    else if(mode === 'dark'){
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "dark");
    }
    else if(mode === 'primary'){
      document.body.style.backgroundColor = '#0d6efd';
      showAlert("Blue mode has been enabled", "primary");
    }
    else if(mode === 'warning'){
      document.body.style.backgroundColor = '#ffc107';
      showAlert("Yellow mode has been enabled", "warning");
    }
    else if(mode === 'success'){
      document.body.style.backgroundColor = '#198754';
      showAlert("Green mode has been enabled", "success");
    }
    else{
      document.body.style.backgroundColor = '#dc3545';
      showAlert("Red mode has been enabled", "danger");
    }
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} mode={mode}/>
              </Route>
              <Route exact path="/about">
                <About  mode={mode}/>
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} mode={mode}/>
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert} mode={mode}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
