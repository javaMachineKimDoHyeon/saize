function Order() {
    return (
        <div>
            <header style={{ marginBottom: 60 }}>メニューブックから番号を入力してください</header>
            <img src="logo.jpg" alt="logo" style={{ width: 200, margin: 'auto' }} />
            <div className='orderBtnCenter'>
                <div>
                    <input type="text" className='orderNumber' readOnly />
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
                    <button className='orderDelBtn'>削除</button>
                    <button className='orderBtn'>0</button>
                    <button className='orderOKBtn'>確認</button>
                </div>
            </div>

        </div>
    )
}

export default Order;