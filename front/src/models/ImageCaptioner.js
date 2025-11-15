import { pipeline } from '@huggingface/transformers'

export default class ImageCaptioner {
  static captioner = null

  static async getCaptioner() {
    if (this.captioner === null) {
      this.captioner = await pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning')
    }
    return this.captioner
  }

  static generateCaption(imgSrc) {
    console.log(imgSrc)
    return "Legenda do modelo"
  }
}