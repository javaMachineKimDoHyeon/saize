function OrderDetails() {
    return (
        <div>
            <header>数量を選択してください</header>
            <div className="DetailsCenter">
                <div>
                    <div>たっぷりコンのピザ</div>
                    <div>400円</div>
                </div>
                <div>
                    <button className="countBtn">-</button>
                    <input className="countInput" type="text" />
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