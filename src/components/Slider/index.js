import React from 'react';
import { Gallery } from 'devextreme-react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './Slider.scss';

class App extends React.Component {
  render() {
    const data = this.props.data;
    const imgWithPath = data.map(img => {
      return require("./img/" + img);
    })
    return (
        <div className="slider">
          <div className="slider__container">
            <Gallery
              id="gallery"
              dataSource={imgWithPath}
              height={'1024'}
              width={'100%'}
              slideshowDelay={11000}
              loop={true}
              showNavButtons={false}
              showIndicator = {true}
              />
          </div>
        </div>
    );
  }

}

export default App;
