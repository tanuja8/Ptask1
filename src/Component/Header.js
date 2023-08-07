import React from 'react'
import logo from "./image/logo.svg"
const Header = () => {
  return (
    <div className='main-area'>
      <nav class="navbar navbar-expand-lg  text-light  ">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" width="130" height="130" className="d-inline-block align-text-top mr-5" />

        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"> Product<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Company</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn  my-2 my-sm-0" type="submit">Sign in</button>
            <button type="button" class="btn btn-primary btn-lg  ">Start Free Trial</button>
          </form>
        </div>
      </nav>
      <div className='banner'>
      <div className='row p-3 mb-5 '>
        <div className='col-lg-6 mt-5'>
          <h1>Your Global Commerce Partner, Engineered for Peak Performance</h1>
          <span>Launch your eye-catching online store with ease, attract and convert more customers than ever before.</span>
          <div className='mt-5 mb-5'> <button type="button" class="btn btn-primary btn-lg py-3">Start 7-days free trial</button></div>
          <div>
            <span>Also available on</span>
            <a class="" href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/15/15476.png" alt="" width="20" height="20" className="d-inline-block align-text-top mr-3 ml-3" />
            </a>
            <a class="" href="#">
              <img src="https://img.freepik.com/free-icon/google-play_318-566073.jpg?w=2000" alt="" width="18" height="18" className="d-inline-block align-text-top mr-5" />

            </a>
          </div>

        </div>
        <div className='col-lg-6 '>
          <img src='https://mydukaan.io/_next/static/images/hero_image_shadow-new-ef38d2da7a63bb815162083389e05f32.webp  ' className='banner-image ' ></img>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Header
