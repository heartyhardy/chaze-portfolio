import React from 'react';
import './splash.css'

import Aux from '../hoc/Auxilary/Auxilary';

const Splash = props => (
    <Aux styling="splash-main">
        <div className="splash-chazing">
            <p className="splash-chazing_p">CHARITH</p>
        </div>
        <div className="splash-dreams">
            <p className="splash-dreams_p">RATHNAYAKE</p>
        </div>
        <div className="full-name">
            <p className="full-name_p">Full stack web developer</p>
        </div>
        <div className="scroll-bait">
            <p className="scroll-bait_p"><i className="fas fa-angle-double-down"></i></p>
        </div>
    </Aux>
)

export default React.memo(Splash)