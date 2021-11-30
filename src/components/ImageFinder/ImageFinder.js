import { Component } from 'react';

import fetchPixabayAPI from '../../services/pixabayAPI';

import Preview from '../Preview';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import LargeImage from '../LargeImage';
import ButtonLoadMore from '../ButtonLoadMore';
import Spiner from '../Spiner';

const errorMessageOnStartQuery = 'No images for this query';
const errorMessageOnLoadMore = 'No more images for this query';

class ImageFinder extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: 'idle',
    onFetch: false,
    showModal: false,
    largeImgURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const currentQuery = this.props.query;
    const currentPage = this.props.page;

    if (prevQuery !== currentQuery) {
      this.setState({ images: [] });
      this.setState({ page: 1 });
      this.renderImages(currentQuery, currentPage, errorMessageOnStartQuery);
    }
  }

  onLoadMore = () => {
    this.setState(
      prev => ({
        page: prev.page + 1,
      }),
      async () => {
        await this.renderImages(
          this.props.query,
          this.state.page,
          errorMessageOnLoadMore,
        );
      },
    );
  };

  renderImages = async (currentQuery, currentPage, message) => {
    try {
      this.togleOnFetch();
      const images = await fetchPixabayAPI(currentQuery, currentPage);
      this.togleOnFetch();
      if (images.length === 0) {
        const error = new Error(message);
        this.setState({ error, status: 'rejected' });
      } else {
        this.setState(prev => ({
          images: [...prev.images, ...images],
          status: 'resolved',
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  };

  setLargeImgURL = (e, callback) => {
    this.setState(
      {
        largeImgURL: this.state.images.find(
          image => image.id === Number(e.target.id),
        ).largeImageURL,
      },
      callback,
    );
  };

  togleOnFetch = () => {
    this.setState(prev => ({
      onFetch: !prev.onFetch,
    }));
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { status, images, showModal, onFetch, largeImgURL } = this.state;

    if (status === 'idle') {
      return <Preview />;
    }

    if (status === 'rejected') {
      return <div>{this.state.error.message}</div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery
            images={images}
            onClick={e => {
              this.setLargeImgURL(e, this.togleModal);
            }}
          />

          {showModal && (
            <Modal onClose={this.togleModal}>
              <LargeImage url={largeImgURL} />
            </Modal>
          )}

          {onFetch && <Spiner />}

          <ButtonLoadMore onLoadMore={this.onLoadMore} />
        </>
      );
    }
  }
}

export default ImageFinder;
