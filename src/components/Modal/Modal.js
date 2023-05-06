import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

// в index.html створили кореневий елемент для рендеру в неї розмітки модалки
// Техніка рендеру модалок через портали: створюємо портал для реалізації модалки, щоб модалка реалізовувалась поза іншою розміткою, щоб не виникло систуацій коли боладку перекривають або обрізає через стилі інших компонентів
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('modal componentDidMount');
    //   закриття модалки на esc:
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  // закриття через esc треба робити через метод а не анонімну функцію, тому що ї треба буде зняти після розмонтування модалки в методі Unmount.
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('натиснули esc');
      this.props.onClose();
    }
  };
  // закриття модалки на бекдроп
  handleBackdropClick = e => {
    console.log('clikc to backdrop');
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className={css.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
