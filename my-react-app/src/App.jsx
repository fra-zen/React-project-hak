import { useState } from "react";
import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("about");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <header>
        <h1>ДонTour</h1>
        <nav>
          <ul>
            <li className={activeLink === "about" ? "active" : ""}>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => handleLinkClick("about")}
              >
                О приложении
              </a>
            </li>
            <li className={activeLink === "team" ? "active" : ""}>
              <a
                href="#team"
                className={activeLink === "team" ? "active" : ""}
                onClick={() => handleLinkClick("team")}
              >
                О нас
              </a>
            </li>
            <li className={activeLink === "contacts" ? "active" : ""}>
              <a
                href="#contacts"
                className={activeLink === "contacts" ? "active" : ""}
                onClick={() => handleLinkClick("contacts")}
              >
                Контакты
              </a>
            </li>
            <li className={activeLink === "download" ? "active" : ""}>
              <a
                href="#download"
                className={activeLink === "download" ? "active" : ""}
                onClick={() => handleLinkClick("download")}
              >
                Скачать
              </a>
            </li>
          </ul>
        </nav>
        <img className="logo" src="/rndlogo13.png" alt="Логотип" />
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-content-message">
            <h2>Добро пожаловать на ЮГ</h2>
          </div>
        </div>
        <div className="hero-first-screen">
          <img className="main-img" src="./Group 146.png" alt="" />
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
          <img className="second-img" src="./Group 147.png" alt="" />
        </div>

        <div className="hero-third-screen">
          <img className="third-img" src="./348391_original 1.png" alt="" />
          <div className="hero-third-screen-text">
            <h3>Ваш идеальный маршрут уже готов</h3>
            <p>Вам нужно только указать свои пожелания, а готовый план поездки появится автоматически.</p>
          </div>
        </div>

        {/* Новый раздел с кубом */}
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
            <p>Мы используем передовые технологии для создания уникального опыта путешествий. Вам нужно только указать свои пожелания, а готовый план поездки появится автоматически.</p>
          </div>
        </div>
        <div className="download-section">
          <div className="download-content">
            <h3>Скачайте приложение сейчас</h3>
            <p>Начните свое путешествие по Ростовской области прямо сейчас</p>
            <button className="btn">Скачать</button>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="container">
          <div class="scrolling-gallery">
            <div class="scrolling-track">
              <div class="scrolling-item">
                <img src="sight1.jpg" />
              </div>
              <div class="scrolling-item">
                <img src="sight2.jpg" />
              </div>
              <div class="scrolling-item">
                <img src="sight3.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight4.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight5.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight6.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight7.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight8.jpg" />
              </div>

              <div class="scrolling-item">
                <img src="sight1.jpg" />
              </div>
              <div class="scrolling-item">
                <img src="sight2.jpg" />
              </div>
              <div class="scrolling-item">
                <img src="sight3.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight4.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight5.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight6.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight7.jpg" />
              </div>
              <div className="scrolling-item">
                <img src="sight8.jpg" />
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2 class="section-title">О нас</h2>
            <p className="about-text">
              Дон Tour - это приложение-помощик для путешественников в планировании  своих персонализированных маршрутов по местам, мероприятиям и  достопримечательностям Ростовской области.
            </p>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div class="footer-container">
          <div class="contacts-section">
            <h3 class="footer-title">Контакты:</h3>
            <div class="contact-links">
              <a href="https://foomail.com" class="contact-link">formali@mail.com</a>
              <a href="tel:+79999999999" class="contact-link">+7 (999) 999-99-99</a>
              <a href="https://vk.com/dontour" class="contact-link">vk.com/dontour</a>
            </div>
          </div>

          <div class="description-section">
            <p class="footer-description">
              Планируйте свои уникальные маршруты по достопримечательностям Ростовской области вместе с Дон Том.
            </p>
          </div>

          <div class="links-section">
            <a href="#" class="footer-link">Доступно в RuStore</a>
            <a href="#" class="footer-link">Подписка PRO</a>
            <a href="#" class="footer-link">Пользовательское соглашение</a>
            <a href="#" class="footer-link">Сообщить об ошибке</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;