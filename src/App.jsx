import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import Sign from './components/Sign'
import Navbar from './components/Navbar'
import GetTable from './components/GetTable'



import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Buttons from './components/Buttons'
import Product from './components/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
<Route path="/table" element={<GetTable />}/>
<Route path="/state" element={<StateBasics/>}/>
<Route path="/counter" element={<Counter/>}/>
<Route path="/buttons" element={<Buttons/>}/>
<Route path="/product" element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
