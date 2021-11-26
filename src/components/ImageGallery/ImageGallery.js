import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

function ImageGallery({ images, onClick }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            url={webformatURL}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.protoType = {
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};

export default ImageGallery;
