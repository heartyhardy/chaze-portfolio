import React, { useEffect, useRef, useState } from 'react';
import './outro.css';
import smservice from '../../service/social-media-service';
import isInView from '../../util/isinview';

import Aux from '../hoc/Auxilary/Auxilary';
import SocialMediaFab from '../social-media-fab/social-media-fab';


const Outro = props => {

    const running = "running";
    const paused = "paused";

    const elConnect = useRef(null);

    const [runConnect, setConnect] = useState(false);

    useEffect(() => {
        isInView(elConnect, setConnect);
    }, [props.scrollPos]);

    return (
        <Aux styling="outro-main">
            <div className="outro-connect">
                <p
                    ref={elConnect}
                    className="outro-connect_p"
                >
                    Let's connect
                 </p>
            </div>
            <div className="outro-inner" style={{ animationPlayState: (runConnect) ? running : paused }}>
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
}

export default Outro