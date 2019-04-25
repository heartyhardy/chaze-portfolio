import React, {useState, useRef, useEffect} from 'react';
import './art-cutscene.css';

import Aux from '../hoc/Auxilary/Auxilary';
import isInView from '../../util/isinview';

const ArtCutscene = props => {

    //Play states
    const running = "running";
    const paused = "paused";

    // Refs
    const elCodeCut = useRef(null);

    // Element isInView state
    const [runCutScene, setCutScene] = useState(false);

    useEffect(() => {
        isInView(elCodeCut, setCutScene);
    }, [props.scrollPos]);

    return (
        <Aux styling="art-cutscene-main">

            <hr ref={elCodeCut} style={{ opacity: 0 }} />

            <div
             className="art-cutscene-artwork"
             style={{ animationPlayState: runCutScene ? running : paused }}
             >
                <p className="art-cutscene-artwork_p">Art</p>
            </div>

        </Aux>
    )
}

export default ArtCutscene