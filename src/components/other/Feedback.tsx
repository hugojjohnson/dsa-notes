// import { Link } from "renact-router-dom";
// import { MathJax } from "better-react-mathjax"

import { Link } from "react-router-dom"

export default function Feedback() {
    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col">
        <h1 className="text-4xl pt-5">Feedback</h1>
        <p className="mt-6">Spotted an incorrect question? Have an idea for a new exercise? Send a message and I'll get back to you as soon as I can.</p>
        <div className="p-3 mt-6 min-h-16 w-[60%] rounded-md bg-white border-[1.5px] border-gray-200 inline-block">
            <p>Email</p>
            <input className="border-[1.5px] border-gray-200 p-2 rounded-md w-full" />
            <p>Feedback</p>
            <textarea className="w-full min-h-64 border-[1.5px] border-gray-200 p-2 rounded-md" />
            <button className="border-[1.5px] border-blue-200 p-2 rounded-md hover:bg-blue-50 hover:border-blue-300">Submit</button>
        </div>


    </div>
}