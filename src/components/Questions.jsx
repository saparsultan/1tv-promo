'use client'
import Accordion from "@/components/Accordion";
import {useForm} from "@/store/modal";
export default function Questions() {
  const {toggleShow} = useForm()
  const onHandleShowModal = () => {
    toggleShow()
  }

  return (
      <section className="section questions__container" id="faq">
        <div className="container">
          <div className="questions">
            <h2 className="title title-h2 title-desc questions__title">
              Вопросы и ответы
            </h2>
            <div className="questions__desc title-desc__desc">
              Найди свои вопрос среди часто задаваемых
            </div>
            <div className="questions-list">
              <Accordion title="Где можно ознакомиться с полными правилами игры?" content="First Accordion content"/>
              <Accordion title="Какие сроки проведения Акции?" content="First Accordion content"/>

              <Accordion title="Что необходимо сделать, чтобы принять участие в Акции?"
                         content="First Accordion content"/>
              <Accordion title="Какие призы я могу выиграть?" content="First Accordion content"/>

              <Accordion title="Как я узнаю, что выиграл приз по Акции?" content="First Accordion content"/>
              <Accordion title="Кто оплачивает стоимость доставки призов до победителя Акции?"
                         content="First Accordion content"/>
              <Accordion title="Не получил/а на почту новый пароль после сброса. Как быть?"
                         content="First Accordion content"/>
            </div>
            <div className="answer-btn__container">
              <div className="answer-btn" onClick={onHandleShowModal}>
                Остались вопросы? Напишите
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}