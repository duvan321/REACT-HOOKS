import React  from "react";


export const Header = (props) => {
  
  

  
  
  return(
    <div className="Header ">
        <h1>React Hooks</h1>
        <button type="button"onClick={()=>props.onClick()}>
            {props.darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
  );
};

export default Header;
