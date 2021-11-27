import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
    const [input, setInput] = useState('');
    const [todoType, setTodoType] = useState('Daily');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSelectChange = e => {
        setTodoType(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
            typeOfTodo: todoType,
            isCompleted: false
        });
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <Row className="g-2 my-4">
                <Col md>
                    <FloatingLabel label="New Todo">
                    <Form.Control type="text" placeholder="My new todo" value={input} onChange={handleChange}/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel label="Type of todo">
                    <Form.Select type="text" onChange={handleSelectChange}>
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

export default TodoForm