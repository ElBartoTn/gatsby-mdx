import React from "react";

const Button = ({ label, handleClick }) => (
  <button onClick={handleClick}>{label}</button>
);

export default Button;
