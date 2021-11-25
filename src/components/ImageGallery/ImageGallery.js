import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} url={image.webformatURL} />;
      })}
    </ul>
  );
}

export default ImageGallery;
