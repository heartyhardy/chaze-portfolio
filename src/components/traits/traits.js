import React from 'react';
import './traits.css';

import Aux from '../hoc/Auxilary/Auxilary';

const Traits = props => (
    <Aux styling="traits-main">
        <p className="traits-passion align-center">PASSION</p>
        <p className="traits-creativity align-center">CREATIVITY</p>
        <p className="traits-grit align-center">GRIT</p>
        <p className="traits-learnability align-center">LEARNABILITY</p>
        <p className="traits-adaptability align-center">Adaptability</p>
        <p className="traits-leadership align-center">LEADERSHIP</p>
        <p className="traits-empathy align-center">Empathy</p>
    </Aux>
)

export default Traits