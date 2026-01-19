function OrderHistory() {
    return (
        <div>
            <header style={{ marginBottom: 10 }}>注文内容をご確認ください</header>
            <div className="itemBoxList2">
                <table>
                    <tr>
                        <th>メニュー名</th>
                        <th>数量</th>
                        <th>価格</th>
                    </tr>
                    <tr>
                        <td>ペペロンチーノ</td>
                        <td>1</td>
                        <td>300</td>
                        <td><button>再注文</button></td>
                    </tr>
                    <tr>
                        <td>コーンクリームスープ</td>
                        <td>2</td>
                        <td>150</td>
                        <td><button>再注文</button></td>
                    </tr>
                </table>
            </div>
            <div style={{ color: '#2eab20', marginBottom: '15px' }} >注文の反映には数分かかることがございます</div>
            <div className="basketDetail" style={{ marginRight: 100 }}>2点</div>
            <div className="basketDetail">合計 600円 (税込)</div>
        </div>
    )
}

export default OrderHistory;