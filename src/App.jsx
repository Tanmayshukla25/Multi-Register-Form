import { useState } from 'react';
import './App.css';
import Header from "./Header";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length) 
      setStep(step + 1);

  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

    
  const steps = [
    <div key={1}>
      <h2>Step 1</h2>
      <form>
        <input type="text" placeholder="Enter Your Name" required /><br />
        <input type="text" placeholder="Enter Your Father's Name" required /><br />
      </form>
    </div>,

    <div key={2}>
      <h2>Step 2</h2>
      <form>
        <input type="email" placeholder="Enter Your E-mail" /><br />
        <input type="password" placeholder="Enter Your Password" required /><br />
      </form>
    </div>,

    <div key={3}>
      <h2>Step 3</h2>
      <form>
        <input type="number" placeholder="Enter Your Number" required /><br />
        <input type="text" placeholder="Enter Your Address" required /><br />
      </form>
    </div>,

    <div key={4}>
      <h2>Step 4</h2>
      <button id="submitBtn">Registration</button>
    </div>
  ];

 
  return (
    <>
       <Header />
    
     
   <div id='container'>
   <div id="form-container">
        
        <div id="Heading">
          <h1>Multi Step Form</h1>
        </div>
{steps[step]}
   
     

      <div>
        {step > 0 && <button  id ="BackBtn"onClick={prevStep}>Back</button>}
        {step < 4 && <button id='NextBtn' onClick={nextStep}>Next</button>}
      </div>
      </div>
   </div>
    </>
  );
}

export default App;
