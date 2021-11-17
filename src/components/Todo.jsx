import React, { Component } from 'react';

class Todo extends Component {
    state = {
        id: this.props.id,
        type: this.props.type
    };

    render() { 
        return (  
            <div className="container mt-3 rounded text-center border border-secondary">I am todo</div>
        );
    }
}
 
export default Todo;