import React, { Component } from "react";

class Counter extends Component {
    
    state = {
        id: this.props.id,
        value: this.props.value,
        type: this.props.type
    };

/*
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    };
*/

    render() {
        return (
            <div className="d-flex justify-content-center col-lg mt-2">
                <span className="h3 m-2 p-1" >{this.state.type}:</span>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "h4 m-2 p-1 rounded bg-";
        classes += this.state.value === 0 ? "warning text-dark" : "primary text-white";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
