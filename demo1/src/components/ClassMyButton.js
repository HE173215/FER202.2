import React from 'react';

class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.onclick = this.onclick.bind(this);
    }

    onclick() {
        alert('You click me!');
    }

    render() {
        console.log('test');
        return (
            <button onClick={this.onclick} >
                Click me 1
            </button>
        );
    }
}
export default MyButton;