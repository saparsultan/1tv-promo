import {useEffect, useRef} from "react";
import {useForm} from "@/store/modal";

export default function Feedback() {
  const modalRef = useRef(null);
  const {toggleShow} = useForm()


  useEffect(() => {
    // Добавление слушателя клика при монтировании
    if (modalRef) {
      document.addEventListener('click', handleClickOutside, true);
    }

    // Удаление слушателя при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  const onHandleClose = () => {
    toggleShow()
  }

  // Обработчик клика вне модального окна
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onHandleClose(); // Закрыть модальное окно
    }
  };

  return (
      <div className="modal__overlay">
        <div className="modal" ref={modalRef}>
          <div className="modal-header">
            <h3 className="modal__title">
              Форма обратной связи
            </h3>
          </div>
          <div className="modal-body">
            <form className="modal-form">
              <div className="modal-form__item">
                <label className="modal-form__label" htmlFor="name">
                  Ваше имя
                </label>
                <input className="modal-form__input" type="text" id="name" placeholder="Имя"/>
              </div>
              <div className="modal-form__item">
                <label className="modal-form__label" htmlFor="email">
                  E-mail
                </label>
                <input className="modal-form__input" type="email" id="email" placeholder="example@mail.com"/>
              </div>
              <div className="modal-form__item">
                <label className="modal-form__label" htmlFor="message">
                  Сообщение
                </label>
                <textarea className="modal-form__input modal-form__textarea" id="message" placeholder="Задайте вопрос"/>
              </div>
              <button type='submit' className="modal-form__btn">Отправить</button>
            </form>
          </div>
          <div className="modal-close" onClick={onHandleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 13.4L7.10005 18.3C6.91672 18.4833 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4833 5.70005 18.3C5.51672 18.1167 5.42505 17.8833 5.42505 17.6C5.42505 17.3167 5.51672 17.0833 5.70005 16.9L10.6 12L5.70005 7.09999C5.51672 6.91665 5.42505 6.68332 5.42505 6.39999C5.42505 6.11665 5.51672 5.88332 5.70005 5.69999C5.88338 5.51665 6.11672 5.42499 6.40005 5.42499C6.68338 5.42499 6.91672 5.51665 7.10005 5.69999L12 10.6L16.9 5.69999C17.0834 5.51665 17.3167 5.42499 17.6 5.42499C17.8834 5.42499 18.1167 5.51665 18.3 5.69999C18.4834 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4834 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4834 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4834 18.1167 18.3 18.3C18.1167 18.4833 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4833 16.9 18.3L12 13.4Z"
                  fill="#1C1B1F"/>
            </svg>
          </div>
        </div>
      </div>
  );
}