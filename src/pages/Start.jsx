import { useNavigate } from 'react-router-dom'

function Start() {
  let navigate = useNavigate()
  return (
    <>
      <header>いらっしゃいませ</header>
      <img className='language' src="language.jpg" alt="language" style={{ width: 100, float: 'right' }} />
      <img src="firstLogo.jpg" alt="logo" />
      <div style={{ textAlign: 'center' }}>
        <button className='startBtn' onClick={() => { navigate('/numberOfPeople') }} >注文をはじめる</button>
      </div>
      <div className='startFooter'>ⓒ2026 Saizeriya Co,. Ltd. All rights reserved.</div>
    </>
  )
}

export default Start;