import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

class Showcase extends React.Component {
    
    render() {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 30u$(xsmall) work-item" key={i}>
                    <a className="image fit thumb" href={obj.link} target="_blank">
                        <img src={obj.thumbnail} />
                    </a>
                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
}

export default Showcase
