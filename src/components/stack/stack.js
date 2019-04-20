import React from 'react';
import './stack.css';

const getFontFamily = (font) => {
    switch(font){
        case "CODE":
            return "'Oswald', sans-serif";
        case "DESIGN":
            return "'Cinzel Decorative', cursive";
        default:
            return;
    }
}

const Stack = props => (
    <div className="stack-main">
        <p
            className="stack-heading"
            style={{fontFamily:getFontFamily(props.font)}}
        >
            {`${props.heading.toString().toUpperCase()}`}
        </p>
        <p className="stack-description">{props.description}</p>
    </div>
)

export default Stack