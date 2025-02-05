import { MathJax } from "better-react-mathjax";
import Tip from "../../other/Tip";
import { useState } from "react";
import { Question } from "../Question";
import { Q2generateQ1 } from "../questions/2-question";


/**
 * Tailwind components to make:
 *  Heading
 *  Subheading
 *  Tip
 *  Warning
**/
export default function Two() {
    const callback = () => {
        setIndex(index + 1)
    }

    const questions = [Q2generateQ1]
    const [index, setIndex] = useState(0)

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
        <h1 className="text-4xl pt-5">Week 2: Lists</h1>

        <h1>Key Takeaways</h1>
        <ul>
            <li>Abstract Data Types (ADTs) define behavior, not implementation, for flexibility.</li>
            <li>Array-based lists allow O(1) access but costly insertions/removals.</li>
            <li>Linked lists support efficient insertions/deletions but lack random access.</li>
        </ul>

        <h1>Key concepts</h1>
        <h2>Abstract Data Types (ADT) & General List Concepts</h2>
        ADTs define operations on data without specifying implementation details.
        Separating ADT from implementation improves code reusability and abstraction.
        Index-based lists store elements at numbered positions (zero-based indexing).
        Positional lists maintain references to elements rather than indices.
        ADTs improve modularity, allowing different implementations with the same interface.

        <h2>Array-Based Lists: Strengths, Limitations, and Operations</h2>
        Arrays provide O(1) access time for retrieving and updating elements.
        Insertion and deletion require shifting elements, making them O(n) in worst case.
        Array-based lists require pre-allocated memory, leading to wasted space.
        Dynamic arrays resize automatically but involve occasional O(n) copying overhead.
        get(i) and set(i, e) run in O(1) time, independent of list size.
        Adding/removing elements at the end is efficient, but middle operations are costly.
        Resizing an array-based list typically doubles its capacity to balance cost.

        <h2>Linked Lists: Singly & Doubly Linked Structures</h2>
        Singly linked lists store elements in nodes connected by "next" references.
        get(i) is O(n) since traversal is required, unlike arrays.
        Insertion and deletion at any position are O(1) if the position is known.
        Finding a predecessor in a singly linked list requires O(n) traversal.
        Doubly linked lists allow O(1) insertions/removals at both ends and in the middle.
        Each node in a doubly linked list has "prev" and "next" pointers.
        Sentinel nodes (header/trailer) simplify insertion and deletion logic.
        Linked lists use extra memory for pointers but avoid array resizing issues.

        <Tip>
            <p>Common mistake</p>
            <MathJax>The coefficients of the terms don't matter in big-O notation. So $2000n$, $n + 1$ and $n + 3834$ are all $O(n)$, since the fastest growing term is $n$ in all of these cases.</MathJax>
        </Tip>

        <p>Big-Θ (Θ): The tight bound, meaning the algorithm runs in at least and at most this complexity.</p>
        <p>Big-Ω (Ω): The lower bound, meaning the algorithm takes at least this much time, but possibly more.</p>


        <h1>Questions</h1>
        <div className="p-3 mx-64 mt-10 min-h-32 rounded-md bg-white border-[1.5px] border-gray-200 inline-block">
            {index > questions.length - 1
                ? <div className="w-full h-32 flex justify-center items-center"><p>You're all done! Go on to the next week, or refresh the page to try the questions again.</p></div>
                : <Question key={index} callback={callback} generate={questions[index]} />
            }
        </div>

        <div className="h-[25vh]"></div> {/* spacing */}
    </div>
}