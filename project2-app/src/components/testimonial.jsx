import React from 'react';
import Ellipse from '../assets/images/Ellipse 5.png';
import '../components/testimonial.css';

const Testimonial = () => {
  return (
    <div>
      <h1 className='text-center mt-5'>Testimonial</h1>
      <div className="container-fluid mt-lg-5">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center mb-3">
                <img src={Ellipse} alt="name" className='elllipseimg' />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 col-12 mt-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum autem animi quidem alias odio dolorem blanditiis culpa explicabo maiores. Delectus, et quia. Aliquam itaque suscipit quidem beatae magnam laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
