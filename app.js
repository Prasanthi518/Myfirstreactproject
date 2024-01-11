import React from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css"; // Import the CSS file for styling

const App = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="textbox"></input>
      </div>
      <div className="user-icon">User Icon</div>
    </div>
  );
};



const heading = React.createElement("span",{id:"myheading",class:'heading'},"Hello from React");
const JSXelement = (<h1 className="heading">
    JSX ELEMENT
    </h1>);
    //getData =() => {return <h1> this is functional component</h1>};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

//const parent = React.createElement("div",{id:'parent'},React.createElement("div",{},[
    //React.createElement("h1",{},"h1 tag"),
    //React.createElement("h1",{},"h2 tag"),
//]))
const content = () => {
    return <p>this is a para.</p>
}