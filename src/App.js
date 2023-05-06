import { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import Form from './components/Form';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Modal from './components/Modal';

// App найближчий спільний батьківський предок для компонентів, тому в нім зберігається стейт, щоб була можливість прокидати пропси і піднімати стан.

class App extends Component {
  state = {
    // todos: initialTodos,
    todos: [],
    comleted: false,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
    // тут можна отримати для початково стейту масив тодос з локалсторедж попередньої локальної сесії(якщо немає вхідних даних initialTodos, наприклад)
    const todos = localStorage.getItem('todos');
    console.log(todos);
    const parsedTodos = JSON.parse(todos);
    console.log(parsedTodos);
    // перевірка на випадок якщо в локалсторедж пусто, буде null і все завалиться
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);
    if (this.state.todos !== prevState.todos) {
      console.log('Зммінився масив todos та запишеться в сторедж');
      // при кожному апдейті тодос кладемо зміни в локалсторейдж
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const newTodo = {
      id: shortid.generate(),
      text,
      comleted: false,
    };

    this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      // Потрібно повернути слайс попереднього масиву, без об'єкту який має ІД, під видаленняБ для цього беремо попередній todos зі state і фільтруємо його, а саме відбираємо ті об'єкти ІД яких не рівна ІД на видалення. Метод фільтр повертає новий масив зі всіма елементами, що пройшли перевірку і викидає елемент який рівний todoId. Не мутує колекції (map, reduce, filter)

      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    const { todos } = this.state;
    const complited = todos.filter(todo => todo.completed).length;
    // Варіант через reduce:
    // const complited = todos.reduce((total, todo) => (todo.completed? total+1 : total),0);

    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} /> <br />
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <div>
          {/* Вираховувані значення -  це значення, які вираховуються на основі наявних даних, зокрема стейта, тобто не зберігати все в стейті, він має бути мінімально завантажений даними. Все що можна вирахувати з наявних даних має бути обраховано. */}
          <p>Загальна к-ть: {todos.length} </p>
          <p>Виконаних: {complited}</p>
        </div>
        <div className="App">
          <TodoList
            todosState={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          {/*Прокидаємо метод батьківського класу дитині (Підняття стану)*/}
        </div>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>
              контент модалки - children, які будуть іншими компонентами (експозиція), що дає
              можливість перевикористовувати компонент модалки. Можна замість цього сюди поставити
              компонент по додаванню заміток.
            </h1>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
