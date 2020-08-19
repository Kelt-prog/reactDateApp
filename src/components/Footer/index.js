import React, { Component } from 'react';
import  './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <div className="footer__text">
                        2257 – All models featured herein were at least<br/>18 years of age at the time of photography. 
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;