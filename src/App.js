/////////////////////////////

import  React,  {useState}from "react";
import  Header  from "./component/Header"
import Characters from "./component/Characters";
import'bootstrap/dist/css/bootstrap.css';
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  return (
    <div>
    <div className= {"App "+ bg}>
    <Header
      darkMode={darkMode}
      onClick={() => setDarkMode(!darkMode)}
    ></Header>
    <Characters></Characters>
  </div>
  
    </div>
  );
}

export default App;
