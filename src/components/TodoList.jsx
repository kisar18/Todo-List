import React, {Component} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import '../App.css'

class TodoList extends Component {
    
    state = { 
        todos: []
    };

    handleTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const todos = [todo, ...this.state.todos];
        this.props.onAddTodo(this.props.counters[0]);
        
        if(todo.typeOfTodo === "Weekly") {
            this.props.onAddTodo(this.props.counters[1]);
        }
        if(todo.typeOfTodo === "Lifetime") {
            this.props.onAddTodo(this.props.counters[2]);
        }

        this.setState({ todos });
    };

    handleDeleteTodo = todoId => {
        const todos = this.state.todos.filter(t => t.id !== todoId);
        const todo = this.state.todos.find(t => t.id === todoId);

        this.props.onDeleteTodo(this.props.counters[0]);

        if(todo.typeOfTodo === "Weekly") {
            this.props.onDeleteTodo(this.props.counters[1]);
        }
        if(todo.typeOfTodo === "Lifetime") {
            this.props.onDeleteTodo(this.props.counters[2]);
        }

        this.setState({ todos });
    }

    render() {
        return (
            <div className="container justify-content-center">
                <TodoForm onSubmit={this.handleTodos} />
                <div className="row">
                    {this.state.todos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            typeOfTodo={todo.typeOfTodo}
                            isCompleted={todo.isCompleted}
                            className={todo.isCompleted ? "todo-row complete" : "todo-row"}
                            onDeleteTodo={this.handleDeleteTodo}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default TodoList