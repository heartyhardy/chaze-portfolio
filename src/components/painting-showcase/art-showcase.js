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
                        cellStyle={`${art.class} cellflags`}
                        caption={art.caption}
                        url={art.url}
                    />
                )
            }
            <div className="hero">
                <p className="quote">Creativity is contagious.<br></br>Pass it on.</p>
                <p className="quote-author"> -Albert Einstien</p>
            </div>
        </Aux>
    )
}

export default ArtShowcase