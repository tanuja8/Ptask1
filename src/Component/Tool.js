import React from 'react'

const Tool = () => {
    return (
        <div>
            <div className='tool-banner py-5'>
                <div className='py-5  text  '>
                    <h2>E-commerce Simplified, Success Amplified</h2>
                    <p>Empowering your online business growth with all the essential tools.</p>

                </div>
                <div className=' tool-area '>
                    <div className='col-lg-4 tool-box '>
                        <img src='https://cdn-icons-gif.flaticon.com/8721/8721075.gif' width="90" height="90"/>
                        <h3>Site Speed</h3>
                        <span>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!</span>
                    </div>
                    <div className='col-lg-4 tool-box '>
                        <img src='https://cdn-icons-gif.flaticon.com/8761/8761704.gif' width="80" height="80"/>
                        <h3>Multi-Warehouse</h3>
                        <span>One store, multiple locations. Ship products from multiple warehouses across India.</span>
                    </div>
                    <div className='col-lg-4 tool-box '>
                    <img src='https://cdn-icons-gif.flaticon.com/8797/8797960.gif' width="80" height="80"/>
                        <h3>Optimized Checkout</h3>
                        <span>Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.</span>
                    </div>
                </div>
                <div className=' tool-area '>
                    <div className='col-lg-4 tool-box '>
                        <img src='https://cdn-icons-gif.flaticon.com/8717/8717908.gif' width="80" height="80"/>
                        <h3>Staff Accounts</h3>
                        <span>Add employees, colleagues and teammates to help you grow your business while managing access.</span>
                    </div>
                    <div className='col-lg-4 tool-box'>
                        <img src='https://cdn-icons-gif.flaticon.com/10352/10352986.gif' width="80" height="80"/>
                        <h3>Android App</h3>
                        <span>The world is mobile. It's time your store is too. Get more loyal customers with your mobile app.</span>
                    </div>
                    <div className='col-lg-4 tool-box'>
                        <img src='https://cdn-icons-gif.flaticon.com/6172/6172538.gif' width="80" height="80"/>
                        <h3>Advanced Analytics</h3>
                        <span>All the information about your sales, traffic, regions and products, just a single click away.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tool
