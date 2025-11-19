import { useEffect, useRef, useState } from 'react';
import './App.css';
import { convertToAudio, generateCaption, translate } from './models/api';

export const App = () => {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('No caption')
  const [captionPTBR, setCaptionPTBR] = useState('Sem legenda')
  const [audioSrc, setAudioSrc] = useState(null)

  const captionAudio = useRef()

  async function addCaption() {
    setCaption('Generating caption...')
    const caption = await generateCaption(imgSrc)
    setCaption(caption[0]['generated_text'])

    setCaptionPTBR('Traduzindo legenda para pt-BR...')
    const translatedCaption = await translate(caption)
    setCaptionPTBR(translatedCaption[0]['translation_text'])

    const audioEndpoint = await convertToAudio(translatedCaption)
    const newAudioSrc = "http://localhost:5000/" + audioEndpoint[0]['url']
    setAudioSrc(newAudioSrc)
  }

  useEffect(() => {
    if (captionAudio.current && audioSrc) {
      captionAudio.current.pause()
      captionAudio.current.load()
      captionAudio.current.play()
    }
  }, [audioSrc])

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
        <audio controls ref={captionAudio}>
          <source src={audioSrc}></source>
        </audio>
      </div>
    </>
  )
}
