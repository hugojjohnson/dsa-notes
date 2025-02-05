import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q3generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
            correct: "\( O(\log n) \)",
            incorrect: [
                "\( O(n) \)",
                "\( O(n^2) \)",
                "\( O(1) \)"
            ]
        },
        {
            question: "In which tree traversal is the root node visited first, followed by its left and right subtrees?",
            correct: "Pre-order traversal",
            incorrect: [
                "In-order traversal",
                "Post-order traversal",
                "Level-order traversal"
            ]
        },
        {
            question: "What is the maximum number of nodes in a binary tree of height \( h \) (0-based)?",
            correct: "\( 2^{h+1} - 1 \)",
            incorrect: [
                "\( 2^h \)",
                "\( 2^{h+1} - 1 \)",
                "\( h^2 \)",
                "\( h \cdot 2^h \)"
            ]
        },
        {
            question: "Which of the following trees does NOT necessarily maintain a balanced structure?",
            correct: "Binary Search Tree (BST)",
            incorrect: [
                "AVL Tree",
                "Red-Black Tree",
                "B-Tree"
            ]
        },
        {
            question: "What is the purpose of a Trie (Prefix Tree)?",
            correct: "To efficiently search for words and prefixes",
            incorrect: [
                "To store arithmetic expressions",
                "To maintain a balanced BST",
                "To find the shortest path in a graph"
            ]
        },
        {
            question: "Which tree traversal is commonly used to evaluate arithmetic expressions stored in an expression tree?",
            correct: "Post-order traversal",
            incorrect: [
                "Pre-order traversal",
                "In-order traversal",
                "Level-order traversal"
            ]
        },
        {
            question: "What is the worst-case height of an unbalanced Binary Search Tree (BST) with \( n \) nodes?",
            correct: "\( O(n) \)",
            incorrect: [
                "\( O(\log n) \)",
                "\( O(\sqrt{n}) \)",
                "\( O(1) \)"
            ]
        },
        {
            question: "Which of the following statements is TRUE about a complete binary tree?",
            correct: "All levels except possibly the last are completely filled.",
            incorrect: [
                "Every node has exactly two children.",
                "The tree is always balanced.",
                "The number of nodes is always odd."
            ]
        },
        {
            question: "What is the main advantage of an AVL tree over a standard Binary Search Tree (BST)?",
            correct: "It ensures \( O(\log n) \) operations by maintaining balance.",
            incorrect: [
                "It allows duplicate values.",
                "It requires less memory.",
                "It does not require rebalancing after insertions and deletions."
            ]
        },
        {
            question: "Which data structure is best suited for implementing a priority queue?",
            correct: "Binary Heap",
            incorrect: [
                "Binary Search Tree (BST)",
                "AVL Tree",
                "Trie"
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