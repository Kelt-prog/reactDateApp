import React, { Component } from 'react';
import Slider from './components/Slider';
import Description from './components/Desc';
import Features from './components/Features';
import Prices from './components/Prices';
import Footer from './components/Footer';
import Modal from './components/Modal';
import SubscribeForm from './components/SubscribeForm';

import './App.scss';

class App extends Component {
  modalProps = {
    triggerText: "Start Now"
  };
  modalContent = (
    <SubscribeForm />
  );

  render() {
    const modal = () => (
      <Modal
        modalProps={this.modalProps}
        modalContent={this.modalContent}
      />
    );

    return (
      <React.Fragment>
        <Slider />
        <Description />
        <Features />
        <Prices childModal={modal} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;