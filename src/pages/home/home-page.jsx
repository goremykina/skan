import woman from "../../icons/woman.png";
import time from "../../icons/time.png";
import search from "../../icons/search.png";
import privacy from "../../icons/privacy.png";
import group from "../../icons/group.png";
import Lightbulb from "../../icons/lightbulb.svg";
import Darts from "../../icons/darts.svg";
import Computer from "../../icons/computer.svg";
import ButtonLink from "../../components/button/button-link.jsx";
import Slider from "../../components/slider/slider.jsx";

const CARDS = [
    {
        src: time,
        alt: 'time',
        text: 'Высокая и оперативная скорость обработки заявки',
        id: 1
    },

    {
        src: search,
        alt: 'search',
        text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
        id: 2
    },

    {
        src: privacy,
        alt: 'privacy',
        text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
        id: 3
    }
];

export default function HomePage() {
    return (
        <div className='container'>
            <div className='data_request_content'>
                <div className='data_request_description'>
                    <h1 className='data_request_header'>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН</h1>
                    <p className='mb-70'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <ButtonLink className='data_request_button' link='/search' text='Запросить данные'></ButtonLink>
                </div>
                <img src={woman} alt='woman' />
            </div>
            <div>
                <h2 className='header_h2'>ПОЧЕМУ ИМЕННО МЫ</h2>
                <Slider cards={CARDS} maxVisible={3} />
            </div>
            <img className='man_image' src={group} alt='group image' />
            <div>
                <h2 className='header_h2'>НАШИ ТАРИФЫ</h2>

                <div className='rate_cards_container'>
                    <div className='rate_card begginer'>
                        <div className='header_rate header_begginer'>
                            <div>
                                <h3 className='header_h3'>Beginner</h3>
                                <p className='m_0'>Для небольшого исследования</p>
                            </div>
                            <Lightbulb />
                        </div>
                        <div className='payment'>
                            <div className='price'>
                                <h3 className='header_h3'>799 ₽</h3>
                                <h4 className='header_h4'>1200 ₽</h4>
                            </div>
                            <p className='m_0'>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            <div className='list_wrapper'>
                                <div>
                                    <h5 className='list'>В тариф входит:</h5>
                                    <ul>
                                        <li>Безлимитная история запросов</li>
                                        <li>Безопасная сделка</li>
                                        <li>Поддержка 24/7</li>
                                    </ul>
                                </div>
                                <div className='button_wrapper'>
                                    <ButtonLink text='Подробнее'></ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='rate_card pro'>
                        <div className='header_rate header_pro'>
                            <div>
                                <h3 className='header_h3'>Pro</h3>
                                <p className='m_0'>Для HR и фрилансеров</p>
                            </div>
                            <Darts />
                        </div>
                        <div className='payment'>
                            <div className='price'>
                                <h3 className='header_h3'>1 299 ₽</h3>
                                <h4 className='header_h4'>2 600 ₽</h4>
                            </div>
                            <p className='m_0'>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            <div className='list_wrapper'>
                                <div>
                                    <h5 className='list'>В тариф входит:</h5>
                                    <ul>
                                        <li>Все пункты тарифа Beginner</li>
                                        <li>Экспорт истории</li>
                                        <li>Рекомендации по приоритетам</li>
                                    </ul>
                                </div>
                                <div className='button_wrapper'>
                                    <ButtonLink text='Подробнее'></ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='rate_card business'>
                        <div className='header_rate header_business'>
                            <div>
                                <h3 className='header_h3'>Business</h3>
                                <p className='m_0'>Для корпоративных клиентов</p>
                            </div>
                            <Computer />
                        </div>
                        <div className='payment'>
                            <div className='price'>
                                <h3 className='header_h3'>2 379 ₽</h3>
                                <h4 className='header_h4'>3 700 ₽</h4>
                            </div>
                            <p className='m_0'>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            <div className='list_wrapper'>
                                <div>
                                    <h5 className='list'>В тариф входит:</h5>
                                    <ul>
                                        <li>Все пункты тарифа Pro</li>
                                        <li>ББезлимитное количество запросов</li>
                                        <li>Приоритетная поддержка</li>
                                    </ul>
                                </div>
                                <div className='button_wrapper'>
                                    <ButtonLink text='Подробнее'></ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}