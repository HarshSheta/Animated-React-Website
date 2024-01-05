import React, { useState } from 'react'

const Contect = () => {
  const [data, setData] = useState({
    fullname: '', phone: '', email: '', msg: '',
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal, [name]: value,
      }
    })
  };

  const formSubmit = (e) => {
    e.preventDefault()
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and my email is ${data.email}, Here is what I want to say ${data.msg}`)
  }

  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contect Us</h1>
      </div>
      <div className="container contect_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} action="">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={InputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contect