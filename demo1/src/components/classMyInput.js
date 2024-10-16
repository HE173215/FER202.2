import * as React from 'react';

class MyInput extends React.Component {


    onChange() {
        console.log("change");
    }

    onBlur() {
        console.log("blur");
    }

    render() {
        return (
            <button onClick={this.onChange} onBlur={this.onBlur}>
                FPTU
            </button>
        );
    }
}

export default MyInput;