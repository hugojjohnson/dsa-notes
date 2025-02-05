import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q2generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is the main advantage of using an Abstract Data Type (ADT)?",
            correct: "It separates interface from implementation, promoting flexibility.",
            incorrect: [
                "It provides a concrete implementation of data structures.",
                "It specifies data representation explicitly.",
                "It improves memory allocation efficiency."
            ]
        },
        {
            question: "What is the worst-case time complexity of inserting an element at the beginning of an array-based list?",
            correct: "O(n)",
            incorrect: [
                "O(1)",
                "O(log n)",
                "O(n²)"
            ]
        },
        {
            question: "In a singly linked list, what is the time complexity of accessing the element at index i?",
            correct: "O(n)",
            incorrect: [
                "O(1)",
                "O(log n)",
                "O(n²)"
            ]
        },
        {
            question: "Which of the following is TRUE about doubly linked lists?",
            correct: "They require extra memory for storing previous pointers.",
            incorrect: [
                "They cannot be traversed backwards.",
                "They are always more memory efficient than singly linked lists.",
                "They do not require pointers for each node.",


            ]
        },
        {
            question: "What happens when an array-based list reaches its maximum capacity?",
            correct: "A new array is created with double the capacity.",
            incorrect: [
                "The list stops accepting new elements.",
                "The entire array is discarded.",
                "The list automatically switches to a linked list."
            ]
        },
        {
            question: "What is the time complexity of removing the last element in a singly linked list?",
            correct: "O(n)",
            incorrect: [
                "O(1)",
                "O(log n)",
                "O(n²)"
            ]
        },
        {
            question: "Which of the following operations is the most efficient in a doubly linked list compared to a singly linked list?",
            correct: "Finding the predecessor of a given node",
            incorrect: [
                "Accessing an element at index i",
                "Traversing forward",
                "Deleting the first element"
            ]
        },
        {
            question: "Which of the following best describes a positional list?",
            correct: "It maintains positions that remain valid even after insertions / deletions.",
            incorrect: [
                "It stores elements based on their indices in an array.",
                "It requires fixed - size memory allocation.",
                "It does not support dynamic memory allocation."
            ]
        },
        {
            question: "What is a key disadvantage of linked lists compared to arrays?",
            correct: "Linked lists use extra memory for storing pointers.",
            incorrect: [
                "Linked lists allow dynamic memory allocation.",
                "Linked lists take O(1) time for insertions and deletions.",
                "Linked lists cannot store elements of different types."
            ]
        },
        {
            question: "Which of the following data structures is best for implementing an undo feature?",
            correct: "Stack",
            incorrect: [
                "Queue",
                "Linked List",
                "Array"
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