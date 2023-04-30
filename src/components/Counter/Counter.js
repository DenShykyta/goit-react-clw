import {Component} from 'react';
import './Counter.css';

class Counter extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 5,
    //     };
    // }
    /*Завдяки Bable, який транспілює у публічні властивості конструктор і методи класу, можемо конструктор записати у вигляді публічної властивостві - для зручності і наглядності при написанню коду, так само проптипи і дефолтні значення*/
    
    static defaultProps = {
        initialValue: 0,
        step: 1,
    };

    static propTypes = {
        // 
    };
    
    state = {
        value: this.props.initialValue,
        step: this.props.step, /* це я вже сам додав*/
    };
    
    handleIncrement = (event) => {
        /*не звичайний метод класу, а публічна властивість класу, щоб був контекст. ЛИШЕ ТАК!*/
        // console.log('click button 1'); /*click button 1 */
        // console.log(event.currentTarget); /*<button type='button'>Збільшити на 1</button>*/
        // console.log(event.target);/*<button type='button'>Збільшити на 1</button>*/
        // console.log(event); /*SyntheticBaseEvent {...}*/

        /*При такому записі просто перезаписується стейт без урахування попереднього стану, тому потрібно передавати функцію, яка прийматиме аргументом значення попередньоого стану */

        // this.setState ({   
        //     value: 1,
        // });
        
        this.setState((prevState) => {
            return {
                value: prevState.value + this.state.step,
            }
        });
    };
    handleDecrement = ()=> {
        // console.log('click button 2')
        this.setState(prevState => {
            return {
                value: prevState.value - this.state.step,
            }
        });
    }

    render() {
        // Деструктуризація щоб не пистати this.state this.props
        const { value } = this.state;
        return (
            <div className="Counter">
                <span className='Counter__value'>{value}</span> {/*  до деструктуризації було:  <span className='Counter__value'>{this.state.value}</span>*/}
                <div className='Counter_controls'>
                    <button type='button' onClick={this.handleIncrement}>Збільшити на {this.state.step} </button>
                    <button type='button' onClick={this.handleDecrement}>Зменшити на {this.state.step}</button>
                </div>
            </div> 
                )
    }
}

// import './Counter.css';

// const Counter = () => {
//     return (
//        <div className="Counter">
//                 <span className='Counter__value'>0</span>
//                 <div className='Counter_controls'>
//                     <button type='button'>Збільшити на 1</button>
//                     <button type='button'>Зменшити на 1</button>
//                 </div>
//             </div>  
//     )
// }

export default Counter;