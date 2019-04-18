import React from 'react';
import './quote.css';

const Quote = props => (
    <div
        className={props.quoteStyle}
    >

        <p className="quote">{props.quote}</p>
        <p className="quote-author">{props.author}</p>

    </div>
)

export default Quote