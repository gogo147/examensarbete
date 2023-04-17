import React from "react";

export default function UserHome({ userData }) {
  
  const next = () => {
    window.location.href = "./web";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h1>Welcome</h1>
          <br />
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          Continue to our website
          <br />
          <button onClick={next} className="btn btn-primary">
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
}
