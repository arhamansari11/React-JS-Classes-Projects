import React from 'react'
import aboutimg from "../assets/images/Group video-rafiki (1) 1@2x.png"
import './about.css'
const about = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto d-flex">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 text mt-lg-5">
                            <h1 className="mt-lg-5 mt-md-5 mt-sm-4 mt-4 text">
                                About <span style={{ color: "#39A9CB" }} >Us</span>
                            </h1>
                            <h6 className='info'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus impedit soluta mollitia eos saepe esse, reiciendis iusto unde, sunt sed. Ullam ratione recusandae veritatis veniam tenetur natus ad nobis.
                            </h6>
                            <h5 style={{ color: "#33839C", cursor: "pointer" }} className='info'>
                                Are You want more information?
                            </h5>
                            <button className="button1 mt-lg-3 mt-md-4 mt-sm-4 mt-1" >
                                <h5 className="text2">
                                    Motivational is here
                                </h5>
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 img ms-lg-5">
                            <img src={aboutimg} className="img" alt="..." />
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default about