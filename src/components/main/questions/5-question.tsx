import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q5generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is a priority queue?",
            correct: "A data structure where elements are removed based on priority.",
            incorrect: [
                "A queue that always removes the most recently inserted element.",
                "A structure that supports both stack and queue operations.",
                "A queue that only allows elements with unique priorities."
            ]
        },
        {
            question: "What is the time complexity of inserting an element into a min-heap?",
            correct: "\( O(\log n) \)",
            incorrect: [
                "\( O(n) \)",
                "\( O(1) \)",
                "\( O(n \log n) \)"
            ]
        },
        {
            question: "Which of the following operations removes the smallest key in a min-priority queue?",
            correct: "`remove_min()`",
            incorrect: [
                "`remove_max()`",
                "`pop()`",
                "`delete_min()`"
            ]
        },
        {
            question: "Which of the following implementations allows for efficient insertions but slow removals?",
            correct: "Unsorted list",
            incorrect: [
                "Sorted list",
                "Min-heap",
                "Max-heap"
            ]
        },
        {
            question: "What is the primary property of a min-heap?",
            correct: "Every parent node has a smaller key than its children.",
            incorrect: [
                "The tree must be perfectly balanced.",
                "Each level must have at most one missing node.",
                "The root always has the largest key."
            ]
        },
        {
            question: "How does a heap-based priority queue achieve efficient `remove_min()` operations?",
            correct: "By maintaining a complete binary tree with heap-order property.",
            incorrect: [
                "By using a linked list to store elements in sorted order.",
                "By removing elements based on their insertion time.",
                "By storing elements in increasing order in an array."
            ]
        },
        {
            question: "What is the time complexity of constructing a heap from an unordered list of `n` elements?",
            correct: "\( O(n) \)",
            incorrect: [
                "\( O(n \log n) \)",
                "\( O(\log n) \)",
                "\( O(n^2) \)"
            ]
        },
        {
            question: "In a stock matching engine, how are buy and sell orders organized?",
            correct: "Buy orders use a max-priority queue, sell orders use a min-priority queue.",
            incorrect: [
                "Both buy and sell orders use a min-priority queue.",
                "Orders are processed in the order they are received.",
                "A linked list is used to sort all orders."
            ]
        },
        {
            question: "In a heap stored in an array, what is the index of a node’s parent at index `i`?",
            correct: "\( \lfloor (i - 1) / 2 \rfloor \)",
            incorrect: [
                "\( 2i + 1 \)",
                "\( 2i + 2 \)",
                "\( i / 2 \)"
            ]
        },
        {
            question: " What is the worst-case time complexity of Heap-Sort?",
            correct: "\( O(n \log n) \)",
            incorrect: [
                "\( O(n) \)",
                "\( O(n^2) \)",
                "\( O(\log n) \)"
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