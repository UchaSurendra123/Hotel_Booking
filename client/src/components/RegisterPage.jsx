import React from 'react'
import LeftPanel from './LeftPanel'
import RegisterForm from './RegisterForm'

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-light-gray font-poppins">
      <LeftPanel />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
