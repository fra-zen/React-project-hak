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
    </>
  )
}

export default App