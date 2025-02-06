import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q6generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is the expected time complexity of basic hash table operations (insert, search, delete) when using a good hash function?",
            correct: "O(1)",
            incorrect: [
                "O(log n)",
                "O(n)",
                "O(n log n)",
            ]
        },
        {
            question: "Which of the following is a common way to handle hash collisions?",
            correct: "Separate chaining",
            incorrect: [
                "Binary search trees",
                "Quick sorting the keys",
                "Using only prime numbers as keys",
            ]
        },
        {
            question: "What does the load factor (α) of a hash table represent?",
            correct: "The ratio of stored elements to table size (n/N)",
            incorrect: [
                "The number of collisions occurring per operation",
                "The number of empty slots in the table",
                "The number of times the table has been resized",
            ]
        },
        {
            question: "Why is a prime number often used as the table size in modular hashing?",
            correct: "It helps distribute keys more uniformly",
            incorrect: [
                "It guarantees O(1) operations in all cases",
                "It prevents clustering completely",
                "It reduces memory usage",
            ]
        },
        {
            question: "How does linear probing handle collisions?",
            correct: "It searches for the next available slot in a circular manner",
            incorrect: [
                "It creates a separate linked list for colliding elements",
                "It deletes the colliding element and replaces it",
                "It moves the entire table to a new memory location",
            ]
        },
        {
            question: "What is a major drawback of separate chaining?",
            correct: "It requires additional memory for linked lists",
            incorrect: [
                "It cannot handle collisions at all",
                "It requires the use of two hash functions",
                "It leads to infinite loops during searches",
            ]
        },
        {
            question: "What makes cuckoo hashing unique compared to other collision-handling methods?",
            correct: "It guarantees O(1) worst-case lookup time",
            incorrect: [
                "It never experiences collisions",
                "It uses binary search trees instead of hashing",
                "It does not require a hash function",
            ]
        },
        {
            question: "What happens when the load factor of a hash table becomes too high?",
            correct: "The table is resized and all elements are rehashed",
            incorrect: [
                "The table automatically deletes half of its elements",
                "The table merges with another hash table",
                "The table stops accepting new insertions",
            ]
        },
        {
            question: "How does universal hashing help improve hash table performance?",
            correct: "It selects a random hash function to reduce worst-case collisions",
            incorrect: [
                "It ensures all keys are mapped to unique indices",
                "It eliminates the need for resizing the hash table",
                "It allows negative numbers to be used as keys",
            ]
        },
        {
            question: " Why is cryptographic hashing not typically used for standard hash tables?",
            correct: "It is slower and computationally expensive",
            incorrect: [
                "It does not support key-value storage",
                "It cannot handle string keys",
                "It requires a table size of at least 1024 elements**",
            ]
        },
    ]

    const question = randomElement(questions)
    const options = question.incorrect.slice().concat(question.correct).sort(shuffle)

    return {
        question: <p className="text-center">{question.question}</p>,
        options: options.map(idk => idk),
        correct: options.indexOf(question.correct)
    }
}