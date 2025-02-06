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
                <img src={icon} className="rounded-md w-32 object-contain" />
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
                icon: "icons/array.png",
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
        },
        {
            weekCard({
                name: "Week 6: Hash Tables",
                icon: "icons/hash-tables.png",
                bulletPoints: [
                    "Hash tables provide O(1) expected time for insert, search, delete.",
                    "Collisions are handled using chaining, probing, or cuckoo hashing methods.",
                    "Load factor affects performance; resizing may be required for efficiency.",
                ],
                duration: 15,
                questions: 5,
                link: "6-hash-tables"
            })
        },
        {
            weekCard({
                name: "Week 7: Graph Traversals",
                icon: "icons/graph.jpg",
                bulletPoints: [
                    "Graphs consist of vertices(nodes) and edges(connections between them).",
                    "DFS explores deeply first, while BFS visits breadth- wise level - by - level.",
                    "Graph algorithms help find paths, cycles, and shortest distances.",
                ],
                duration: 15,
                questions: 5,
                link: "7-graph-traversals"
            })
        }
        {
            weekCard({
                name: "Week 8: Shortest Path",
                icon: "icons/shortest-path.png",
                bulletPoints: [
                    "Dijkstra’s algorithm finds shortest paths in graphs with nonnegative weights.",
                    "Minimum Spanning Trees (MST) minimize total edge weight in graphs.",
                    "Prim’s and Kruskal’s algorithms efficiently compute MST using different approaches.",
                ],
                duration: 15,
                questions: 5,
                link: "8-shortest-path"
            })
        }
        {
            weekCard({
                name: "Week 9: Greedy Algorithms",
                icon: "icons/backpack.png",
                bulletPoints: [
                    "Greedy algorithms make locally optimal choices to build a solution.",
                    "Fractional knapsack is optimally solved using benefit - to - weight ratio.",
                    "Huffman encoding efficiently compresses text using a greedy tree.",
                ],
                duration: 15,
                questions: 5,
                link: "9-greedy-algorithms"
            })
        }
        {
            weekCard({
                name: "Week 10: Divide and Conquer I",
                icon: "icons/conqueror.png",
                bulletPoints: [
                    "Divide and Conquer splits problems, solves subproblems, and merges solutions efficiently.",
                    "Binary search runs in O(log n) by halving the search space.",
                    "Merge sort achieves O(n log n) by recursively sorting halves.",
                ],
                duration: 15,
                questions: 5,
                link: "10-divide-and-conquer-1"
            })
        }
        {
            weekCard({
                name: "Week 11: Divide and Conquer II",
                icon: "icons/recursion-tree.jpg",
                bulletPoints: [
                    "Divide and Conquer: Split problem, recursively solve, merge solutions for efficiency.",
                    "Maxima-Set Algorithm: Sort, split, solve each half, merge non-dominated points.",
                    "Karatsuba Multiplication: Reduces complexity using three recursive calls, faster computation."
                ],
                duration: 15,
                questions: 5,
                link: "11-divide-and-conquer-2"
            })
        }
        {
            weekCard({
                name: "Week 12: Randomised Algorithms",
                icon: "icons/dice.png",
                bulletPoints: [
                    "Randomised algorithms use randomness to improve efficiency and avoid worst cases.",
                    "Fisher - Yates algorithm ensures uniform random permutations in O(n) time.",
                    "Skip lists offer O(log n) search, insert, and delete performance."
                ],
                duration: 15,
                questions: 5,
                link: "12-randomised-algorithms"
            })
        }        
    </div>
}