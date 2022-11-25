import React from 'react';

const signup = () => {
  return (
<<<<<<< HEAD
    
    <div className='SignupContainer'>
        
=======
    <div className="SignupContainer">
      <div className="mainContainer">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-6 main">
            <h1> Sign Up </h1>
            <form action="/sign_up" method="POST">
              <input
                type="text"
                className="na"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <br />
              <input
                type="email"
                className="na"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <br />
              <input
                type="text"
                className="na"
                id="phno"
                name="phno"
                placeholder="Mobile"
                required
              />
              <br />
              <input
                type="text"
                className="na"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <br />
              <button
                onclick="validate"
                className="form-submit-button"
                type="submit"
                value="Submit"
                id="submit"
              >
                Submit
              </button>
              <br />
              <br />
              <button
                className="form-submit-button"
                type="reset"
                value="Reset"
                id="reset"
              >
                Reset
              </button>

              {/* <h5  style="text-align: right">&reg; Kushal D J</h5> */}
            </form>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
>>>>>>> b48cdc769a395af0e8acdf990bb1733fe7fbc0da
    </div>
  );
};

export default signup;
