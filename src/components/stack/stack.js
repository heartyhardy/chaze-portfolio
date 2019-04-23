import React, {useEffect, useRef, useState} from 'react';
import './stack.css';
import isInView from '../../util/isinview';

const Stack = props => {

    const running = "running";
    const paused = "paused";

    const elIcon = useRef(null);
    
    const [runCode, setCode] = useState(false);

    useEffect(() => {
        isInView(elIcon, setCode);
    }, [props.scrollPos]);

    return (
        <div className="stack-main" style={{animationPlayState: (runCode) ? running : paused }}>
            <p
                ref={elIcon}
                className="stack-icon"
            >
                <i className={props.faIcon}></i>
            </p>
            <p
                className="stack-heading"
                style={{ fontFamily: props.font }}
            >
                {`${props.heading.toString().toUpperCase()}`}
            </p>
            <p className="stack-description">{props.description}</p>
        </div>
    )
}

export default Stack