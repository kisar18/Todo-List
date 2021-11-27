import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        console.log(todo.id, todo.typeOfTodo);
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    return (
        <div className="container justify-content-center">
            <TodoForm onSubmit={addTodo}/>
            <div className="row">
                {todos.map(todo => (
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

export default TodoList
