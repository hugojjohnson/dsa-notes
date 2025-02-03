import { Link } from "react-router-dom";

export default function Footer() {
    return <div className="w-screen h-56 bg-white pt-10 pl-10 flex flex-col gap-5">
        <h3 className="text-xl">Dsa Notes</h3>
            <Link to={"/feedback"}>Feedback</Link>
            <Link to={"/contact"}>Contact me</Link>
            <p></p>
    </div>
}