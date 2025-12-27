import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {

    return (
            <div className="min-h-[100svh] flex flex-col">
                <Header/>
                <main className="flex-1 flex bg-zinc-800">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
    )
        ;
}

export default Layout;
