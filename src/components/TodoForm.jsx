import React, {Component} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TodoForm extends Component {

    state = { 
        input: '',
        todoType: 'Daily' 
    };

    handleChange = e => {
        this.setState({input: e.target.value})
    }

    handleSelectChange = e => {
        this.setState({todoType: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: this.state.input,
            typeOfTodo: this.state.todoType,
            isCompleted: false
        });
    };

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <Row className="g-2 my-4">
                    <Col md>
                        <FloatingLabel label="New Todo">
                        <Form.Control type="text" placeholder="My new todo" value={this.state.input} onChange={this.handleChange}/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Type of todo">
                        <Form.Select type="text" onChange={this.handleSelectChange}>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Lifetime">Lifetime</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md className="text-center">
                        <Button variant="primary" type="submit">
                            Add todo
                        </Button>
                    </Col>
                </Row>
            </form>
        )
    }
}

export default TodoForm