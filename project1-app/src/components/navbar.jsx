import "./navbar.css";
import img1 from "../assets/images/Group 5.png"

export default function navbar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <nav className="navbar navbar-expand-md bg-body-white">
                            <div className="container-fluid">
                                <a
                                    className="navbar-brand" href="#"
                                >

                                    <img src={img1} className="nav-img" alt="..." />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active me-lg-5 me-md-4 mt-lg-0 mt-md-0" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active me-lg-5 me-md-4 mt-lg-0 mt-md-0" href="#">Link</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Menu
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Menu1</a></li>
                                                <li><a className="dropdown-item" href="#">Menu 2</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Now Check our Menu!</a></li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                    <form className="d-flex justify-content-start" role="search">
                                        <button className="btn-class  me-lg-3 me-md-3 me-sm-2 me-2" type="submit">Contact us</button>
                                        <button className="btn btn-outline-primary" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}