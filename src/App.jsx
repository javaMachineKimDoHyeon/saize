import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Start from './pages/Start'
import NumberOfPeople from './pages/NumberOfPeople'

import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/numberOfPeople' element={<NumberOfPeople />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
  )
}

function Order() {
  return (
    <div>
      <div className='center'>
        <div className='box'>
          <header>メニューブックから番号を入力してください</header>
          <img src="logo.jpg" alt="logo" style={{ width: 200, margin: 'auto'}} />
          <div className='orderBtnCenter'>
            <div>
              <input type="text" className='orderNumber' readOnly/>
            </div>
            <div>
              <button className='orderBtn'>1</button>
              <button className='orderBtn'>2</button>
              <button className='orderBtn'>3</button>
            </div>
            <div>
              <button className='orderBtn'>4</button>
              <button className='orderBtn'>5</button>
              <button className='orderBtn'>6</button>
            </div>
            <div>
              <button className='orderBtn'>7</button>
              <button className='orderBtn'>8</button>
              <button className='orderBtn'>9</button>
            </div>
            <div>
              <button className='orderBtn' style={{ backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: 'rgba(0,0,0,0)'}}>1</button>
              <button className='orderBtn'>0</button>
              <button className='orderDelBtn'>削除</button>
            </div>
          </div>
          <footer>
            <button>注文追加</button>
            <button>注文かご</button>
            <button>注文履歴</button>
            <button>店員呼出</button>
            <button>会計する</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
