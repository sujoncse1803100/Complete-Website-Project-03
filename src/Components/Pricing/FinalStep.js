import React, { useContext } from "react";
import { MultiStepContext } from "../../StepContex";
import congratulations from "../../Image/congratulations.jpg";

export const FinalStep = () => {
  const { userData,setUserData,setCurrentStep } = useContext(MultiStepContext);

  return (
    <div className="text-center">
      <div>
        <img style={{ borderRadius: "20px" }} src={congratulations} alt="" />
      </div>

      <div>
        <h3>Your Personal Information</h3>
        <div >
          <span>
            <b>Name : </b> {userData["name"]}
          </span><br />
          <span>
            <b>Age : </b> {userData["age"]}
          </span><br />
          <span>
            <b>Email : </b> {userData["email"]}
          </span><br />
          <span>
            <b>Phone : </b> {userData["phone"]}
          </span><br />
          <span>
            <b>Address : </b> {userData["address"]}
          </span><br />
          {userData["paymentId"] && (
            <span>
              <b>Payment Id : </b> {userData["paymentId"]}
            </span>
          )}
          <br />
        </div>
      </div>

      <button 
      onClick={()=> {
        setCurrentStep(0);
        setUserData([]);
      }} 
      className="btn btn-success mt-5">Go for new membership</button>
    </div>
  );
};
