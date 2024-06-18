import React from 'react';

const Player = ({link}) => {
    return (
        <iframe
                            width="100%"
                            className="aspect-video"
                            src={link}
                            title="Some video title"
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
    );
};

export default Player;