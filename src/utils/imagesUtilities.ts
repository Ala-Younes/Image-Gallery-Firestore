enum ImageType {
  JPEG = "jpeg",
  PNG = "png",
  GIF = "gif",
  BMP = "bmp",
  // ......
}

const supportedImageTypes: ImageType[] = [
  ImageType.JPEG,
  ImageType.PNG,
  ImageType.GIF,
  ImageType.BMP,
];

/**
 * Get the image extension from a File object.
 * @param file - The File object representing the image.
 * @returns The image extension (ImageType) or null if the extension is not supported.
 */
const getImageExtension = (file: File): ImageType | null => {
  const mimeTypeParts = file.type.split("/");
  if (mimeTypeParts.length === 2 && mimeTypeParts[0] === "image") {
    return mimeTypeParts[1] as ImageType;
  }
  return null;
};

const isImageExtensionSupported = (imageType: ImageType) => {
  return supportedImageTypes.includes(imageType);
};

const ImageUtils = {
  getImageExtension,
  isImageExtensionSupported,
};

export default ImageUtils;
