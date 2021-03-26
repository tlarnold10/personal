import React from 'react';

function Projects() {
    return (
        <div>
        <div className="uk-height-large uk-background-cover uk-light uk-flex" 
                      uk-parallax="bgy: -400"
                      style = {{ backgroundImage: "url('./Photos/IMG_11081.jpg')", height: "350px" }}>
                <h1 className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Projects</h1>
              </div>
        <div className="uk-container">
            <br></br>
            <p>Been working on many different side projects in my spare time, usually when the baby is sleeping.
                All of these can be found on my <a href="https://github.com/tlarnold10">Github repository.</a></p> 
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default Projects;