import React, { useState } from 'react';

const APIKey = 'AIzaSyDuGG7AZLxE5nCNR1IbfiOBfU_WNMHwwQ0';
const resultMax = 50;

const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultMax}&order=date&key=${APIKey}`;

const Youtube = () => {
    const [resultYoutube, setResultYoutube] = useState([]);

    const clicked = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
                const resultYoutube = responseJson.items.map(
                    (obj) => 'https://www.youtube.com/embed/' + obj.id.videoId
                );
                setResultYoutube(resultYoutube);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="generalWrapper">
            <button onClick={clicked}>Click For Videos</button>
            {resultYoutube.map((link, i) => {
                var iframe = (
                    <div key={i} className="videoThumb">
                        <iframe
                            width="560"
                            height="315"
                            src={link}
                            title="video"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
                return iframe;
            })}
        </div>
    );
};

export default Youtube;
