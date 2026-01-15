import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Layout, LayoutNoFooter } from './component/Layout'
import { Start, NumberOfPeople, Order, OrderDetails, Basket, OrderHistory } from './pages'

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
          <Route path='/orderDetails' element={ <OrderDetails /> } />
          <Route path='/basket' element={ <Basket /> }/>
          <Route path='/orderHistory' element={ <OrderHistory /> } />
        </Route>
      </Routes>
    </div>
  )
}



export default App
