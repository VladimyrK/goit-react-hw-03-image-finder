import { Component } from 'react';
import Loader from 'react-loader-spinner';

import fetchPixabayAPI from '../../services/pixabayAPI';

import Preview from '../Preview';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import LargeImage from '../LargeImage';
import ButtonLoadMore from '../ButtonLoadMore';

class ImageFinder extends Component {
  state = {
    images: null,
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
      this.setState({ page: 1 });
      this.renderImages(currentQuery, currentPage);
    }
  }

  onLoadMore = () => {
    this.setState(
      prev => ({
        page: prev.page + 1,
      }),
      async () => {
        await this.renderMoreImages();
      },
    );
  };

  renderImages = async (currentQuery, currentPage) => {
    try {
      this.togleOnFetch();
      const images = await fetchPixabayAPI(currentQuery, currentPage);
      this.togleOnFetch();
      if (images.length === 0) {
        const error = new Error('No images for this query');
        this.setState({ error, status: 'rejected' });
      } else {
        this.setState({ images, status: 'resolved' });
      }
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  };

  renderMoreImages = async () => {
    try {
      this.togleOnFetch();
      const images = await fetchPixabayAPI(this.props.query, this.state.page);
      this.togleOnFetch();
      if (images.length === 0) {
        const error = new Error('No more images for this query');
        this.setState({ error, status: 'rejected' });
      } else {
        this.setState(prev => ({
          images: [...prev.images, ...images],
        }));
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
    if (this.state.status === 'idle') {
      return <Preview />;
    }

    if (this.state.status === 'rejected') {
      return <div>{this.state.error.message}</div>;
    }

    if (this.state.status === 'resolved') {
      return (
        <>
          <ImageGallery
            images={this.state.images}
            onClick={e => {
              this.setLargeImgURL(e, this.togleModal);
            }}
          />

          {this.state.showModal && (
            <Modal onClose={this.togleModal}>
              <LargeImage url={this.state.largeImgURL} />
            </Modal>
          )}

          {this.state.onFetch && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}

          <ButtonLoadMore onLoadMore={this.onLoadMore} />
        </>
      );
    }
  }
}

export default ImageFinder;
