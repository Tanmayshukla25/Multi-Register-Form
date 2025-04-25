import { useState } from "react";
import "./App.css";
import Header from "./Header";
import contactimg from "./images/contactimg.png";
import loginimg from "./images/loginimg-removebg-preview.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function App() {
  const [step, setStep] = useState(0);
  const [storeData, setStoreData] = useState({
    firstName: "",
    email: "",
    password: "",
    confpass: "",
    phone: "",
    Address: "",
    messagebox: "",
  });

  function handelClick(e) {
    const { id, value } = e.target;
    console.log( id);
    setStoreData((prev) => ({
      ...prev,
      [id]: value,
    }));
   
    
  }

  function SigninBtn(e) {
    e.preventDefault();
    if (storeData.password.length < 6) {
      alert("Please enter at least 6 digit password");
    } else if (storeData.password !== storeData.confpass) {
      alert("Passwords do not match");
    } else {
      nextStep();
    }
  }

  function ContactBtn(e) {
    e.preventDefault();
    if (storeData.phone.length < 10) {
      alert("Please enter at least 10 digit phone number");
    } else {
      handleSubmit();
    }
  }



function handleSubmit() {
  let prevData = [];


    const stored = localStorage.getItem("userData");
    prevData = Array.isArray(JSON.parse(stored)) ? JSON.parse(stored) : [];
 

  const updatedData = [...prevData, storeData]; 

  localStorage.setItem("userData", JSON.stringify(updatedData));

  setStoreData({
    firstName: "",
    email: "",
    password: "",
    confpass: "",
    phone: "",
    Address: "",
    messagebox: "",
  });

  alert("Form submitted successfully!");
  setStep(0);
}


  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const steps = [
    <div key={1}>
      <div id="HomePage">
        <div id="head">
          <h1>Login & Registration Form</h1>
        </div>
        <div id="InputDiv">
          <h1>Sign-Up</h1>
          <form>
            <input type="text" id="firstName" placeholder="Username" required value={storeData.firstName} onChange={handelClick}
            />
            <br />
            <input type="email" id="email" placeholder="Email Id" required value={storeData.email} onChange={handelClick} />

            <br />
            <input type="password"id="password"placeholder="Password"required value={storeData.password}onChange={handelClick}
            />
            <br />
            <input type="password" id="confpass" placeholder="Confirm Password" required value={storeData.confpass} onChange={handelClick}
            />
            <br />
            <button id="btnaccount" onClick={SigninBtn}>
              Sign-In
            </button>
          </form>
        </div>
      </div>
    </div>,

    <div key={2}>
      <div id="HomePage">
        <div id="contactpage">
          <img src={contactimg} alt="Contact" />
        </div>
        <div id="InputDiv2">
          <h1>Contact Us</h1>
          <form>
            <input type="tel" id="phone"placeholder="Phone Number"required value={storeData.phone}onChange={handelClick}
            />
            <br />
            <input type="text"id="Address"placeholder="Address"requiredvalue={storeData.Address}onChange={handelClick}
            />
            <br />
            <input type="text"id="messagebox"placeholder="Message"required value={storeData.messagebox}onChange={handelClick}
            />
            <br />
            <button id="btnaccount" onClick={ContactBtn}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>,

    <div key={3}>
      <div id="HomePage">
        <div id="contactpage">
          <img src={loginimg} alt="Login" />
        </div>
        <div id="InputDiv3">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" required />
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <button id="btnaccount" onClick={(e) => e.preventDefault()}>
              Register
            </button>
            <p>
              Forget <span id="forget">Username/password</span>?
            </p>
          </form>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <Header />

      <div id="container">
        <div id="form-container">
          {steps[step]}

          <div>
            {step > 0 && <FaArrowLeft onClick={prevStep} id="arrowleft" />}
            {step < steps.length - 1 && (
              <FaArrowRight onClick={nextStep} id="arrowRight" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
