import { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import initialTodos from './components/todos.json';

// App найближчий спільний батьківський предок для компонентів, тому в нім зберігається стейт, щоб була можливість прокидати пропси і піднімати стан.

class App extends Component {
  state = { todos: initialTodos, }
//     {
//     todos: [
//     { id: "id-1", text: "Выучить основы React", completed: true },
//     { id: "id-2", text: "Разобраться с React Router", completed: false },
//     { id: "id-3", text: "Пережить Redux", completed: false }
// ]
//   }
  deleteTodo = todoId => {
    this.setState(prevState => ({
      // Потрібно повернути слайс попереднього масиву, без об'єкту який має ІД, під видалення Тому беремо попередній todos зі state і фільтруємо його, а саме відбираємо ті об'єкти ІД яких не рівна ІД на видалення. Метод фільтр повертає новий масив зі всіма елементами, що пройшли перевірку і викидає елемент який рівний todoId. Не мутує колекції (map, reduce, filter)
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const complited = todos.filter(todo => todo.completed).length;
    // Варіант через reduce:
    // const complited = todos.reduce((total, todo) => (todo.completed? total+1 : total),0);

    return (
      <>
        <div>
        {/* Вираховувані значення -  це значення, які вираховуються на основі наявних даних, зокрема стейта, тобто не зберігати все в стейті, він має бути мінімально завантажений даними. Все що можна вирахувати з наявних даних має бути обраховано. */}
        <p>Загальна к-ть: {todos.length} </p> 
          <p>Виконаних: {complited}</p>
    </div>
    <div className="App">
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> {/*Прокидаємо метод батьківського класу дитині (Підняття стану)*/}
        </div>
        </>
  );
}
  }
  

export default App;
