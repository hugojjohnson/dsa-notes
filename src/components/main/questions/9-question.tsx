import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q9generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: " 1. What is the primary characteristic of a greedy algorithm?",
            correct: "It makes the best local choice at each step.",
            incorrect: [
                "It always finds the global optimal solution.",
                "It backtracks to adjust previous choices.",
                "It is slower than dynamic programming."
            ]
        },
        {
            question: "Which of the following problems can be optimally solved using a greedy approach?",
            correct: "Fractional Knapsack",
            incorrect: [
                "0-1 Knapsack",
                "Minimum Edit Distance",
                "Traveling Salesman Problem"
            ]
        },
        {
            question: "In the Fractional Knapsack problem, how do you decide which item to take first?",
            correct: "Select the item with the highest benefit-to-weight ratio.",
            incorrect: [
                "Select the item with the highest weight.",
                "Select the item with the highest total benefit.",
                "Select items randomly."
            ]
        },
        {
            question: "What is the time complexity of the greedy algorithm for Fractional Knapsack?",
            correct: "O(n log n)",
            incorrect: [
                "O(n²)",
                "O(n³)",
                "O(2ⁿ)"
            ]
        },
        {
            question: "Which sorting order is used in the greedy interval partitioning algorithm?",
            correct: "Increasing order of start time",
            incorrect: [
                "Decreasing order of end time",
                "Increasing order of duration",
                "Random order"
            ]
        },
        {
            question: "What is the main goal of Huffman encoding?",
            correct: "To minimize the number of bits needed to represent a message.",
            incorrect: [
                "To maximize the number of bits in a message.",
                "To sort characters based on alphabetical order.",
                "To compress images using greedy techniques."
            ]
        },
        {
            question: "What data structure is used to implement Huffman’s algorithm efficiently?",
            correct: "Priority queue",
            incorrect: [
                "Stack",
                "Linked list",
                "Hash table"
            ]
        },
        {
            question: "Why does Huffman encoding always produce an optimal prefix-free code?",
            correct: "It merges the two least frequent characters at each step.",
            incorrect: [
                "It assigns the longest codes to the most frequent characters.",
                "It backtracks to correct inefficient encodings.",
                "It follows a brute-force approach."
            ]
        },
        {
            question: "In greedy scheduling, what does the depth of intervals represent?",
            correct: "The minimum number of classrooms needed.",
            incorrect: [
                "The maximum duration of a lecture.",
                "The total number of lectures.",
                "The number of students in each class."
            ]
        },
        {
            question: "When is a greedy algorithm not guaranteed to find the optimal solution?",
            correct: "When the problem lacks an optimal substructure.",
            incorrect: [
                "When the problem involves sorting.",
                "When there is a clear ranking of elements.",
                "When the problem involves making iterative choices."
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