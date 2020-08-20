import React, { Component } from 'react';
import  './Prices.scss';

class Features extends Component {
    render() {
        const { childModal } = this.props;
        const prices  = this.props.data;
        return (
            <div className='container'>
                <div className='price'>
                    {prices.map((price) => (
                        <div key={price.id} className='price__item'>
                            <div className='price__amount'>
                                <div className='price__num'>{price.amount}</div>
                                <div className='price__period'>{price.period}</div>
                            </div>
                        <div className='price__title'>{price.title}</div>
                            {childModal && childModal()}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Features;