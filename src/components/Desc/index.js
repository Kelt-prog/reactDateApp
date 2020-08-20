import React, { Component } from 'react';
import  './Desc.scss';

class Description extends Component {
    render() {
        const { title } = this.props.data;
        return (
            <div className='container'>
                {/* I think it's ok to use "dangerouslySetInnerHTML" in demo project */}
                {/* For production there's many libraries to purify content */}
                <div className='title' dangerouslySetInnerHTML={{ __html: title }} />
            </div>
        );
    }
}

export default Description;