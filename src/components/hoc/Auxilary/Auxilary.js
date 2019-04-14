import React from 'react';

const Aux = props => (
    <div className={props.styling} ref={props.element} onScroll={props.scroll}>
        {props.children}
    </div>
)

export default Aux