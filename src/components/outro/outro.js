import React from 'react';
import './outro.css';
import smservice from '../../service/social-media-service';

import Aux from '../hoc/Auxilary/Auxilary';
import SocialMediaFab from '../social-media-fab/social-media-fab';

const Outro = props => (
    <Aux styling="outro-main">
        <div className="outro-connect">
            <p className="outro-connect_p">Let's connect</p>
        </div>
        <div className="outro-inner">
            {
                smservice.fetch().map((smlink, index) =>
                    <SocialMediaFab
                        key={`smlink${index}`}
                        faIcon={smlink.faIcon}
                        link={smlink.link}
                    />
                )
            }
        </div>
    </Aux>
)

export default Outro