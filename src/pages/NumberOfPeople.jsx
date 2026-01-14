import { useNavigate } from "react-router-dom";

function NumberOfPeople() {
  let navigate = useNavigate()
  
  return (
    <>
      <header>何名様(全員)でご利用ですか？</header>
      <div className='peopleBtnCenter'>
        <div>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>1人</button>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>2人</button>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>3人</button>
        </div>
        <div>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>4人</button>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>5人</button>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>6人</button>
        </div>
        <div>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>7人</button>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>8人</button>
          <button className='peopleBtn' onClick={()=> navigate('/order')}>9人</button>
        </div>
      </div>
    </>
  )
}

export default NumberOfPeople;