import React from "react";

const Minsu = ({LV}) => {
    return <input type={`${LV}`} />
};


const App = () =>  {
    const boxStyle = {
        width: "100px",
        height: "100px",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: "lightgreen"
    }
    return <div>
        Hello Props 
        <Minsu LV="text"/>
        <Minsu LV="checkbox"/>
        <Minsu LV="password" />
        <Minsu LV="date" />
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        <div style={boxStyle}>Hello Box</div>
        </div>;
};

export default App;