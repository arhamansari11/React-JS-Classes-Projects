import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='footer'>
        <div className="container-fluid text-light mt-lg-5 mt-md-5 mt-sm-5 mt-3">
            <div className="row">
                <div className="col-10 mx-auto d-lg-flex d-md-flex d-sm-flex d-flex">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-5 mx-auto">
                        <h5 className='pt-2'>Company </h5>
                        <h6 className='pt-2'>About Us</h6>
                        <h6 className='pt-2'>Press it</h6>
                        <h6 className='pt-2'>Partners</h6>
                        <h6 className='pt-2'>FAQ's?</h6>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-5 mx-auto">
                        <h5 className='pt-2'> Services</h5>
                        <h6 className='pt-2'>About Us</h6>
                        <h6 className='pt-2'>Contact Us</h6>
                        <h6 className='pt-2'>Partners</h6>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-5 mx-auto">
                        <h5 className='pt-2'>Legal</h5>
                        <h6 className='pt-2'>About Us</h6>
                        <h6 className='pt-2'>Press it</h6>
                        <h6 className='pt-2'>Partners</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid mt-5 text-white">
            <div className="row">
                <div className="col-12 mx-auto">
                    <p className='text-center'>Copyright © 2023 React-App | Powered by Arham Ansari</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer