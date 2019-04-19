import React from 'react';
import './splash.css'

import Aux from '../hoc/Auxilary/Auxilary';

const Splash = props => (
    <Aux styling="splash-main">
        <div className="splash-chazing">
            <p className="splash-chazing_p">CHAZING</p>
        </div>
        <div className="splash-dreams">
            <p className="splash-dreams_p">DREAMS</p>
        </div>
        <div className="full-name">
            <p className="full-name_p">Charith Rathnayake</p>
        </div>
        <div className="scroll-bait">
            <p className="scroll-bait_p"><i class="fas fa-angle-double-down"></i></p>
        </div>
    </Aux>
)

export default React.memo(Splash)