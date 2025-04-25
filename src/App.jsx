import { useState } from "react";
import "./App.css";
import Header from "./Header";
import contactimg from "./images/contactimg.png";
import loginimg from "./images/loginimg-removebg-preview.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  function SigninBtn(e) {
    e.preventDefault();
    if (pass.value.length < 6) {
      alert("Please enter atleast 6 digit password ");
    } else if (confpass.value.length !== pass.value.length) {
      alert("Please enter correct password");
    }  
  }

  function ContactBtn(params) {
     if (phone.value.length < 10) {
      alert("Please enter atleast 10 digit Number ");
    }
  }

  const steps = [
    <div key={1}>
      <div id="HomePage">
        <div id="head">
          <h1>Login & Registration Form</h1>
        </div>
        <div id="InputDiv">
          <h1>Sign-Up</h1>
          <form action="">
            <input type="text" id="first" placeholder="Username" required />
            <br />
            <input type="Email" id="email" placeholder="Email Id" required />
            <br />
            <input type="Password" id="pass" placeholder=" Password" required />
            <br />
            <input type="Password"id="confpass"placeholder=" Confirm-Password"required />
            <br />
            <button id="btnaccount" onClick={SigninBtn}>
              Sign-In
            </button>
          </form>
        </div>1
      </div>
    </div>,

    <div key={2}>
      <div id="HomePage">
        <div id="contactpage">
          <img src={contactimg} alt="" />
        </div>
        <div id="InputDiv2">
          <h1>Contact-Us</h1>
          <form action="">
            <input type="Number" id="phone" placeholder="Phone Number" required />
            <br />
            <input type="Address" placeholder="Address" required />
            <br />
            <input type="text" id="messagebox" placeholder="Message" required />
            <br />

            <button id="btnaccount" onClick={ContactBtn}>
              Create-Account.
            </button>
          </form>
        </div>
      </div>
    </div>,

    <div key={3}>
      <div id="HomePage">
        <div id="contactpage">
          <img src={loginimg} alt="" />
        </div>
        <div id="InputDiv3">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" required />
            <br />
            <input type="Password" placeholder="Password" required />
            <br />
            <button id="btnaccount" onClick={SigninBtn}>
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
            {step < 2 && <FaArrowRight onClick={nextStep} id="arrowRight" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
