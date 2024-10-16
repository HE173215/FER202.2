import React from "react";
function FunctionMyButton() {
    function onClick() {
        alert('You clicked me!');
    }
    return (
        <button onClick={onClick}>
        Click me 2
        </button>
    );
    
} export default FunctionMyButton;