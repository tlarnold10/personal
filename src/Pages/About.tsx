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
            <p>Currently live in Lester, IA with two beautiful girls, my wife, and dog. </p>
            <h2>Connect</h2>
            <ul className="uk-list uk-list-striped">
                <li>
                    <b>Email:</b> <a href="mailto: trevor.arnold@arnoldtec.com">trevor.arnold@arnoldtec.com</a>
                </li>
                <li>
                    <b>LinkedIn:</b> <a href='https://www.linkedin.com/in/trevorarnold/' target='_blank'>Trevor Arnold LinkedIn</a>
                </li>
            </ul> 
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default About;