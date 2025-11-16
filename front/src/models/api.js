import ImageCaptioner from "./ImageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc)
}

async function translate(captionENG) {
  return fetch('http://localhost:3000/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'text': captionENG })
  }).then(res => res.json())
}

export { generateCaption, translate };
