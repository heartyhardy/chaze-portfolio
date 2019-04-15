import React from 'react';
import './code-showcase.css';

import Aux from '../hoc/Auxilary/Auxilary';

const CodeShowcase = props => {
    return (
        <Aux styling="codeshowcase-main">
            <div className="showcase-details">
                <p className="showcase-heading">Heading</p>
                <p className="showcase-description">Game of Ur is a board game based on gameboards found during the excavations carried out by an archaeologist called, Leonard Woolley, at the ancient Sumerian city of Ur,inside the royal tombs</p>
                <div className="showcase-technologies">

                </div>
            </div>
            <div className="showcase-screenshots">
                <p>Screenshots go here</p>
            </div>
        </Aux>
    )
}

export default CodeShowcase