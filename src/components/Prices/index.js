import React, { Component } from 'react';
import  './Prices.scss';

class Features extends Component {

    render() {
        const { childModal } = this.props;
        return (
            <div className="container">
                <div className="price">
                    <div className="price__item">
                        <div className="price__amount">
                            <div className="price__num">
                                30$
                            </div>
                            <div className="price__period">
                                per month
                            </div>                        
                        </div>
                        <div className="price__title">
                            Free trial 2 days Whole content
                        </div>
                        { childModal && childModal() }
                    </div>
                    <div className="price__item">
                        <div className="price__amount">
                            <div className="price__num">
                                10$
                            </div>
                            <div className="price__period">
                                per month
                            </div>                        
                        </div>
                        <div className="price__title">
                              Free trial 1 day Solo shows
                        </div>
                        { childModal && childModal() }
                    </div>
                    <div className="price__item">
                        <div className="price__amount">
                            <div className="price__num">
                                5$
                            </div>
                            <div className="price__period">
                                per month
                            </div>                        
                        </div>
                        <div className="price__title">
                            Premium Shows
                        </div>
                        { childModal && childModal() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;