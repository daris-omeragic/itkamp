import React from "react";
import "./StyledButton.css";

const StyledButton = (props) => {
  return (
    <button className='styledButton' onClick={props.onClickHandler}>
      {props.innerText}
    </button>
  );
};


export default StyledButton;