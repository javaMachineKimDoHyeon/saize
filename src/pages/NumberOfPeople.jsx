import Footer from "../component/Footer";

function NumberOfPeople() {
  return (
    <>
      <header>何名様(全員)でご利用ですか？</header>
      <div className='peopleBtnCenter'>
        <div>
          <button className='peopleBtn'>1人</button>
          <button className='peopleBtn'>2人</button>
          <button className='peopleBtn'>3人</button>
        </div>
        <div>
          <button className='peopleBtn'>4人</button>
          <button className='peopleBtn'>5人</button>
          <button className='peopleBtn'>6人</button>
        </div>
        <div>
          <button className='peopleBtn'>7人</button>
          <button className='peopleBtn'>8人</button>
          <button className='peopleBtn'>9人</button>
        </div>
      </div>
    </>
  )
}

export default NumberOfPeople;