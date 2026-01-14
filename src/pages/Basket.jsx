function Basket() {
    return(
        <div>
            <header style={{marginBottom : '22px'}}>他に注文があれば「追加」、なければ「注文」</header>
            <div className="itemBoxList">
                <Item />
                <Item />
                <Item />
            </div>
            <div className="basketDetail" style={{marginRight:100}}>2点</div>
            <div className="basketDetail">合計 600円(税込)</div>
            <div>
                <button className="basketBtn">追　加</button>
                <button className="basketBtn" style={{background : '#bf261b'}}>注　文</button>
            </div>
        </div>
    )
}

function Item() {
    return(
        <div className="item">
            <div className="menuName">
                ﾗﾝﾁ)ﾀﾗｺｿｰｽｼｼﾘｰ風
            </div>
            <button className="countBtn">-</button>
            <input className="countInput" type="text" />
            <button className="countBtn">+</button>
        </div>
    )
}

export default Basket