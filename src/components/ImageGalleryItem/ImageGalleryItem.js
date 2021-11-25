function ImageGalleryItem({ url }) {
  return (
    <li className="gallery-item">
      <img src={url} alt="Result of your query" />
    </li>
  );
}

export default ImageGalleryItem;
