import { Component } from 'react';

import fetchPixabayAPI from '../../services/pixabayAPI';
import ImageGallery from '../ImageGallery';

class ImageFinder extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const currentQuery = this.props.query;
    const currentPage = this.props.page;

    if (prevQuery !== currentQuery) {
      try {
        const images = await fetchPixabayAPI(currentQuery, currentPage);
        if (images.length === 0) {
          const error = new Error('No images for this query');
          this.setState({ error, status: 'rejected' });
        } else {
          this.setState({ images, status: 'resolved' });
        }
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  render() {
    if (this.state.status === 'idle') {
      return <div>Enter search query</div>;
    }

    if (this.state.status === 'rejected') {
      return <div>{this.state.error.message}</div>;
    }

    if (this.state.status === 'resolved') {
      return <ImageGallery images={this.state.images} />;
    }
  }
}

export default ImageFinder;
