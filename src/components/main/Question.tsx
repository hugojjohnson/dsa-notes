import { useState } from "react"
import { QuestionI } from "../../Interfaces"
import { MathJax } from "better-react-mathjax"

export const Question = ({ callback, generate }: { callback: () => void, generate: () => QuestionI }) => {
    const [selection, setSelection] = useState(-1)
    const [answer, setAnswer] = useState(generate())
    const [streak, setStreak] = useState(0)
    const goal = 10

    /** ========== Functions ========== **/
    const btnCol = (i: number) => {
        if (selection === -1) { return "" }
        if (i === selection) {
            if (i === answer.correct) { return "btn-green" } else { return "btn-red" }
        }
        if (i === answer.correct) { return "btn-blue" }
        return ""
    }

    const reset = () => {
        setSelection(-1)
        setAnswer(generate()) // reset question
    }
    const click = (index: number) => {
        if (index === answer.correct) {
            setStreak(streak + 1)
            if (streak >= goal-1) {
                console.log("callback!")
                setTimeout(callback, 1000)
            }
        }
        setSelection(index);
        setTimeout(reset, 1000)
    }

    /** ========== JSX ========== **/
    return <div>
        <div style={{ width: `${Math.min(streak/goal*100, 100)}%`}} className={`transition-all duration-500 h-2 bg-green-400`}></div>
        <MathJax key={selection} className="mt-5">{answer.question}</MathJax>

        <div className="flex flex-col items-around gap-3 mt-10 w-auto">
            <MathJax>
                {
                    answer.options.map((option, index) => <button key={index} onClick={() => click(index)} className={btnCol(index)}>{option}</button>)
                }
            </MathJax>
        </div>
    </div>
}