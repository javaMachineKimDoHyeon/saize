function OrderDetails() {
    return (
        <div>
            <header>数量を選択してください</header>
            <div className="DetailsCenter">
                <div>
                    <div style={{display : 'inline-block', marginRight : 30}}>たっぷりコンのピザ</div>
                    <div style={{display : 'inline-block', marginLeft : 30}}>400円</div>
                </div>
                <div>
                    <button className="countBtn">-</button>
                    <input className="countInput" type="text" value={1}/>
                    <button className="countBtn">+</button>
                </div>
                <div>
                    <button className="detailsBtn">もどる</button>
                    <button className="detailsBtn2">注文かごへ追加する</button>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails