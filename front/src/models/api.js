import ImageCaptioner from "./ImageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc)
}

async function translate(captionENG) {
  console.log(captionENG)
  return [{ 'translated_text': 'Legenda traduzida' }]
}

export { generateCaption, translate };
