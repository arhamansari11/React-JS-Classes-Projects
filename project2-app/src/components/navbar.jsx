import React from 'react'
import '../components/navbar.css'
import navimg from "../assets/images/Group 1.png"
import Btn from '../common/btn'
const navbar = () => {
    return (
        <div className='d-flex mt-4'>
           <div className="container-fluid">
            <div className="row">
                <div className="col-11 mx-auto">
                <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    < span className="navbar-brand"><img src={navimg} alt="navimg" className='navimg'/></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{cursor : "pointer"}}>
                                <span className="nav-link active" aria-current="page" href="#">Books</span>
                            </li>
                            <li className="nav-item" style={{cursor : "pointer"}}>
                                <span className="nav-link active ms-lg-5" href="#">Courses</span>
                            </li>
                            <li className="nav-item" style={{cursor : "pointer"}}>
                                <span className="nav-link active ms-lg-5" href="#">Blogs</span>
                            </li>
                            <li className="nav-item" style={{cursor : "pointer"}}>
                                <span className="nav-link active ms-lg-5" aria-disabled="true">Others</span>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Btn name="Sign In"/>
                        </form>
                    </div>
                </div>
            </nav>
                </div>
            </div>
           </div>
        </div>
    )
}

export default navbar