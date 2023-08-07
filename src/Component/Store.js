import React from 'react'

const Store = () => {
    return (
        <div>
            <div className='row container'>
                <div className='col-lg-9 store'>
                    <h2>Whether you’re a startup or an established business, here’s why Dukaan is your best choice</h2>
                </div>
            </div>
            <div className='row p-5 m-5'>
                <div className='col-lg-6'>
                    <div>
                        <img src='https://mydukaan.io/_next/static/images/launch-fast-6349265d2de0cf16e61e160f85bd681d.svg' className='store-img' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <h3 className='mt-5 mb-4 ml-5'>Launch Fast</h3>
                    <div className='star '>
                        <ul>
                            <li>
                                <p className='ml-5'> Fully responsive e-commerce website & mobile app.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Loads 6X faster than existing solutions.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Upload/import products and inventory in bulk</p>
                            </li>
                            <li>
                                <p className='ml-5'>Integrate payment gateways.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Easily customizable themes.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='row m-5'>
                <div className='col-lg-6'>
                    <h3 className='mt-5 mb-4 ml-5'>Scale Faster</h3>
                    <div className='star '>
                        <ul>
                            <li>
                                <p className='ml-5'> Guaranteed 99.5% uptime for your store - We keep you open for business.</p>
                            </li>
                            <li>
                                <p className='ml-5'>60+ third party plugins.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Marketing tools and discounts to drive repeat orders.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Add staff accounts, assign different roles.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Unlimited transactions, 0% transaction fees.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src='https://mydukaan.io/_next/static/images/scale-faster-615089c61891323e0c2e2f0a4d498d53.svg' className='store-img' />
                </div>
            </div>
            <div className='row m-5 p-5'>
                <div className='col-lg-6'>
                    <img src='https://mydukaan.io/_next/static/images/manage-better-5f03835fb0602b9fa6a4b3fc98bc9c7c.svg' className='store-img' />
                </div>
                <div className='col-lg-6'>
                    <h3 className='mt-5 mb-4 ml-5'>Manage Better</h3>
                    <div className='star '>
                        <ul>
                            <li>
                                <p className='ml-5'>Order tracking, invoicing and order reports.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Bulk edit product prices, variants, inventory.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Manage global deliveries.</p>
                            </li>
                            <li>
                                <p className='ml-5'>In-depth business analytics.</p>
                            </li>
                            <li>
                                <p className='ml-5'>Automate all tax calculations.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store
