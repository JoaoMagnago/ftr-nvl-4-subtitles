import { useState } from 'react';
import './App.css';
import { generateCaption, translate } from './models/api';

export const App = () => {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('No caption')
  const [captionPTBR, setCaptionPTBR] = useState('Sem legenda')

  async function addCaption() {
    setCaption('Generating caption...')
    const caption = await generateCaption(imgSrc)
    setCaption(caption[0]['generated_text'])

    setCaptionPTBR('Traduzindo legenda para pt-BR...')
    const translatedCaption = await translate(caption)
    setCaptionPTBR(translatedCaption[0]['translation_text'])

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
        <span>{captionPTBR}</span>
      </div>
    </>
  )
}
