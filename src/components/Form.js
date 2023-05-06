import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    gender: 'male',
    agree: false,
  };

  nameInputId = shortid.generate();
  surnameInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      // [event.currentTarget.name]: event.currentTarget.name, - деструктурезували
      [name]: value,
    });
  };
  // handleNameChange = event => {
  //   this.setState({
  //     name: event.currentTarget.value,
  //   });
  // };

  // handleSurnameChange = event => {
  //   this.setState({
  //    surname: event.currentTarget.value,
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      surname: '',
    });
  };

  handleAgreeChanged = event => {
    this.setState({
      agree: event.currentTarget.checked,
      //   agree: !this.state.agree /*теж робочий варіант*/,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Ім'я</label>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.surnameInputId}>Прізвище</label>
        <input
          type="text"
          value={this.state.surname}
          name="surname"
          onChange={this.handleChange}
          id={this.surnameInputId}
        />
        <p>Стать</p>
        <lable>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={
              this.handleChange
            } /*обробник підходить той самий, що й на інпутах, логіка та сама*/
            checked={
              this.state.gender === 'male'
            } /*це потрібно, щоб був відображений чект по-замовчуваню. Якщо допускається, щоб при рендері обидва чеки були порожні, то працює і без цього запису і без початкового запису в стейті*/
          />
        </lable>
        <lable>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === 'female'}
          />
        </lable>
        <br />
        <lable>
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleAgreeChanged}
          />
          Agree with anything!
        </lable>
        <br />
        <button type="submit" disabled={!this.state.agree}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
