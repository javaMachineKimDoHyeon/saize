import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

let StartFooter = styled.div`
    background : #2eab20;
    padding : 35px;
    color : #eee;
  `;

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
        <div>SAIZE Image</div>
        <div>イタリアンワイン＆カフェレストラン</div>
        <div>サイゼリヤ</div>
        <button>注文をはじめる</button>
        <StartFooter>ⓒ2026 Saizeriya Co,. Ltd. All rights reserved.</StartFooter>
      </div>
    </div>
  )
}

export default App
