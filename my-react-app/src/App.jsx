import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('about')
  const [visibleSections, setVisibleSections] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs для секций навигации
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const downloadRef = useRef(null)
  const contactsRef = useRef(null)

  const handleLinkClick = (link, event) => {
    event.preventDefault()
    setActiveLink(link)
    setIsMenuOpen(false) // Закрываем меню при клике на ссылку
    
    // Прокрутка к соответствующей секции
    switch(link) {
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'team':
        teamRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'download':
        downloadRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contacts':
        contactsRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Анимация появления блоков при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.className])
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Наблюдаем за всеми секциями
    const sections = [
      '.hero-first-screen',
      '.hero-second-screen', 
      '.hero-third-screen',
      '.hero-fourth-screen',
      '.about-section',
      '.download-section',
      '.footer'
    ]

    sections.forEach(selector => {
      const element = document.querySelector(selector)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach(selector => {
        const element = document.querySelector(selector)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const isVisible = (sectionClass) => visibleSections.includes(sectionClass)

  return (
    <>
      <header>
        <h1>ДонTour</h1>
        <nav className="desktop-nav">
          <ul>
            <li>
              <a 
                href="#about" 
                className={activeLink === 'about' ? 'active' : ''}
                onClick={(e) => handleLinkClick('about', e)}
              >
                О приложении
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className={activeLink === 'team' ? 'active' : ''}
                onClick={(e) => handleLinkClick('team', e)}
              >
                О нас
              </a>
            </li>
            <li>
              <a 
                href="#download" 
                className={activeLink === 'download' ? 'active' : ''}
                onClick={(e) => handleLinkClick('download', e)}
              >
                Скачать
              </a>
            </li>
            <li>
              <a 
                href="#contacts" 
                className={activeLink === 'contacts' ? 'active' : ''}
                onClick={(e) => handleLinkClick('contacts', e)}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        {/* Toggle меню для мобильных */}
<div className="mobile-menu-container">
  <div className={`toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  
  {/* Overlay для закрытия меню */}
  <div 
    className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}
    onClick={toggleMenu}
  />
  
  {/* Мобильное меню */}
  <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
    <ul>
      <li>
        <a 
          href="#about" 
          className={activeLink === 'about' ? 'active' : ''}
          onClick={(e) => handleLinkClick('about', e)}
        >
          О приложении
        </a>
      </li>
      <li>
        <a 
          href="#team" 
          className={activeLink === 'team' ? 'active' : ''}
          onClick={(e) => handleLinkClick('team', e)}
        >
          О нас
        </a>
      </li>
      <li>
        <a 
          href="#download" 
          className={activeLink === 'download' ? 'active' : ''}
          onClick={(e) => handleLinkClick('download', e)}
        >
          Скачать
        </a>
      </li>
      <li>
        <a 
          href="#contacts" 
          className={activeLink === 'contacts' ? 'active' : ''}
          onClick={(e) => handleLinkClick('contacts', e)}
        >
          Контакты
        </a>
      </li>
    </ul>
  </div>
</div>

        <img className="logo" src="/rndlogo13.png" alt="Логотип" />
      </header>

      <section className="hero">
        <div className="container">
          {/* Hero First Screen - О приложении */}
          <div 
            ref={aboutRef}
            className={`hero-first-screen ${isVisible('hero-first-screen') ? 'visible' : ''}`}
          >
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

          {/* Hero Second Screen */}
          <div className={`hero-second-screen ${isVisible('hero-second-screen') ? 'visible' : ''}`}>
            <div className="hero-second-screen-text">
              <h3>Путешествуйте в своём стиле</h3>
              <p>Ваш надежный попутчик, который объединяет все элементы путешествия — от мероприятий и отелей до транспорта — в ваш идеальный маршрут.</p>
            </div>
            <img className="second-img" src="./Group 135.png" alt="Второе изображение" />
          </div>

          {/* Hero Third Screen */}
          <div className={`hero-third-screen ${isVisible('hero-third-screen') ? 'visible' : ''}`}>
            <img className="third-img" src="./348391_original 1.png" alt="Третье изображение" />
            <div className="hero-third-screen-text">
              <h3>Ваш лучший маршрут уже готов</h3>
              <p>Вам нужно только указать свои пожелания, а готовый план поездки появится автоматически.</p>
            </div>
          </div>

          {/* Hero Fourth Screen */}
          <div className={`hero-fourth-screen ${isVisible('hero-fourth-screen') ? 'visible' : ''}`}>
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

      {/* Секция "О нас" */}
      <section 
        ref={teamRef}
        className={`about-section ${isVisible('about-section') ? 'visible' : ''}`}
      >
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

      {/* Секция "Скачать" */}
      <section 
        ref={downloadRef}
        className={`download-section ${isVisible('download-section') ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="download-content">
            <h3>Скачайте приложение сейчас</h3>
            <a href="https://disk.yandex.ru/d/nPplAfChpHPyfg" download>
            <button className="btn">Скачать</button>
            </a>
          </div>
        </div>
      </section>

      {/* Футер "Контакты" */}
      <footer 
        ref={contactsRef}
        className={`footer ${isVisible('footer') ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="footer-container">
            <div className="contacts-section">
              <h3 className="footer-title">Контакты:</h3>
              <div className="contact-links">
                <a href="mailto:vomatixincorporated@gmail.com" className="contact-link">mailto:vomatixincorporated@gmail.com</a>
                <a href="https://vk.com/vomatix" className="contact-link">vk.com/vomatix</a>
              </div>
            </div>

            <div className="description-section">
              <p className="footer-description">
                Планируйте свои уникальные маршруты по достопримечательностям Ростовской области вместе с Дон Том.
              </p>
            </div>

            <div className="links-section">
              <a href="https://disk.yandex.ru/i/HjAUltSqHo17aw" className="footer-link">Политика конфиденциальности</a>
              <a href="https://disk.yandex.ru/i/xuYDoE7owiDPlg" className="footer-link">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App