import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Layout, LayoutNoFooter } from './component/Layout'
import { Start, NumberOfPeople, Order } from './pages'

// import Start from './pages/Start'
// import NumberOfPeople from './pages/NumberOfPeople'
// import Order from './pages/Order'

import './App.css'

function App() {
  return (
    <div>
      <Routes>

        <Route element={<LayoutNoFooter />}>
          <Route path='/' element={<Start />} />
        </Route>

        <Route element={<Layout />}>
          <Route path='/numberOfPeople' element={<NumberOfPeople />} />
          <Route path='/order' element={<Order />} />
        </Route>
      </Routes>
    </div>
  )
}



export default App
