import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todosState, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todosState.map(({ id, text, completed }) => (
      <li key={id}>
        <Todo
          text={text}
          completed={completed}
          onDelete={() => onDeleteTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
