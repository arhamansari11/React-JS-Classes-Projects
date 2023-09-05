import React from 'react';
import '../components/section2.css';
import Btn from '../common/btn';
import img1 from '../assets/images/Rectangle 13.png';
import img2 from '../assets/images/Rectangle 15.png';
import img3 from '../assets/images/Rectangle 6.png';

const Section2 = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Online Courses</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-lg-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row justify-content-around"> {/* Change to justify-content-around */}
                            <div className="col-lg-4 col-md-5 col-sm-7 col-10 card-class mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                                <img src={img1} alt="" width="95%" />
                                <h4 className="ms-1 mt-1 mb-2">Modern Psychology</h4>
                                <Btn name="Modern Courses" />
                                <p className="mt-4">
                                    <span className="me-lg-4 me-md-3 me-sm-4 me-2"><i className="fa-solid fa-calendar-days"></i> Start 20 April 2021</span>
                                    <i className="fa-solid fa-users"></i> 60 seats
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-7 col-10 card-class ms-1 mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                                <img src={img2} alt="" width="95%" />
                                <h4 className="ms-1 mt-1 mb-2">Modern Psychology</h4>
                                <Btn name="Modern Courses" />
                                <p className="mt-4">
                                    <span className="me-lg-4 me-md-3 me-sm-4 me-2"><i className="fa-solid fa-calendar-days"></i> Start 20 April 2021</span>
                                    <i className="fa-solid fa-users"></i> 60 seats
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-7 col-10 card-class mt-lg-5 mt-md-4 mt-sm-3 mt-3">
                                <img src={img3} alt="" width="95%" />
                                <h4 className="ms-1 mt-1 mb-2">Modern Psychology</h4>
                                <Btn name="Modern Courses" />
                                <p className="mt-4">
                                    <span className="me-lg-4 me-md-3 me-sm-4 me-2"><i className="fa-solid fa-calendar-days"></i> Start 20 April 2021</span>
                                    <i className="fa-solid fa-users"></i> 60 seats
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;
