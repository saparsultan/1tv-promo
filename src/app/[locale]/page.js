import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <>
      <section className="section main-banner__container">
        <div className="container">
          <div className="main-banner">
            <div className="main-banner-content">
              <div className="main-banner-content__sub">
                через  1 час (1:00:00)
              </div>
              <h1 className='main-banner-content__title'>
                Розыгрыш <br/> на прямом эфире
              </h1>
              <p className="main-banner-content__desc">
                Купи продукцию MacCoffee на сумму    1500 тенге в сети магазинов SMALL & SKIF
              </p>
              <Link href='#' className="main-banner-content__link">
                Перейти в телеграм
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section promotion__container">
        <div className="container">
          <div className="promotion">
            <h2 className="title title-h2 promotion__title">
              Правила акции
            </h2>
            <div className="promotion__list">
              <div className="promotion__item promotion-item">
                <div className="promotion-item__num">
                  1
                </div>
                <div className="promotion-item__text">
                  <div className="promotion-item__title">Посмотри на нашу передачу в первом канале!</div>
                  <div className="promotion-item__desc">Полный список акционного продукта в правилах акции</div>
                </div>
              </div>
              <div className="promotion__item promotion-item">
                <div className="promotion-item__num">
                  2
                </div>
                <div className="promotion-item__text">
                  <div className="promotion-item__title">Перейди на наш телеграм канал!</div>
                  <div className="promotion-item__desc">Полный список акционного продукта в правилах акции</div>
                </div>
              </div>
              <div className="promotion__item promotion-item">
                <div className="promotion-item__num">
                  3
                </div>
                <div className="promotion-item__text">
                  <div className="promotion-item__title">Участвуй в игре!</div>
                  <div className="promotion-item__desc">Период проведения акции с 8 декабря 2023 года до 21 января 2024 года, включая срок регистрации чеков до 17 января 2024 года</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section telegram-block__container">
        <h2 className="title title-h2 telegram-block__title">
          Телеграм канал
        </h2>
        <div className="telegram-block">
          <div className="container">
            <div className="telegram-block__banner">
              <div className="telegram-block__text">
                Ссылка на наш <br/> телеграм канал:
              </div>
              <Link href="https://t.me/eurasia1">
                https://t.me/eurasia1tvkz
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section winners__container">
        <div className="container">
          <div className="winners">
            <h2 className="title title-h2 title-desc winners__title">
              Победители Игры
            </h2>
            <div className="winners__desc title-desc__desc">
              Проверь выиграл ли ты
            </div>
            <div className="winners-filter">
              <select name="select" className="winners-sort">
                <option value="value1">Рейтинг дня</option>
                <option value="value2" selected>Значение 2</option>
                <option value="value3">Значение 3</option>
              </select>
              <form action="" className="winners-search">
                <input type="text" className="winners-input" placeholder='Введите E-mail'/>
                <button className="winners-btn">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M32.1205 31.0196L23.7985 22.6976C25.7983 20.2968 26.7956 17.2174 26.5828 14.1C26.37 10.9826 24.9636 8.06728 22.656 5.96046C20.3485 3.85364 17.3176 2.71756 14.1938 2.78854C11.0699 2.85952 8.09372 4.1321 5.88427 6.34155C3.67482 8.551 2.40224 11.5272 2.33126 14.651C2.26028 17.7749 3.39637 20.8058 5.50319 23.1133C7.61 25.4208 10.5253 26.8273 13.6427 27.0401C16.7601 27.2529 19.8395 26.2556 22.2403 24.2558L30.5624 32.5778L32.1205 31.0196ZM4.57146 14.9464C4.57146 12.9849 5.15312 11.0674 6.24289 9.43644C7.33265 7.80549 8.88158 6.53432 10.6938 5.78367C12.506 5.03303 14.5001 4.83662 16.424 5.2193C18.3478 5.60197 20.115 6.54654 21.502 7.93355C22.889 9.32056 23.8336 11.0877 24.2162 13.0116C24.5989 14.9354 24.4025 16.9295 23.6519 18.7417C22.9012 20.5539 21.63 22.1029 19.9991 23.1926C18.3681 24.2824 16.4507 24.8641 14.4891 24.8641C11.8597 24.8612 9.33879 23.8153 7.4795 21.956C5.62021 20.0967 4.57437 17.5758 4.57146 14.9464Z"
                        fill="white"/>
                  </svg>
                </button>
              </form>
            </div>

            <div className="winners-list">
              <div className="winners-item">
                <div className="winners-item__row">
                  Дата
                </div>
                <div className="winners-item__row">
                  E-mail
                </div>
                <div className="winners-item__row">
                  Приз
                </div>
              </div>

              <div className="winners-item winners-item--active">
                <div className="winners-item__row">
                  08.12.2023
                </div>
                <div className="winners-item__row">
                  aizhXXXXnurbol@mail.ru
                </div>
                <div className="winners-item__row">
                  100 000 тг
                </div>
              </div>

              <div className="winners-item">
                <div className="winners-item__row">
                  08.12.2023
                </div>
                <div className="winners-item__row">
                  aizhXXXXnurbol@mail.ru
                </div>
                <div className="winners-item__row">
                  100 000 тг
                </div>
              </div>

              <div className="winners-item winners-item--active">
                <div className="winners-item__row">
                  08.12.2023
                </div>
                <div className="winners-item__row">
                  aizhXXXXnurbol@mail.ru
                </div>
                <div className="winners-item__row">
                  100 000 тг
                </div>
              </div>

              <div className="winners-item">
                <div className="winners-item__row">
                  08.12.2023
                </div>
                <div className="winners-item__row">
                  aizhXXXXnurbol@mail.ru
                </div>
                <div className="winners-item__row">
                  100 000 тг
                </div>
              </div>

              <div className="winners-item winners-item--active">
                <div className="winners-item__row">
                  08.12.2023
                </div>
                <div className="winners-item__row">
                  aizhXXXXnurbol@mail.ru
                </div>
                <div className="winners-item__row">
                  100 000 тг
                </div>
              </div>

              <div className="winners-item">
                <div className="winners-item__row">
                  08.12.2023
                </div>
                <div className="winners-item__row">
                  aizhXXXXnurbol@mail.ru
                </div>
                <div className="winners-item__row">
                  100 000 тг
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className="section questions__container">
        <div className="container">
          <div className="questions">
            <h2 className="title title-h2 title-desc questions__title">
              Вопросы и ответы
            </h2>
            <div className="questions__desc title-desc__desc">
              Найди свои вопрос среди часто задаваемых
            </div>
            <div className="questions-list">
              <Accordion title="Где можно ознакомиться с полными правилами игры?" content="First Accordion content" />
              <Accordion title="Какие сроки проведения Акции?" content="First Accordion content" />

              <Accordion title="Что необходимо сделать, чтобы принять участие в Акции?" content="First Accordion content" />
              <Accordion title="Какие призы я могу выиграть?" content="First Accordion content" />

              <Accordion title="Как я узнаю, что выиграл приз по Акции?" content="First Accordion content" />
              <Accordion title="Кто оплачивает стоимость доставки призов до победителя Акции?" content="First Accordion content" />
              <Accordion title="Не получил/а на почту новый пароль после сброса. Как быть?" content="First Accordion content" />
            </div>
            <div className="answer-btn__container">
              <div className="answer-btn">
                Остались вопросы? Напишите
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
