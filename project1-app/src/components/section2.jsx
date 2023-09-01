import React from 'react'
import './section2.css'
import gogleimg from "../assets/images/Group.png"
import facebookimg from "../assets/images/Vector (3).png"
const section2 = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-10 mx-auto d-lg-flex d-md-flex mt-4">
                        <div className="col-lg-5 col-md-5 col-sm-10 col-10 d-flex flex-column align-items-center justify-content-center mx-auto" style={{ backgroundColor: "#39A9CB", borderRadius: "5px" }}>
                            <h6 className='text-light pt-5 text-center'>
                                Are You Looking For new Opportunities?
                                May I hel You?
                            </h6>
                            <p className='text-light pt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus minima quibusdam veniam, quos reprehenderit magnam </p>
                            <form className=" py-4" role="search">
                                <button className="btn bg-light" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-8 mt-lg-0 mt-md-0 mt-sm-3 mt-3 ms-lg-2  ms-md-2 d-flex flex-column align-items-center justify-content-center mx-auto pt-lg-0  pt-md-0 pt-sm-4 pt-4" style={{ border: "3px solid #39A9CB", borderRadius: "5px" }}>
                            <img src={gogleimg} className="gogleimg text-center " alt="..." />
                            <h5 style={{ color: "#39A9CB" }} className='text-center'>Google</h5>
                            <h6 style={{ color: "#39A9CB" }} className='text-center pb-lg-0  pb-md-0 pb-sm-5 pb-5'>Google is a very easy way to explore things</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-8 mt-lg-0 mt-md-0 mt-sm-3 mt-3 ms-lg-2 ms-md-2 d-flex flex-column align-items-center justify-content-center mx-auto pt-lg-0  pt-md-0 pt-sm-4 pt-4" style={{ border: "3px solid #39A9CB", borderRadius: "5px" }}>
                            <img src={facebookimg} className="facebookimg text-center" alt="..." />
                            <h5 style={{ color: "#39A9CB" }} className='text-center'>FaceBook</h5>
                            <h6 style={{ color: "#39A9CB" }} className='text-center pb-lg-0  pb-md-0 pb-sm-5 pb-5'>FaceBook is a very easy way to explore Peoples</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default section2