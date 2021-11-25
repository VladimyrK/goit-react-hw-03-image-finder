import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageFinder from './components/ImageFinder';
import './App.css';

class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageFinder query={this.state.query} />
        <ToastContainer autoClose={3000} position="top-center" />
      </div>
    );
  }
}

export default App;
