import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/common";

export default function BaseLayout() {
    return (
        <>
            <Header />
            <div className="overflow-x-hidden min-h-[50vh]">
                <Outlet className="min-h-screen" />
            </div>
            <Footer />
        </>
    );
}
