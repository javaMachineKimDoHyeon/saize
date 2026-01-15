import { useNavigate } from "react-router-dom";

function Footer() {

    let navigate = useNavigate();

    return (
        <footer>
            <button onClick={()=> navigate('/order')}>注文追加</button>
            <button onClick={()=> navigate('/basket')}>注文かご</button>
            <button onClick={()=> navigate('/orderHistory')}>注文履歴</button>
            <button>店員呼出</button>
            <button>会計する</button>
        </footer>
    )
}  

export default Footer;