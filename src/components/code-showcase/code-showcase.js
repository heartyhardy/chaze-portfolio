import React from 'react';
import './code-showcase.css';

import Aux from '../hoc/Auxilary/Auxilary';
import Chip from '../chip/chip';

const CodeShowcase = props => {
    return (
        <Aux styling="codeshowcase-main">
            <div className="showcase-details">
                <p className="showcase-heading">{props.heading}</p>
                <a href={props.git}><i className="fab fa-github git-icon"></i></a>
                <p className="showcase-description">{props.description}</p>
                <div className="showcase-technologies">
                    {props.techstack.map((tech, index) => <Chip key={index} text={tech} />)}
                </div>
            </div>
            <div className="showcase-screenshots">
                <p>Thumbs of screenshots</p>
            </div>
        </Aux>
    )
}

export default CodeShowcase