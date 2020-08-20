import React, { Component } from 'react';
import Slider from './components/Slider';
import Description from './components/Desc';
import Features from './components/Features';
import Prices from './components/Prices';
import Footer from './components/Footer';
import Modal from './components/Modal';
import SubscribeForm from './components/SubscribeForm';
import jsonData from "./info.json";

class App extends Component {
  modalProps = {
    triggerText: "Start Now"
  };
  modalContent = (
    <SubscribeForm />
  );

  render() {
    const { slider } = jsonData;
    const { description } = jsonData;
    const { features } = jsonData;
    const { prices } = jsonData;
    const modal = () => (
      <Modal
        modalProps={this.modalProps}
        modalContent={this.modalContent}
      />
    );

    return (
      <React.Fragment>
        <Slider data={slider} />
        <Description data={description} />
        <Features data={features} />
        <Prices data={prices} childModal={modal} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;