import { MathJax } from "better-react-mathjax";
import Tip from "../../other/Tip";
import { useState } from "react";
import { Question } from "../Question";
import { generateQ1, generateQ2, generateQ3 } from "../questions/1-question";


/**
 * Tailwind components to make:
 *  Heading
 *  Subheading
 *  Tip
 *  Warning
**/
export default function Dashboard() {
    const callback = () => {
        setIndex(index + 1)
    }

    const questions = [generateQ1, generateQ2, generateQ3]
    const [index, setIndex] = useState(0)

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
        <h1 className="text-4xl pt-5">Week 1: Big-O Notation</h1>

        <h1>Key Takeaways</h1>
        <ul>
            <li>Algorithms solve computational problems by defining steps from input to output.</li>
            <li>Asymptotic analysis (Big-O, Ω, Θ) helps compare algorithm efficiency.</li>
            <li>Correctness proofs ensure an algorithm always produces the expected result.</li>
        </ul>

        <h1>Key concepts</h1>
        <h2>Pseudocode</h2>
        <p>Pseudocode is a structured way to describe an algorithm without using a specific programming language. It allows focusing on logic rather than syntax.</p>

        <h2>Common Pseudocode Commands:</h2>
        <ul>
            <li>Control Flow: if ... then ... [else ...], while ... do ..., repeat ... until ..., for ... do ...</li>
            <li>Method Calls: method(arg1, arg2, ...)</li>
            <li>Return Values: return expression</li>
        </ul>

        <h2>Correctness and Running Time</h2>
        <ul>
            <li>Correctness ensures that an algorithm always produces the right output.</li>
            <li>Running Time analysis helps determine if an algorithm is efficient. A slow algorithm may be impractical for large inputs.</li>
        </ul>

        <h2>Big-O Notation (O-notation)</h2>
        <p>Used to describe the worst-case time complexity of an algorithm by focusing on the fastest-growing term.</p>
        <div className="flex flex-row pt-1">
            <ul>
                <li>Constants: O(1)</li>
                <li>Logarithmic: O(log n)</li>
                <li>Linear: O(n)</li>
                <li>Polynomial: O(n^c)</li>
                <li>Exponential: O(2^n)</li>
                <li>Factorial: O(n!)</li>
            </ul>
            <div className="flex flex-col justify-between pl-5">
                <p className="text-green-500">&#8592; Slowest growing</p>
                <p className="text-red-500">&#8592; Fastest growing</p>
            </div>
        </div>

        <Tip>
            <p>Common mistake</p>
            <MathJax>The coefficients of the terms don't matter in big-O notation. So $2000n$, $n + 1$ and $n + 3834$ are all $O(n)$, since the fastest growing term is $n$ in all of these cases.</MathJax>
        </Tip>

        <p>Big-Θ (Θ): The tight bound, meaning the algorithm runs in at least and at most this complexity.</p>
        <p>Big-Ω (Ω): The lower bound, meaning the algorithm takes at least this much time, but possibly more.</p>


        <h1>Questions</h1>
        <div className="p-3 mx-64 mt-10 min-h-32 rounded-md bg-white border-[1.5px] border-gray-200 inline-block">
            { index > questions.length - 1
                ? <div className="w-full h-32 flex justify-center items-center"><p>You're all done! Go on to the next week, or refresh the page to try the questions again.</p></div>
                : <Question key={index} callback={callback} generate={questions[index]} />
            }
        </div>

        <div className="h-[25vh]"></div> {/* spacing */}
    </div>
}