import { Outlet } from "react-router-dom";

function LayoutNoFooter() {
    return (
        <div className="center">
            <div className="box">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutNoFooter;