import { useState } from 'react'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('about')

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <>
      <header>
        <h1>ДонTour</h1>
        <nav>
          <ul>
            <li>
              <a 
                href="#about" 
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => handleLinkClick('about')}
              >
                О приложении
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className={activeLink === 'team' ? 'active' : ''}
                onClick={() => handleLinkClick('team')}
              >
                О нас
              </a>
            </li>
            <li>
              <a 
                href="#contacts" 
                className={activeLink === 'contacts' ? 'active' : ''}
                onClick={() => handleLinkClick('contacts')}
              >
                Контакты
              </a>
            </li>
            <li>
              <a 
                href="#download" 
                className={activeLink === 'download' ? 'active' : ''}
                onClick={() => handleLinkClick('download')}
              >
                Скачать
              </a>
            </li>
          </ul>
        </nav>
        <img className="logo" src="/rndlogo13.png" alt="Логотип" />
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content-message">
              <h2>Добро пожаловать на ЮГ</h2>
            </div>
          </div>
          
          <div className="hero-first-screen">
            <img className="main-img" src="./Group 146.png" alt="Главное изображение" />
            <div className="hero-first-screen-text">
              <h3>
                Откройте для себя <span className="blue-text">Ростовскую</span>{" "}
                <span className="red-text">область</span>
              </h3>
              <p>
                Планируйте отдых легко, быстро и с удовольствием. Ваши лучшие
                путешествия начинаются здесь!{" "}
              </p>
            </div>
          </div>

          <div className="hero-second-screen">
            <div className="hero-second-screen-text">
              <h3>Путешествуйте в своём стиле</h3>
              <p>Ваш надежный попутчик, который объединяет все элементы путешествия — от мероприятий и отелей до транспорта — в ваш идеальный маршрут.</p>
            </div>
            <img className="second-img" src="./Group 147.png" alt="Второе изображение" />
          </div>

          <div className="hero-third-screen">
            <img className="third-img" src="./348391_original 1.png" alt="Третье изображение" />
            <div className="hero-third-screen-text">
              <h3>Ваш идеальный маршрут уже готов</h3>
              <p>Вам нужно только указать свои пожелания, а готовый план поездки появится автоматически.</p>
            </div>
          </div>

          <div className="hero-fourth-screen">
            <div className="cube-container">
              <div className="cube-loader">
                <div className="cube-top"></div>
                <div className="cube-wrapper">
                  <span style={{ "--i": 0 }} className="cube-span"></span>
                  <span style={{ "--i": 1 }} className="cube-span"></span>
                  <span style={{ "--i": 2 }} className="cube-span"></span>
                  <span style={{ "--i": 3 }} className="cube-span"></span>
                </div>
              </div>
            </div>
            <div className="hero-fourth-screen-text">
              <h3>Инновационные технологии</h3>
              <p>Мы используем передовые технологии для создания уникального опыта путешествий.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="scrolling-gallery">
            <div className="scrolling-track">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={`first-${num}`} className="scrolling-item">
                  <img src={`sight${num}.jpg`} alt={`Достопримечательность ${num}`} />
                </div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={`second-${num}`} className="scrolling-item">
                  <img src={`sight${num}.jpg`} alt={`Достопримечательность ${num}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title">О нас</h2>
            <p className="about-text">
              Дон Tour - это приложение-помощник для путешественников в планировании своих персонализированных маршрутов по местам, мероприятиям и достопримечательностям Ростовской области.
            </p>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="container">
          <div className="download-content">
            <h3>Скачайте приложение сейчас</h3>
            <p>Начните свое путешествие по Ростовской области прямо сейчас</p>
            <button className="btn">Скачать</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="contacts-section">
              <h3 className="footer-title">Контакты:</h3>
              <div className="contact-links">
                <a href="mailto:formali@mail.com" className="contact-link">formali@mail.com</a>
                <a href="tel:+79999999999" className="contact-link">+7 (999) 999-99-99</a>
                <a href="https://vk.com/dontour" className="contact-link">vk.com/dontour</a>
              </div>
            </div>

            <div className="description-section">
              <p className="footer-description">
                Планируйте свои уникальные маршруты по достопримечательностям Ростовской области вместе с Дон Том.
              </p>
            </div>

            <div className="links-section">
              <a href="#" className="footer-link">Доступно в RuStore</a>
              <a href="#" className="footer-link">Подписка PRO</a>
              <a href="#" className="footer-link">Пользовательское соглашение</a>
              <a href="#" className="footer-link">Сообщить об ошибке</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App