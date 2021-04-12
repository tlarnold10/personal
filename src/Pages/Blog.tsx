import React from 'react';

function Blog() {
    return (
        <div>
        <div className="uk-height-large uk-background-cover uk-light uk-flex" 
                      uk-parallax="bgy: -300"
                      style = {{ backgroundImage: "url('./Photos/IMG_11081.jpg')", height: "250px" }}>
                <h1 className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Blog</h1>
        </div>
        <div className="uk-container">
            <br></br>
            <p>
                Really want to get into technical blogging. I really enjoy to learn, so this is a great
                avenue to document some of the things I have learned along the way. 
            </p>
            <h3>Welcome</h3>
            <p>insert content here...</p>
            <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}

export default Blog;