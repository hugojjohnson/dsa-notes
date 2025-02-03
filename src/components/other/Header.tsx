import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Header(): React.ReactElement {
    /** ========== JSX ========== **/
    return (<>
        <div className="transition-opacity ease-in-out flex flex-row justify-between items-center p-3 shadow-md bg-white w-full absolute z-10">
            <Link to="/"><img src="misc/home.png" alt="logo" className="w-6 m-2" /></Link>
        </div>
        <div className="flex flex-col justify-between absolute w-full bg-slate-50 min-h-screen">
            <Outlet />
            <Footer />
        </div>
    </>);
}