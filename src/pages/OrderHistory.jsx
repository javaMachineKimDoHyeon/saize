function OrderHistory() {
    return (
        <div>
            <header style={{ marginBottom: 10 }}>注文内容をご確認ください</header>
            <div className="itemBoxList2">

            </div>
            <div style={{ color: '#2eab20', marginBottom: '15px' }} >注文の反映には数分かかることがございます</div>
            <div className="basketDetail" style={{ marginRight: 100 }}>2点</div>
            <div className="basketDetail">合計 600円 (税込)</div>
        </div>
    )
}

export default OrderHistory;