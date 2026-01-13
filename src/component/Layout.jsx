import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="center">
            <div className="box">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;