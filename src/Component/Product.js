import React from 'react'

const Product = () => {
  return (
    <div className='container product-area'>
        <h2>Kickstart your online store with these themes</h2>
      <div className='  product-image row py-5'>
      <div className='  col-lg-4'>
      <img src='https://mydukaan.io/_next/static/images/tinker-0b59397a813a30dccbf17d9278372824.webp'/>
      <h3 className='m-5'>Tinker</h3>
        
        </div>
        <div className='  col-lg-4'>
      <img src='https://mydukaan.io/_next/static/images/ursa-047137008aa0cf119dc1a54047b7fd87.png'/>
      <h3 className='m-5'>Ursa</h3>
        
        </div>
        <div className='  col-lg-4'>
      <img src='https://mydukaan.io/_next/static/images/enigma-b98c9aff293be1a8103e3f5bf15682e7.png'/>
      <h3 className='m-5'>Enigma</h3>
        
        </div>
        </div>
        <div className='  product-image row '>
      <div className='  col-lg-4'>
      <img src='https://mydukaan.io/_next/static/images/mana-3d58c03ccebc3fb7ccd5e1035aca044c.webp'/>
      <h3 className='m-5'>Manna</h3>
        
        </div>
        <div className='  col-lg-4'>
      <img src='https://mydukaan.io/_next/static/images/nirvana-0d20aed96a17d45b4de7df85875d5731.webp'/>
      <h3 className='m-5'>Nirvanna</h3>
        
        </div>
        <div className='  col-lg-4'>
      <img src='https://mydukaan.io/_next/static/images/oxford-3d6756d13f284e6d6205f8c607355ca0.webp'/>
      <h3 className='m-5'>Oxford</h3>
        
        </div>
        </div>
        <div className='product-btn'>
        <button type="button" className="btn btn-outline-dark px-5 py-3">View all</button>
        </div>
      </div>
  )
}

export default Product
