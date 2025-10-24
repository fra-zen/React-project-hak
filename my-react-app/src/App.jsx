import { useState } from 'react'
import './App.css' // Импорт стилей
import '../src/index.css' // Импорт глобальных стилей

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <header>
        <h1>ДонTour</h1>
        <nav>
          <ul>
            <li><a href="#about">О приложении</a></li>
            <li><a href="#team">О нас</a></li>
            <li><a href="#contacts">Контакты</a></li>
            <li><a href="#download">Скачать</a></li>
          </ul>
        </nav>
        <img className="logo" src="/rndlogo13.png" alt="Логотип" />
      </header>
    </>
  )
}

export default App