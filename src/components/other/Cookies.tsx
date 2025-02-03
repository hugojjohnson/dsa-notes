import React, { useEffect, useState } from "react";

export default function Cookies({ setShowCookies }: { setShowCookies: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const alreadyDone = localStorage.getItem("allowsCookies")

        if (alreadyDone) {
            setVisible(false)
            setShowCookies(false)
        }
    }, [])

    const handleClose = () => {
        // setIsFading(true);
        setVisible(false)
        setTimeout(() => {
            localStorage.setItem("allowsCookies", "true")
            setShowCookies(false);
        }, 1000); // Match this duration with the Tailwind transition duration
    };

    return <div className={`fixed h-44 w-[600px] bg-white shadow-md rounded-md p-5 bottom-10 left-10 ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <h1 className="text-lg">Wait! There's cookies</h1>
        <hr className="my-2" />
        <p>This website uses cookies to function, but not for advertising. So by visiting it you are allowing necessary cookies to be stored in your browser.</p>
        <button onClick={handleClose} className="text-lg mt-2 shadow-md rounded-md block mx-auto p-2 border-gray-200 border-[1px]">Accept</button>
    </div>
}