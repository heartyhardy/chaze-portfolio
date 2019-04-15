import React from 'react';
import './chip.css';

import Aux from '../hoc/Auxilary/Auxilary';

const Chip = props => (
    <Aux styling="chip-main">
        <p className="chip-text">{props.text}</p>
    </Aux>
)

export default Chip