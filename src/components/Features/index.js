import React, { Component } from 'react';
import  './Features.scss';

class Features extends Component {
    render() {
        const features  = this.props.data;
        return (
            <div className='container'>
                <div className='features'>
                    {features.map((feature) => (
                        <div key={feature.id} className='features__block'>
                            <div className='features__icon'>
                                <img src={require("./img/" + feature.icon)} alt='feature icon' />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: feature.text }} className='features__title' />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Features;