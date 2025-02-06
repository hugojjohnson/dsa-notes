import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q12generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is the main advantage of randomized algorithms?",
            correct: "They help avoid worst-case scenarios and improve efficiency.",
            incorrect: [
                "They always produce the same output for a given input.",
                "They are more predictable than deterministic algorithms.",
                "They guarantee the fastest possible runtime in all cases."
            ]
        },
        {
            question: "How does randomized QuickSort select its pivot?",
            correct: "It picks a pivot randomly from the array.",
            incorrect: [
                "It always picks the first element as the pivot.",
                "It selects the median element using a deterministic method.",
                "It picks the largest element in the array."
            ]
        },
        {
            question: "What is the expected time complexity of randomized QuickSort?",
            correct: "O(n log n)",
            incorrect: [
                "O(n²)",
                "O(n)",
                "O(log n)"
            ]
        },
        {
            question: "Why was the first permutation algorithm incorrect?",
            correct: "It did not generate all permutations with equal probability.",
            incorrect: [
                "It took too much time to execute.",
                "It required extra space to store temporary arrays.",
                "It never produced the correct output."
            ]
        },
        {
            question: "How does the Fisher-Yates algorithm ensure uniform randomness?",
            correct: "It swaps each element with a randomly chosen later element.",
            incorrect: [
                "It swaps elements at completely random positions in the array.",
                "It sorts the array in ascending order before shuffling.",
                "It removes duplicate elements before shuffling."
            ]
        },
        {
            question: "What is the expected time complexity of the Fisher-Yates shuffle?",
            correct: "O(n)",
            incorrect: [
                "O(n²)",
                "O(log n)",
                "O(1)"
            ]
        },
        {
            question: "What is the purpose of skip lists?",
            correct: "They provide efficient search, insertion, and deletion operations.",
            incorrect: [
                "They ensure data is always stored in sorted order.",
                "They replace hashing for indexing large datasets.",
                "They guarantee a constant time search for all cases."
            ]
        },
        {
            question: "How do skip lists determine the level of a new node?",
            correct: "By flipping a coin until it lands on tails.",
            incorrect: [
                "By assigning levels based on the value of the element.",
                "By using a deterministic formula based on input size.",
                "By always placing nodes at a fixed level."
            ]
        },
        {
            question: "What is the expected height of a skip list?",
            correct: "O(log n)",
            incorrect: [
                "O(n)",
                "O(1)",
                "O(n²)"
            ]
        },
        {
            question: " Why are skip lists useful compared to AVL trees?",
            correct: "They achieve O(log n) operations without complex rebalancing.",
            incorrect: [
                "They are always faster than AVL trees in all cases.",
                "They use less memory than any other data structure.",
                "They do not rely on randomness for performance."
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