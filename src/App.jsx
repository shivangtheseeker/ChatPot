import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SigninForm from './auth/forms/SigninForm'
import { Home } from './_root/pages'
import SignupForm from './auth/forms/SignupForm'
import AuthLayout from './auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes*/}
        <Route element = {<AuthLayout/>}>
          <Route path='/sign-in' element = {<SigninForm />}/>
          <Route path='/sign-up' element = {<SignupForm/>}/> 
        </Route>
        
        {/*private routes*/}
        <Route element = {<RootLayout/>}>
          <Route index element = {<Home />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
