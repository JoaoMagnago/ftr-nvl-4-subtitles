import { useState } from 'react';
import './App.css';
import generateCaption from './models/api';

export const App = () => {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('<Caption>')

  function addCaption() {
    const caption = generateCaption(imgSrc)

    setCaption(caption)
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className='url-form'>
        <input onChange={(e) => setImgSrc(e.target.value)} />
        <button onClick={addCaption}>Generate</button>
      </div>
      <div className='captioned-image'>
        <img src={imgSrc} height={200} style={{ marginBottom: '10px' }} />
        <span>{caption}</span>
      </div>
    </>
  )
}
