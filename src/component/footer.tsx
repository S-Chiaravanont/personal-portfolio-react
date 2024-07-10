import React from 'react'

export default function Footer() {
    return (
        <div className="footerDiv">
            <div className='individualSKillDiv'>
                <a href="https://github.com/S-Chiaravanont/" target="_blank" rel="noopener noreferrer">
                    <div className='githubIconImg'></div>
                </a>
            </div>
            <div className='individualSKillDiv'>
                <a href="https://www.linkedin.com/in/siriphumchiaravanont/" target="_blank" rel="noopener noreferrer">
                    <div className='linkedInIconImg'>
                    </div>
                </a>
            </div>
            <div className='individualSKillDiv'>
                <a href="https://codesandbox.io/u/s-chiaravanont" target="_blank" rel="noopener noreferrer">
                    <div className='codeSandBoxIconImg'>
                    </div>
                </a>
            </div>
            <div className="iconLink">
                <p>*All Icons are from <a target="_blank" href="https://icons8.com">Icons8</a></p>
            </div>
        </div>
    )
}