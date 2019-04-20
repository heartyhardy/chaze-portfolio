import React from 'react';
import './stack.css';

const Stack = props => (
    <div className="stack-main">
        <p
            className="stack-icon"
        >
            <i class={props.faIcon}></i>
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

export default Stack