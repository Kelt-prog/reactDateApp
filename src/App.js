import React, { Component } from 'react';
import Features from "./components/Features";
import Modal from "./components/Modal";
import Slider from './components/Slider';
import './App.scss';

class App extends Component {
  modalProps = {
    triggerText: "Launch the Modal!"
  };
  modalContent = (
    <React.Fragment>
      <p>
        Press <code>Esc</code> or click Outside the Modal to exit.
      </p>
      <p>
        Pressing Return also exits the Modal if you haven't changed the focus!
      </p>
    </React.Fragment>
  );
  render() {
    return (
      <div className="App">
      <Features />
      {/* <Slider /> */}
      <Modal modalProps={this.modalProps} modalContent={this.modalContent} />

      </div>
    );
  }
}

export default App;