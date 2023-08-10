import React from 'react'
import two from "./image/two.svg"
import three from "./image/three.svg"
import five from "./image/five.svg"
import seven from "./image/seven.svg"
import nine from "./image/nine.svg"
import ten from "./image/ten.svg"
import twelve from "./image/twelve.svg"
import thirten from "./image/thirten.svg"
import fourten from "./image/fourten.svg"


const Pluging = () => {
    return (
        <div>
            <div className='tool-banner py-5'>
                <div className='py-5  text  '>
                    <h2>Enhance your site's functionality with plugins</h2>
                    <div className='col-lg-6 container'><span>Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. There's a plugin for everything.</span></div>
                </div>
            </div>
            <div className='home-pluging'>
                <ul>
                    <li className='one'>
                        <img src='	https://mydukaan.io/_next/static/images/facebook-53eabd0b00600c84de9497021eaa1ba7.svg' width="80px" height="80px" />
                    </li>
                    <li className='two'>
                        <img src={two} width="80px" height="80px" />
                    </li>
                    <li className='three'>
                        <img src={three} width="80px" height="80px" />
                    </li>
                    <li className='four'>
                        <img src='https://mydukaan.io/_next/static/images/google-analytic-32b8d1ddcb45b032258495f43d6ead50.svg' width="80px" height="80px" />
                    </li>
                    <li className='five'>
                        <img src={five} width="80px" height="80px" />
                    </li>
                    <li className='six'>
                        <img src='https://mydukaan.io/_next/static/images/mailchimp-5f80dd5ec62474fb9c8d832608f6dd93.svg' width="80px" height="80px" />
                    </li>
                    <li className='seven'>
                        <img src={seven} width="80px" height="80px" />
                    </li>
                    <li className='eight'>
                        <img src='https://mydukaan.io/_next/static/images/digital-product-be11828f151fb44e59facfc923c7cc59.svg' width="80px" height="80px" />
                    </li>
                    <li className='nine'>
                        <img src={nine} width="80px" height="80px" />
                    </li>
                    <li className='ten'>
                        <img src={ten} width="80px" height="80px" />
                    </li>
                    <li className='eleven'>
                        <img src='https://mydukaan.io/_next/static/images/trusted-606fe713bd9f3938e49e2a0d1d8825d3.svg' width="80px" height="80px" />
                    </li>
                    <li className='twelve'>
                        <img src={twelve} width="80px" height="80px" />
                    </li>
                    <li className='thirten'>
                        <img src={thirten} width="80px" height="80px" />
                    </li>
                    <li className='fourten'>
                        <img src={fourten} width="80px" height="80px" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pluging
