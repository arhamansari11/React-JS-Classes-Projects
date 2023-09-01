import React from 'react'
import './partners.css'
import gogleimage from "../assets/images/Group.png"
import linuximage from "../assets/images/Vector (2).png"
import inimg from "../assets/images/Vector (1).png"
import fbimage from "../assets/images/Vector (3).png"
import image from "../assets/images/Group video-pana 1.png"

const partners = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="col-12">
                        <h1 className='partner text-center'>Reach Us</h1>
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                        <div className="col-2">

                        </div>
                        <div className="col-2">
                            <img src={gogleimage} className='img1' alt="..." />
                        </div>
                        <div className="col-2">
                            <img src={linuximage} className="img2" alt="..." />
                        </div>
                        <div className="col-2">
                            <img src={inimg} className="img3" alt="..." />
                        </div>
                        <div className="col-2">
                            <img src={fbimage} className="img4" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-lg-5 mt-md-5 mt-2">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={image} className='lastimg mt-5' alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default partners