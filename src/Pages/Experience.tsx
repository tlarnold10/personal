import React from 'react';

function Experience() {
    return (
        <div>
        <div className="uk-height-large uk-background-cover uk-light uk-flex" 
                      uk-parallax="bgy: -400"
                      style = {{ backgroundImage: "url('./ocean.jpg')", height: "350px" }}>
                <h1 className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Professional Experience</h1>
              </div>
        <div className="uk-container">
            <br></br>
            <p>I've done some shit, even at a young age.</p>
            <ul className="uk-list uk-list-striped">
                <li>
                    Graduate from Augustana College in Sioux Falls. Computer Information System and 
                    Business Administration. 2014 graduate.
                </li>
                <li>
                    Sales Account Executive at Omnitech.
                </li>
                <li>
                    Start MBA program at University of South Dakota.
                </li>
                <li>
                    Data conversion engineer at Zuercher Technologies in Sioux Falls.
                </li>
                <li>
                    Zuercher Technologies becomes CentralSquare Technologies.
                </li>
                <li>
                    Data conversion manager at CentralSquare Technologies.
                </li>
                <li>
                    Graduate from USD with Masters of Business Administration, December 2019.
                </li>
                <li>
                    Move to Lester, IA
                </li>
                <li>
                    Starting up Arnold Technologies.
                </li>
                <li>
                    Software engineering manager at CentralSquare Technologies.
                </li>
            </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default Experience;