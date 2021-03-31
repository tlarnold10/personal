import React from 'react';

function About() {
    return (
        <div>
        <div className="uk-height-large uk-background-cover uk-light uk-flex" 
                      uk-parallax="bgy: -300"
                      style = {{ backgroundImage: "url('./cali.jpg')", height: "250px" }}>
                <h1 className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">About</h1>
        </div>
        <div className="uk-container">
            <br></br>
            <p>Currently live in Lester, IA.</p>
            <br></br>
            <h2>Contact</h2>
            <p>Email: trevor.arnold@arnoldtec</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default About;