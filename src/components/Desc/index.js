import React, { Component } from 'react';
import  './Desc.scss';

class Description extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">
                    Hey, I am Marce. You can find my work in a lot of places, but the only <span className="title__link">Premium Shows</span> I have is right here on FanCentro
                </div>
            </div>
        )
    }
}

export default Description;