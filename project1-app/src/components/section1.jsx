import company from "../assets/images/Remote meeting-rafiki 1.png"
import './section1.css'

export default function section1() {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto d-flex">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 text mt-lg-5">
                            <h1  className="mt-lg-5 mt-md-5 mt-sm-4 mt-4 text">
                                <span style={{ color: "#39A9CB" }}>Meeting</span> Online with Peoples is very easy way in the present <span style={{ color: "#39A9CB" }}>for talk.</span>
                            </h1>
                            <button className="button mt-lg-4 mt-md-4 mt-sm-4 mt-2" >
                                <h5 className="text2">
                                    Let's Talk
                                </h5>
                            </button>
                            <button className="button1 mt-lg-4 mt-md-4 mt-sm-4 mt-2 ms-lg-3 ms-md-3 ms-sm-3 ms-2" >
                                <h5 className="text2">
                                    Motivational is here
                                </h5>
                            </button>
                            <h5 style={{color : "#39A9CB" , cursor: "pointer"}} className="mt-lg-5 mt-md-5 mt-sm-4 mt-3 text1">
                                Are you want some more Information?
                            </h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 img ms-lg-5">
                            <img src={company} className="img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}