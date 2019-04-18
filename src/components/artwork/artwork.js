import React from 'react';
import './artwork.css';

const Artwork = props => (
    <div
        className={props.cellStyle}
        style={{backgroundImage:`url(${props.url})`}}
    >
    </div>
)

export default Artwork