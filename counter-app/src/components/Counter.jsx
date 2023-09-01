import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementHandler = () => {
        if (counter >= 0) {
            setCounter((prevValue) => prevValue + 1);
        } else {
            alert("Your Number is below 0");
        }
    };

    const resethandler = () => {
        setCounter(0);
    };

    const decrementHandler = () => {
        if (counter > 0) {
            setCounter((prevValue) => prevValue - 1);
        } else {
            alert("Your Number is below 0");
        }
    };

    return (
        <div className='text-light'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className='heading'>Counter App</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h3>{counter}</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <button className='btn1' onClick={incrementHandler}>Increment +</button>
                        <button className='btn2' onClick={resethandler}>Reset</button>
                        <button className='btn3' onClick={decrementHandler}>Decrement -</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;
