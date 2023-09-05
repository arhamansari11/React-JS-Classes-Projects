import React from 'react';
import frame from "../assets/images/Frame.png";
import '../components/section.css';
import Btn from '../common/btn';

const Section = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto mt-lg-5 d-lg-flex d-md-flex">
                        <div className="col-lg-4 col-md-5 col-sm-10 col-10 mx-auto">
                            <p className='text-danger'>Are You ready to learn?</p>
                            <h1 className='text-success'>
                                Learn with fun
                                on Any Schedule
                            </h1>
                            <p style={{ fontSize: "17px" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam, similique pariatur porro repudiandae qui
                            </p>
                            <Btn name="Get Started"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-10 col-10 mx-auto offset-lg-1 offset-md-0 offset-sm-1 offset-1">
                            <img src={frame} alt="frame" className='frame mt-lg-0 mt-md-0 mt-sm-3 mt-3 ms-lg-0 ms-md-0 ms-sm-5 '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
