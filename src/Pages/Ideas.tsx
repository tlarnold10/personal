import React from 'react';

function Ideas() {
    return (
        <div>
        <div className="uk-container">
            <h1 style={{ "textAlign": "center" }}>Introduction</h1>
                <p style={{ "textAlign": "center" }}>
                  Want to determine if any of my business ideas would actually be of any value. The goal is to lay out some product ideas below and people in my network, or even outside of my network can vote on ideas. If one idea really takes off, I can invest a bit more time trying to build it or determine a strategy to build it.  
                </p>
              <hr className="uk-divider-icon"></hr>
              <h2 style={{ "textAlign": "center" }}>Idea 1: [Insert Idea Here]</h2>
              <p>
                Insert description of idea here.
              </p>
              <p uk-margin>
                <button className="uk-button uk-button-primary">Upvote</button>
                <button className="uk-button uk-button-danger">Downvote</button>
              </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default Ideas;