import React, { useRef, useEffect, useState } from 'react';
import './code-cutscene.css';

import Aux from '../hoc/Auxilary/Auxilary';
import isInView from '../../util/isinview';

const CodeCutscene = props => {

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
        <Aux styling="code-cutscene-main">

            <hr ref={elCodeCut} style={{opacity:0}}/>

            <div
                className="code-cutscene-projects"
                style={{ animationPlayState: runCutScene ? running : paused }}
            >
                <p className="code-cutscene-projects_p">Projects</p>
            </div>

        </Aux>
    )
}

export default CodeCutscene