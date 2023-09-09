import React from 'react'
import logo from "../assets/logo.jpeg"
import { useState } from 'react'

const Signup = () => {
  const [data, setData] = useState({})

  const updateData = e => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      })
  }

  const submit = e => {
      e.preventDefault()
      console.log(data)
  }



  return (
    <div className="flex   min-h-full flex-col justify-center px-6 py-12 lg:px-8  h-screen">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-29 w-auto" src={logo} alt="Your Company"/>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={submit} className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input  onChange={updateData} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-[#5C8F64] ">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input  onChange={updateData} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-[#5C8F64] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
  
      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="#" className="font-semibold leading-6 text-[#5C8F64]">Create a account</a>
      </p>
    </div>
  </div>
  )
}

export default Signup;

