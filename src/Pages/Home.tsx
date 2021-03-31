import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <div className="uk-height-large uk-background-cover uk-light uk-flex" 
                      uk-parallax="bgy: -400"
                      style = {{ backgroundImage: "url('./image.jpg')", height: "600px" }}>
                <h1 className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Let's Get To It</h1>
              </div>
              <br></br>
              <br></br>
              <div className="uk-container">
              <h2 style={{ "textAlign": "center" }}>About Me</h2>
                <p style={{ "textAlign": "center" }}>
                  Hopefully you are here to learn a little bit more about me, Trevor Arnold. If that is not the case 
                  not sure what I can really do to help... If you are looking to learn more about me, you came to the
                  the right place. Take a look around! Whether you are looking to bring me on as an employee or work with 
                  Arnold Technologies LLC, you can learn more about my experiences and what makes me, me. 
                </p>
              </div>
              <br></br>
              <br></br>
              <div className="uk-container">
                <div className="uk-column-2-4 uk-column-divider">
                  <img src="./Photos/react.png" style= {{ "width": "300px", "padding": "15px" }}></img>
                  <img src="./Photos/sql.png" style= {{ "width": "300px", "padding": "15px" }}></img>
                  <img src="./Photos/typescript.png" style= {{ "width": "300px", "padding": "15px" }}></img>
                  <img src="./Photos/python-logo-master-v3-TM.png" style= {{ "width": "300px", "padding": "15px" }}></img>
                </div>
              </div>
              <br></br>
              <br></br>
              <hr className="uk-divider-icon"></hr>
              <br></br>
              <div className="uk-container">
              <div className="uk-child-width-1-3@s uk-grid-match uk-grid">
                <div className="uk-container uk-container-small" style={{ padding: "10px"}}>
                <div className="uk-card uk-card-primary uk-card-body uk-card-hover" style={{ backgroundColor: "#5A5EAE" }}>
                  <h3 className="uk-card-title">Arnold Technologies</h3>
                  <p>
                    Technology strategy is what gets me excited and how I can help. 
                    Whether you want to build new software or need assistance picking out
                    enterprise software, I want to help. 
                  </p>
                  <Link to="/business"><button className="uk-button uk-button-primary" style={{ backgroundColor: "#D7D7D7", color: "#000000" }}>
                      Business</button></Link>
                </div>
                </div>
                <div className="uk-container uk-container-small" style={{ padding: "10px" }}>
                  <div className="uk-card uk-card-primary uk-card-body uk-card-hover Arnold-box" style={{ backgroundColor: "#5A5EAE" }}>
                    <h3 className="uk-card-title">Professional Experience</h3>
                    <p>I've seen some things, both good and bad. At the end of the day, these experiences make me who I am.</p>
                    <Link to="/experience"><button className="uk-button uk-button-primary" style={{ backgroundColor: "#D7D7D7", color: "#000000" }}>
                      Experience</button></Link>
                  </div>
                </div>
                <div className="uk-container uk-container-small" style={{ padding: "10px" }}>
                  <div className="uk-card uk-card-primary uk-card-body uk-card-hover" style={{ backgroundColor: "#5A5EAE" }}>
                    <h3 className="uk-card-title">Fun Projects</h3>
                    <p>Built a couple of projects. You should totally check them out.</p>
                    <Link to="/projects"><button className="uk-button uk-button-primary" style={{ backgroundColor: "#D7D7D7", color: "#000000" }}>
                      Projects</button></Link>
                  </div>
                </div>
              </div>
              <br></br>
              <hr className="uk-divider-icon"></hr>
              <br></br>
              <div className="uk-container">
              <h2 style={{ "textAlign": "center" }}>Values</h2>
                <p style={{ "textAlign": "center" }}>
                  My values are pretty strait forward: <b>Faith</b>, <b>Family</b>, <b>Work</b>. I would not be where I am without 
                  these values. I am truly blessed to be where I am at. God has certainly been with me and 
                  guided me along the way. My family has always been there to support me, and God willing, they continue to be
                  by my side. Finally, I enjoy getting things done and working. I believe I was placed on this planet for a reason, 
                  which is why I believe in the work I do and the value I provide. 
                </p>
              </div><hr className="uk-divider-icon"></hr>
              <br></br>
              <br></br>
              <div className="uk-container">
              <h2 style={{ "textAlign": "center" }}>Resume</h2>
                <p style={{ "textAlign": "center" }}>
                  Just looking for my resume, that's fine. Feel free to download:
                </p>
                <a href="./TrevorArnold_Resume.docx">
                  <button 
                    style = {{ marginLeft: "45%", width: "125px", backgroundColor: "#5A5EAE" }}
                    className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Resume</button>
                </a>
              </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="uk-height-medium uk-background-cover uk-light uk-flex"
                      style = {{ backgroundImage: "url('./Photos/IMG_11081.jpg')", height: "20x" }}>
              </div>
              <br></br>
        </div>
    );
}

export default Home;