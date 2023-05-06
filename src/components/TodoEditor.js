import { Component } from 'react';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.message
    ); /*прокидуєм в Арр лише текст(значення властивості message), там не потрібен об'єкт*/
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.message} onChange={this.handleChange}></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoEditor;
