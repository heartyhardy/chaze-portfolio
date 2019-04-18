import React from 'react';
import './art-showcase.css';

import art_service from '../../service/art-service';

import Aux from '../hoc/Auxilary/Auxilary';
import Artwork from '../artwork/artwork';
import Quote from '../quote/quote';

const ArtShowcase = props => {
    return(
        <Aux styling="artshowcase-main">
            {
                art_service.fetch().map((art, index) => 
                    <Artwork
                        key={`art${index}`}
                        cellStyle={`${art.class} cellflags`}
                        caption={art.caption}
                        url={art.url}
                    />
                )
            }
            {
                art_service.fetchQuotes().map((quote, index) =>
                    <Quote
                        key={`quote${index}`}
                        quoteStyle={`${quote.class} quoteflags`}
                        quote={quote.quote}
                        author={`~${quote.author}`}
                    />
                )
            }
        </Aux>
    )
}

export default ArtShowcase