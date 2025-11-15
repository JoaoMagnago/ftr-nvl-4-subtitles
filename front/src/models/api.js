import ImageCaptioner from "./ImageCaptioner";

export default function generateCaption(imgSrc) {
  ImageCaptioner.getCaptioner()
  return ImageCaptioner.generateCaption(imgSrc)
}