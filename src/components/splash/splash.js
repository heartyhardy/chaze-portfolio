import React from 'react';
import Aux from '../hoc/Auxilary/Auxilary';
import './splash.css'

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
    </Aux>
)

export default Splash