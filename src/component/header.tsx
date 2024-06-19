import React from 'react'

export default function Header() {
    return (
        <div className='headerDiv'>
            <div className="headerIconDiv">
                <div className='computerIconImg'></div>
            </div>
            <h3>Siriphum Chiaravanont</h3>
            {/* <h4>Full-Stack Web Developer</h4> */}
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                    I'm a
                    </p>
                    <ul className="content__container__list">
                        <li className="content__container__list__item">Full-Stack Developer !</li>
                        <li className="content__container__list__item">Software Engineer !</li>
                        <li className="content__container__list__item">Data Engineer !</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}