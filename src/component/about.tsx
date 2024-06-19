import React from 'react'

export default function About() {
    return (
        <div className='aboutDiv'>
            <div className='aboutHeader'>
                <h4>ABOUT ME</h4>
            </div>
            <div className="aboutImgDiv">
                <div className="headerIconDiv">
                    <div className="nodejsIconImg"></div>
                </div>
            </div>
            <div className="aboutTextDiv">
                <div className="aboutTextDiv_header">
                    <div className="aboutTextDiv_header_circle"></div>
                    <div className="aboutTextDiv_header_circle"></div>
                    <div className="aboutTextDiv_header_circle"></div>
                </div>
                <div className="aboutTextDiv_Content">
                    <h4>Hello!</h4>
                    <p>I'm Siriphum Chiaravanont, also go by "Chai". </p>
                </div>
            </div>
        </div>
    )
}