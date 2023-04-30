import { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    };

    show = () => {
        this.setState({ visible: true })
    };

    hide = () => {
        this.setState({ visible: false })
    };


    render () {
    return (
        <div className='Dropdown'>
            <button type='button' className='Dropdown__toggle' onClick={this.show}>Показати</button>
            <button type='button' className='Dropdown__toggle' onClick={this.hide}>Сховати</button>
        {this.state.visible && (<div className='Dropdown__menu'>Випадаюче меню</div>)}
        </div>
    );
    }
}

export default Dropdown;