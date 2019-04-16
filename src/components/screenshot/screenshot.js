import React from 'react';
import './screenshot.css';

import Aux from '../hoc/Auxilary/Auxilary';

const Screenshot = props => (
    <Aux styling="screenshot-main">
        <div
            className="thumb"
            style={{ backgroundImage: `url(${props.url})` }}
        >

        </div>
    </Aux>
)

export default Screenshot