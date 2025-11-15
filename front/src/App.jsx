import { useState } from 'react';
import './App.css';

export const App = () => {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('<Caption>')

  function generateCaption() {
    setCaption('Novo caption!')
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className='url-form'>
        <input onChange={(e) => setImgSrc(e.target.value)} />
        <button onClick={generateCaption}>Generate</button>
      </div>
      <div className='captioned-image'>
        <img src={imgSrc} height={200} style={{ marginBottom: '10px' }} />
        <span>{caption}</span>
      </div>
    </>
  )
}
