import React, { useRef, useEffect, useState } from 'react';
import './traits.css';

import isInView from '../../util/isinview';
import Aux from '../hoc/Auxilary/Auxilary';

const Traits = props => {

    //Play states
    const running = "running";
    const paused = "paused";

    // Refs
    const elPassion = useRef(null);
    const elCreativity = useRef(null);
    const elGrit = useRef(null);
    const elEmpathy = useRef(null);
    const elLeadership = useRef(null);
    const elAdaptability = useRef(null);
    const elLearnability = useRef(null);

    // Element inView state
    const [runPassion, setPassion] = useState(false);
    const [runCreativity, setCreativity] = useState(false);
    const [runGrit, setGrit] = useState(false);
    const [runEmpathy, setEmpathy] = useState(false);
    const [runLeadership, setLeadership] = useState(false);
    const [runAdaptability, setAdaptability] = useState(false);
    const [runLearnability, setLearnability] = useState(false);

    useEffect(() => {
        isInView(elPassion, setPassion);
        isInView(elCreativity, setCreativity);
        isInView(elGrit, setGrit);
        isInView(elEmpathy, setEmpathy);
        isInView(elLeadership, setLeadership);
        isInView(elAdaptability, setAdaptability);
        isInView(elLearnability, setLearnability);
    }, [props.scrollPos])

    return (
        <Aux styling="traits-main">

            <p
                ref={elPassion}
                className="traits-passion align-center"
                style={{ animationPlayState: (runPassion) ? running : paused }}
            >
                PASSION
            </p>

            <p
                ref={elCreativity}
                className="traits-creativity align-center"
                style={{ animationPlayState: (runCreativity) ? running : paused }}
            >
                CREATIVITY
            </p>

            <p
                ref={elGrit}
                className="traits-grit align-center"
                style={{ animationPlayState: (runGrit) ? running : paused }}
            >
                GRIT
            </p>

            <p
                ref={elEmpathy}
                className="traits-empathy align-center"
                style={{ animationPlayState: (runEmpathy) ? running : paused }}
            >
                Empathy
             </p>

            <p
                ref={elLeadership}
                className="traits-leadership align-center"
                style={{ animationPlayState: (runLeadership) ? running : paused }}
            >
                LEADERSHIP
            </p>

            <p
                ref={elAdaptability}
                className="traits-adaptability align-center"
                style={{ animationPlayState: (runAdaptability) ? running : paused }}
            >
                Adaptability
             </p>

            <p
                ref={elLearnability}
                className="traits-learnability align-center"
                style={{ animationPlayState: (runLearnability) ? running : paused }}
            >
                LEARNABILITY
             </p>
             
            <p style={{ position: 'fixed', top: 0, left: '50px' }}>{props.scrollPos}</p>
        </Aux>
    )
}

export default Traits