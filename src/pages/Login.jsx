import React, { useState } from 'react'

function Login() {
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  function change() {
    setToggle(!toggle);
  }
  return (
    <div>
      <center className='flex flex-col gap-3 w-[40%] my-20 m-auto checkcol'>
        <div className='mb-8 text-3xl'>
          <h1>{toggle ? "Login" : "Sign In"}</h1>
        </div>
        {toggle ? "" :
          <input className='bg-slate-200 py-2 px-2' value={name} onChange={i => setName(i.target.value)} type="name" placeholder='Name' />
        }
        <input className='bg-slate-200 py-2 px-2' value={email} onChange={i => setEmail(i.target.value)} type="email" placeholder='E-mail' />
        <input className='bg-slate-200 py-2 px-2' value={pass} onChange={i => setPass(i.target.value)} type="password" placeholder='Password' />
        <div className=' flex justify-between'>
          <label className='font-light'>
            <input type="checkbox" name="" id="" className='mr-1' />Remember me
          </label>
          <p className='text-blue-500 cursor-pointer ' onClick={change}>Click here to {toggle ? "sign in" : "login"}</p>
        </div>
        <button className='bg-[#d4408c] text-white py-3 w-[40%] mx-auto rounded-md'>{toggle ? "Login" : "Sign Up"}</button>
      </center>
    </div>
  )
}

export default Login