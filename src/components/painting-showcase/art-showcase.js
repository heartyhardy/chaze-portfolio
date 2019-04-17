import React from 'react';
import './art-showcase.css';

import art_service from '../../service/art-service';

import Aux from '../hoc/Auxilary/Auxilary';
import Artwork from '../artwork/artwork';

const ArtShowcase = props => {
    return(
        <Aux styling="artshowcase-main">
            {
                art_service.fetch().map((art, index) => 
                    <Artwork
                        key={index}
                        cellStyle="className"
                        caption={art.caption}
                        url={art.url}
                    />
                )
            }
        </Aux>
    )
}

export default ArtShowcase