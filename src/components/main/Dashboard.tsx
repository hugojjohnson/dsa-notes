// import { Link } from "renact-router-dom";
// import { MathJax } from "better-react-mathjax"

import { Link } from "react-router-dom"

export default function Dashboard() {
    /** ========== Functions ========== **/
    const weekCard = ({ name, icon, bulletPoints, duration, questions, link }: { name: string, icon: string, bulletPoints: string[], duration: number, questions: number, link: string }) => {
        return <Link to={link} className="p-5 rounded-md bg-white m-10">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl mb-5">{name}</h1>
                <div className="flex flex-row items-center justify-center gap-2">
                    <img src="log-icons/4.jpg" alt="clock" className="w-10 h-10" />
                    <p>{duration} minutes</p>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <img src={icon} className="rounded-md w-32 h-32" />
                <div>
                    <ul className=" list-disc list-inside">
                        {bulletPoints.map(bulletPoint => <li>{bulletPoint}</li>)}
                    </ul>

                    <div className="inline-flex flex-row gap-2 items-center mt-6 bg-red-100 rounded-md p-1 pr-2">
                        <img src="log-icons/3.png" alt="clock" className="w-7 h-7" />
                        <p className="text-red-600">{questions} questions</p>
                    </div>
                </div>
            </div>
        </Link>
    }

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col">
        <h1 className="text-4xl pt-5">COMP2123 Notes and Exercises</h1>
        {
            weekCard({
                name: "Week 1: Big O notation",
                icon: "/log-icons/1.jpg",
                bulletPoints: [
                    "Algorithms solve computational problems by defining steps from input to output.",
                    "Asymptotic analysis (Big - O, Ω, Θ) helps compare algorithm efficiency.",
                    "Correctness proofs ensure an algorithm always produces the expected result.",
                ],
                duration: 10,
                questions: 10,
                link: "one"
            })
        }
        {
            weekCard({
                name: "Week 2: Something else",
                icon: "/log-icons/5.jpg",
                bulletPoints: [
                    "Find another skill to add",
                    "Probably ask ChatGPT",
                    "She'll be Alright"
                ],
                duration: 15,
                questions: 5,
                link: "one"
            })
        }
    </div>
}