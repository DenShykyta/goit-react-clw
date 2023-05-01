import React from "react";
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) =>
    <ul>{todos.map(({ id, text }) =>
        <li key={id}>
            <p>{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Del</button>
        </li>)}
    </ul>;

export default TodoList;