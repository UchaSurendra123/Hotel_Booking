import React  from 'react'
import ImageSection from './ImageSection'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-light-gray flex">
      <ImageSection />
      <LoginForm />
    </div>
  )
}

export default LoginPage
