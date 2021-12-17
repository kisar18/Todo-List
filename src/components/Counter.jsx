import React, { Component } from "react";

class Counter extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center col-lg mt-2">
                <span className="h3 m-2 p-1" >{this.props.counter.type}:</span>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "h4 m-2 p-1 rounded bg-";
        classes += this.props.counter.value === 0 ? "warning text-dark" : "primary text-white";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
