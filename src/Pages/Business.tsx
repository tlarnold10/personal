import React from 'react';

function Business() {
    return (
        <div>
        <div className="uk-height-large uk-background-cover uk-light uk-flex" 
                      uk-parallax="bgy: -400"
                      style = {{ backgroundImage: "url('./Photos/IMG_1111.jpg')", height: "350px" }}>
                <h1 className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Arnold Technologies</h1>
              </div>
        <div className="uk-container">
            <br></br>
            <p>Working on building my own technology business. Speciallizing in strategy and software engineering.</p> 
            <br></br>
            <h3>Why Arnold Technologies?</h3>
            <p>
                Your business is what you specialize in. Your time should be spent doing the work that adds value to you
                business and your customers. As a person that likes to optimize my own time, I want to help you 
                optimize your time. I want to help you automate the work that you do most often so you can spend more time
                on the things that are truly important.
            </p> 
            <br></br>
            <h3>Services</h3>
            <ul className="uk-list uk-list-striped">
                <li>
                    Software Engineering
                </li>
                <li>
                    Data Analytics
                </li>
                <li>
                    Strategy Consulting
                </li>
            </ul>
            <br></br>
            <h3>Testimonials</h3>
            <h4>Heartland Hardware</h4>
            <p>
                Build web application to speed up quote development. Use to take 15 minutes per quote, it now takes 2 minutes.
                The main person that uses it went so far to say that she looks forward to putting together quotes because
                then she gets to use the software. 
            </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default Business;