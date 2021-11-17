import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange =e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <Row className="g-2 my-4">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="New Todo">
                    <Form.Control type="text" placeholder="My new todo" value={input} onChange={handleChange}/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Type of todo">
                    <Form.Select aria-label="Floating label select example">
                        <option value="1">Weekly</option>
                        <option value="2">Lifetime</option>
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