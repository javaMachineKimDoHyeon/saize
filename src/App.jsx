import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

function App() {

  return (
    <div>
      <Start></Start>
    </div>
  )
}

function Start() {

  return (
    <div className='center'>
      <div className='box'>
        <header>いらっしゃいませ</header>
        <img className='language' src="language.jpg" alt="language" style={{ width: 100, float: 'right' }} />
        <img src="firstLogo.jpg" alt="logo" />
        <div style={{ textAlign : 'center'}}>
          <button className='orderButton'>注文をはじめる</button>
        </div>
        <div className='startFooter'>ⓒ2026 Saizeriya Co,. Ltd. All rights reserved.</div>
      </div>
    </div>
  )
}

export default App
