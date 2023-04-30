import { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    };
    setActiveIdx = index => {
        this.setState({
            activeOptionIdx: index,
        })
    }

    render() { 
        const activeOptionLabel = this.props.options[this.state.activeOptionIdx];
        const { label } = activeOptionLabel;
        /* записуємо у змінну обєкт з індексом, що в стейті і деструктуризуємо його, витягнувши з нього Лейбл. Потім підставляємо Лейбл в абзац "Вибраний колір"*/
        // const { label } = this.props.options[this.state.activeOptionIdx] - коротший запис деструктуризації
        return (
        <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Вибраний колір: { label } </p>
        <div>
                    {this.props.options.map(({ label, color }, index) => {
                        /*масив з базовим класом для кнопок, в який додаватиметься по умові клас активної кнопки */
                        const optionClasses = ['ColorPicker__option']; 
                        if (index === this.state.activeOptionIdx) {
                            optionClasses.push('ColorPicker__option--active');
                        }
                        return (
                            <button
                                key={label}
                                className={optionClasses.join(' ')}
                                style={{ backgroundColor: color }}

                            // style={{ backgroundColor: color, border: index === this.state.activeOptionIdx ? '5px solid black' : 'none', }}
                                
                          onClick={() => this.setActiveIdx(index)} /*Якщо передати просто this.setActiveIdx(index) то відбудеться виклик функції з undefind, тому передається посилання на функцію */
                        ></button>
                        )
                    })}
        </div>
        </div>
                 )
    }
}

export default ColorPicker;