import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export function Layout() {
    return (
        <div className="center">
            <div className="box">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export function LayoutNoFooter() {
    return (
        <div className="center">
            <div className="box">
                <Outlet />
            </div>
        </div>
    );
}