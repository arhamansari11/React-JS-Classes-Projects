import React from 'react';
import Card from '../common/card';
import image1 from "../assets/images/image 1.png";
import image2 from "../assets/images/image 2.png"
import image3 from "../assets/images/image 3.png"
import image4 from "../assets/images/image 4.png"

const Cards = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto mt-lg-0 mt-md-0 mt-sm-0">
                                <Card img={image1} h3="1500+ Topics" p="Learn Anything" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                <Card img={image2} h3="1500+ Topics" p="Learn Anything" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                                <Card img={image3} h3="1500+ Topics" p="Learn Anything" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                                <Card img={image4} h3="1500+ Topics" p="Learn Anything" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
