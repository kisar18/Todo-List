import React, {Component} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

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
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default TodoList
