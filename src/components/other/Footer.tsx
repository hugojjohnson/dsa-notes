import { Link } from "react-router-dom";

export default function Footer() {
    return <div className="w-screen h-56 bg-white pt-10 pl-10 flex flex-row justify-around">
        <div className="flex flex-col gap-3">
            <h3 className="text-xl">Logical pupil</h3>
            <Link to={"/sign-in"}>Sign in</Link>
            <Link to={"/sign-up"}>Sign up</Link>
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-xl">Help</h3>
            <Link to={"/sign-in"}>Help</Link>
            <Link to={"/privacy"}>Privacy policy</Link>
            {/* <Link to={"/sign-up"}>Sign up</Link> */}
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-xl">Contact</h3>
            <Link to={"/sign-in"}>Contact us</Link>
            {/* <Link to={"/sign-up"}>Sign up</Link> */}
        </div>
    </div>
}