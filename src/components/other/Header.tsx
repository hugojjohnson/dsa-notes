import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Header(): React.ReactElement {
    /** ========== JSX ========== **/
    return (<>
        <div className="transition-opacity ease-in-out flex flex-row justify-between items-center p-3 shadow-md bg-white w-full absolute z-10">
            <Link to="/"><img src="misc/logo.png" alt="logo" className="w-12 h-12" /></Link>
            <Link to="/profile" className="flex flex-row items-center gap-3">
                <p>Username</p>
                <img className="h-14 w-14 p-2 rounded-full" src="profiles/default.png" alt="profile pic" />
            </Link>
        </div>
        <div className="absolute w-full bg-slate-50 min-h-screen">
            <Outlet />
            <Footer />
        </div>
    </>);
}