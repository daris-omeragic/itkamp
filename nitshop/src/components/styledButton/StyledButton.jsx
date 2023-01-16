import React from "react";
import "./StyledButton.css";

const StyledButton = (props) => {
    var ButtonText = "Click me";
    function buttonHandler() {
        ButtonText = "CLICKED!"
    }
    return <button className="styledButton" onClick={() => buttonHandler()}>
        {props.innerText}
    </button>
}


export default StyledButton;