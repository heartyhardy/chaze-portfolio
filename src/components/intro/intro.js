import React from 'react';
import './intro.css';
import stack_service from '../../service/stack-service';

import Aux from '../hoc/Auxilary/Auxilary';
import Stack from '../stack/stack';

const Intro = props => (
    <Aux styling="intro-main">
        {
            stack_service.fetch().map((stack, index) =>
                <Stack
                    key={`stack${index}`}
                    scrollPos={props.scrollPos}
                    faIcon={stack.icon}
                    font={stack.font}
                    heading={stack.heading}
                    description={stack.description}
                />
            )
        }
    </Aux>
)

export default Intro