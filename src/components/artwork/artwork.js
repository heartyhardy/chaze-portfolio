import React from 'react';
import './artwork.css';

const Artwork = props => (
    <div
        className={props.cellStyle}
        caption={props.caption}
        url={props.url}
    >
    </div>
)

export default Artwork