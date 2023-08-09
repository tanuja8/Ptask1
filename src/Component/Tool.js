import React from 'react'

const Tool = () => {
  return (
    <div>
      <div className='tool-banner py-5'>
        <div className='py-5  text '>
             <h2>E-commerce Simplified, Success Amplified</h2>
            <p>Empowering your online business growth with all the essential tools.</p>
           
        </div>
        <div className=' tool-area'>
            <div className='col-lg-4 tool-box py-5'>
            <h3>Site Speed</h3>
            <span>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!</span>
            </div>
            <div className='col-lg-4 tool-box py-5'>
                <h3>Multi-Warehouse</h3>
                <span>One store, multiple locations. Ship products from multiple warehouses across India.</span>
                </div>
                <div className='col-lg-4 tool-box py-5'>
                <h3>Optimized Checkout</h3>
                <span>Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.</span>
                </div>
        </div>
        <div className=' tool-area '>
            <div className='col-lg-4 tool-box py-5'>
            <h3>Staff Accounts</h3>
            <span>Add employees, colleagues and teammates to help you grow your business while managing access.</span>
            </div>
            <div className='col-lg-4 tool-box py-5'>
                <h3>Android App</h3>
                <span>The world is mobile. It's time your store is too. Get more loyal customers with your mobile app.</span>
                </div>
                <div className='col-lg-4 tool-box py-5'>
                <h3>Advanced Analytics</h3>
                <span>All the information about your sales, traffic, regions and products, just a single click away.</span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Tool
