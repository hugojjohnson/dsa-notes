// import { Link } from "renact-router-dom";
// import { MathJax } from "better-react-mathjax"

import { Link } from "react-router-dom"

export default function Dashboard() {
    /** ========== Functions ========== **/
    const weekCard = ({ name, icon, bulletPoints, duration, questions, link }: { name: string, icon: string, bulletPoints: string[], duration: number, questions: number, link: string }) => {
        return <Link to={link} className="p-5 rounded-md bg-white m-10 mt-0">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl mb-5">{name}</h1>
                <div className="flex flex-row items-center justify-center gap-2">
                    <img src="misc/clock.png" alt="clock" className="w-6" />
                    <p>{duration} minutes</p>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <img src={icon} className="rounded-md w-32 h-32" />
                <div>
                    <ul className=" list-disc list-inside">
                        {bulletPoints.map(bulletPoint => <li>{bulletPoint}</li>)}
                    </ul>

                    <div className="inline-flex flex-row gap-2 items-center mt-6 bg-green-100 rounded-md p-1 pr-2">
                        <img src="misc/tick.png" alt="clock" className="w-7 h-7" />
                        <p className="text-green-600">{questions} questions</p>
                    </div>
                </div>
            </div>
        </Link>
    }

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col">
        <h1 className="text-4xl pt-5 mb-10">COMP2123 Notes and Exercises</h1>
        {
            weekCard({
                name: "Week 1: Big O notation",
                icon: "icons/o-n.png",
                bulletPoints: [
                    "Algorithms solve computational problems by defining steps from input to output.",
                    "Asymptotic analysis (Big - O, Ω, Θ) helps compare algorithm efficiency.",
                    "Correctness proofs ensure an algorithm always produces the expected result.",
                ],
                duration: 10,
                questions: 10,
                link: "1-big-o-notation"
            })
        }
        {
            weekCard({
                name: "Week 2: Arrays vs Linked Lists",
                icon: "icons/chain.jpg",
                bulletPoints: [
                    "Abstract Data Types (ADTs) define behavior, not implementation, for flexibility.",
                    "Array-based lists allow O(1) access but costly insertions/removals.",
                    "Linked lists support efficient insertions/deletions but lack random access.",
                ],
                duration: 15,
                questions: 5,
                link: "2-lists"
            })
        },
        {
            weekCard({
                name: "Week 3: Trees",
                icon: "icons/tree.png",
                bulletPoints: [
                    "Trees model hierarchical structures with parent - child relationships and a root.",
                    "Traversals include pre- order, in -order, and post - order for processing nodes.",
                    "Binary search trees enable efficient searching, insertion, and deletion in O(log n) time.",
                ],
                duration: 15,
                questions: 5,
                link: "3-trees"
            })
        },
        {
            weekCard({
                name: "Week 4: Binary Search Trees",
                icon: "icons/tree.png",
                bulletPoints: [
                    "BST property: Left subtree keys < node key < right subtree keys.",
                    "Operations: Search, insert, delete in O(h); best case O(logn).",
                    "Balancing: AVL trees maintain 𝑂(log⁡𝑛) height via rotations.",
                ],
                duration: 15,
                questions: 5,
                link: "4-bst"
            })
        },
        {
            weekCard({
                name: "Week 5: Priority Queues",
                icon: "icons/queue.jpg",
                bulletPoints: [
                    "Priority queues store key - value pairs and remove the smallest key.",
                    "Heaps enable efficient insertions and removals in O(log n) time.",
                    "Stock matching engines use priority queues for trade execution."
                ],
                duration: 15,
                questions: 5,
                link: "5-priority-queues"
            })
        }
    </div>
}