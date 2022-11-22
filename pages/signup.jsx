import React from 'react'

const signup = () => {

  
  return (
    
    <div className='SignupContainer'>
    <div class="container">

<div class="row">
    <div class="col-md-4">

    </div>

    <div class="col-md-6 main">
        <h1> Sign Up </h1>
        <form action="/sign_up" method="POST">

            <input type="text" class="na" id="name" name="name" placeholder="Name" required />
            <br/>
            <input type="email" class="na" id="email" name="email" placeholder="Email" required />
            <br/>
            <input type="number" class="na" id="phno" name="phno" placeholder="Mobile" required />
            <br/>
            <input type="text" class="na" id="password" name="password" placeholder="Password" required />
            <br/>
            <button onclick="validate()"  class="form-submit-button" type="submit" value="Submit" id="submit">Submit</button>
            <br/><br/>
            <button  class="form-submit-button" type="reset" value="Reset" id="reset">Reset</button>

            {/* <h5  style="text-align: right">&reg; Kushal D J</h5> */}
        </form>
    </div>
    <div class="col-md-4">
    </div>

</div>
</div>

    
    </div>
  )
}

export default signup