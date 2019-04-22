import React from 'react';
import './social-media-fab.css';
import Aux from '../hoc/Auxilary/Auxilary';

const SocialMediaFab = props => (
    <Aux styling="media-fab-main">
        <a
            href={props.link}
            className="social-media-link">
            
            <i className={props.faIcon}></i>
        </a>
    </Aux>
)

export default SocialMediaFab