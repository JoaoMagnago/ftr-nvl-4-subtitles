import ImageCaptioner from "./ImageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc)
}

async function translate(captionENG) {
  return fetch('http://localhost:3000/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'text': captionENG[0]['generated_text'] })
  }).then(res => res.json())
}

async function convertToAudio(captionPTBR) {
  return fetch('http://localhost:5000/text_to_audio', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'text': captionPTBR[0]['translation_text'] })
  }).then(res => res.json())
}

export { convertToAudio, generateCaption, translate };

