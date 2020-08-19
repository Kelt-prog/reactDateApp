import React, { Component } from 'react';
import  './Features.scss';
import { ReactComponent as Circle } from './img/circle.svg';
import { ReactComponent as Heart } from './img/heart.svg';
import { ReactComponent as Square } from './img/square.svg';

class Features extends Component {
    render() {
        return (
            <div className="container">
                <div className="features">
                    <div className="features__block">
                        <div className="features__icon">
                            <Square />
                        </div>
                        <div className="features__title">
                            Huge<br/>variety of<br/>content!
                        </div> 
                    </div>
                    <div className="features__block">
                        <div className="features__icon">
                            <Circle />
                        </div>
                        <div className="features__title">
                        Posted<br/>24hrs a day<br/>7 days a week!
                        </div> 
                    </div>
                    <div className="features__block">
                        <div className="features__icon">
                            <Heart />
                        </div>
                        <div className="features__title">
                            Most intimate<br/> moments of<br/>my life!
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;