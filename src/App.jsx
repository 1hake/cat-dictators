import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { content } from './data/content'


function App() {
  const [count, setCount] = useState(0)
  // shuffle the content
  const shuffledContent = content.sort(() => 0.5 - Math.random())


  return (
    <div>
      <h1 style={{
        fontFamily: 'Sue Ellen Francisco',
        fontSize: '4rem',
        textAlign: 'center',
        color: 'black',
      }}>Les Chats Dictateurs.</h1>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
      }}>
        {shuffledContent.map((item, index) => (
          <div key={index}>
            <div style={{
              width: '200px',
              height: '200px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${item.src})`,
              margin: '20px',
            }} />
            <h1 style={
              {
                fontFamily: 'Sue Ellen Francisco',
                fontSize: '2em',
                color: 'black',
              }
            }>{item.title}</h1>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
