import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q10generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "Which of the following best describes the Divide and Conquer approach?",
            correct: "Break a problem into smaller subproblems, solve them, and merge results.",
            incorrect: [
                "Solve problems iteratively using a loop and update results continuously.",
                "Solve problems using a single-pass approach without recursion.",
                "Always use brute force to ensure correctness."
            ]
        },
        {
            question: "What is the time complexity of Binary Search in a sorted array?",
            correct: "O(log n)",
            incorrect: [
                "O(n)",
                "O(n log n)",
                "O(n²)"
            ]
        },
        {
            question: "Which step comes first in the Divide and Conquer paradigm?",
            correct: "Divide",
            incorrect: [
                "Conquer",
                "Merge",
                "Sort"
            ]
        },
        {
            question: "Which sorting algorithm follows the Divide and Conquer paradigm?",
            correct: "Merge Sort",
            incorrect: [
                "Selection Sort",
                "Bubble Sort",
                "Insertion Sort"
            ]
        },
        {
            question: "Which of the following is true about Merge Sort?",
            correct: "It has a worst-case time complexity of O(n log n).",
            incorrect: [
                "It is an in-place sorting algorithm.",
                "It performs better than Quick Sort in all cases.",
                "It is not a stable sorting algorithm."
            ]
        },
        {
            question: "What is the recurrence relation for Merge Sort?",
            correct: "T(n) = 2T(n/2) + O(n)",
            incorrect: [
                "T(n) = T(n-1) + O(n)",
                "T(n) = T(n/2) + O(1)",
                "T(n) = 3T(n/3) + O(n)"
            ]
        },
        {
            question: "Why is Binary Search not always applicable?",
            correct: "It only works on sorted data.",
            incorrect: [
                "It has a high time complexity.",
                "It requires extra space for recursion.",
                "It only works for small input sizes."
            ]
        },
        {
            question: "What is the main advantage of Quick Sort over Merge Sort?",
            correct: "It is an in-place sorting algorithm.",
            incorrect: [
                "It is always faster than Merge Sort.",
                "It has better worst-case performance.",
                "It requires extra memory for merging."
            ]
        },
        {
            question: "What is the primary goal of the “Conquer” step in Divide and Conquer?",
            correct: "Combine the solutions of subproblems to solve the original problem.",
            incorrect: [
                "Divide the problem into smaller parts.",
                "Recurse through all elements without merging.",
                "Reduce time complexity by using brute force."
            ]
        },
        {
            question: "Which of the following is not an example of a Divide and Conquer algorithm?",
            correct: "Dijkstra’s Algorithm",
            incorrect: [
                "Merge Sort",
                "Quick Sort",
                "Binary Search"
            ]
        }
    ]

    const question = randomElement(questions)
    const options = question.incorrect.slice().concat(question.correct).sort(shuffle)

    return {
        question: <p className="text-center">{question.question}</p>,
        options: options.map(idk => idk),
        correct: options.indexOf(question.correct)
    }
}