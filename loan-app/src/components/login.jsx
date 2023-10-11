import React, { useState } from "react";
import "./login.css";
import astronaut from "../assets/images/astronaut.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const done = (e) => {
//   e.preventDefault();
// toast.success('Done! We will contact us Soon.', {
//   position: "top-right",
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "colored",
// });
// }

// const error =
// toast.error('Error', {
//   position: "top-left",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "colored",
// });

const initialState = {
  email: "",
  gender: "",
  salary: "",
};

function App() {
  const [formData, setformData] = useState(initialState);

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      toast.error("Please Enter Valid Email", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (
      formData.gender.trim() == "male" ||
      formData.gender.trim() == "Male" ||
      formData.gender.trim() == "MALE"
    ) {
      if (formData.salary >= 30000) {
        toast.success('Done! We will contact us Soon.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      else {
        toast.error("You Salary is Below 30000.You are not illigible", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else if (
      formData.gender.trim() == "female" ||
      formData.gender.trim() == "Female" ||
      formData.gender.trim() == "FEMALE"
    ) {
      if (formData.salary >= 20000) {
        toast.success('Done! We will contact us Soon.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      else {
        toast.error("You Salary is Below 20000.You are not illigible", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    else{
      toast.error("Please Enter Valid Gender or Check Spelling.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setformData(initialState);
    console.log(formData)
  };

  return (
    <div>
      <span className="background"></span>
      <span className="centering">
        <form className="my-form" onSubmit={submitHandler}>
          <h1>Welcome to Loan App</h1>
          <div className="login-welcome-row">
            <img className="login-welcome" src={astronaut} alt="Astronaut" />
            <h5>Are you looking for loan? Give me your all info!</h5>
          </div>
          <div className="text-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Your Email"
            />
          </div>
          <div className="text-field">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={changeHandler}
              placeholder="Your Gender"
            />
          </div>
          <div className="text-field">
            <label htmlFor="salary">Salary:</label>
            <input
              id="salary"
              type="text"
              name="salary"
              value={formData.salary}
              onChange={changeHandler}
              placeholder="Your Salary"
            />
          </div>
          <div>
            <button className="my-form__button" type="submit">
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </span>
    </div>
  );
}

export default App;


<form onSubmit={createDoc}>
<div className="row">
  <div className="col">
    <input
      type="text"
      placeholder="Full Name"
      name="fullName"
      className="custom-input"
      onChange={(e) => {
        setFullName(e.target.value);
      }}
    />
  </div>
  <div className="col">
    <input
      type="number"
      placeholder="Age"
      name="age"
      className="custom-input"
      onChange={(e) => {
        setAge(e.target.value);
      }}
    />
  </div>
</div>
<div className="row mt-3">
  <div className="col text-center">
    <button className="custom-button">Add User</button>
  </div>
</div>
</form>