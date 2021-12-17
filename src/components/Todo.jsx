import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Todo extends Component {
    
    state = {
        id: this.props.id,
        text: this.props.text,
        typeOfTodo: this.props.typeOfTodo,
        isCompleted: this.props.isCompleted
    };

    getTodoClasses() {
        let classes = "d-flex justify-content-between w-75 p-2 mt-2 border rounded border-dark border-3 text-light ";
        classes += this.state.isCompleted === true ? "bg-success" : "bg-secondary";
        return classes;
    }

    render() {
        return (
            <div className="d-flex justify-content-center mt-2">
                <span className={this.getTodoClasses()} onClick={() => {
                    this.setState({isCompleted: !this.state.isCompleted});
                }}>
                    <span className="mt-1 h4">
                        {this.state.text}
                    </span>
                    <span className="mx-4">
                        <Button variant="primary" type="submit" className="mx-4">
                            Edit todo
                        </Button>
                        <Button variant="danger" type="submit">
                            Remove todo
                        </Button>
                    </span>
                </span>

            </div>
        )
    }
}

export default Todo