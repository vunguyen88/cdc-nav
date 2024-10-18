import React from 'react';
import './Stepper.css'; // Import the above CSS

const Stepper = ({ steps, currentStep }) => {
  return (
    // <div className="steps-container">
    //   {steps.map((step, index) => {
    //     console.log('currentStep ', currentStep)
    //     console.log('step ', step)
    //     return(
    //     <div
    //       key={index}
    //       className={`steps ${index < currentStep ? 'completed' : ''} ${
    //         index === currentStep ? 'active' : ''
    //       }`}
    //     >
    //       <span>{step}</span>
    //     </div>
    //     )
    //   })}
    // </div>
    <ul className="steps-container">
      {steps.map((step, index) => {
        console.log('currentStep ', currentStep)
        console.log('step ', step)
        return(
        <li
          key={index}
          className={`steps ${index < currentStep ? 'completed' : ''} ${
            index === currentStep ? 'active' : ''
          }`}
        >
          <span className="span">{step}</span>
        </li>
        )
      })}
    </ul>
  );
};

export default Stepper;
