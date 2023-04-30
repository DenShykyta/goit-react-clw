import { Component } from 'react';
import './Dropdown.css';

class Toggle extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    }

        render() {
            return (
                <div className='Dropdown'>
                    <button type='button' className='Dropdown__toggle' onClick={this.toggle}>{this.state.visible ? 'Приховати' : 'Показати'}</button>
            
                    {this.state.visible && (<div className='Dropdown__menu'>Випадаюче меню</div>)}
                </div>
            );
        }
    }
export default Toggle;