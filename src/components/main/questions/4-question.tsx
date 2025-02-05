import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q4generateQ1 = (): QuestionI => {
    const questions = [

        {
            question: "What is the primary property of a Binary Search Tree (BST)?",
            correct: "The left subtree contains keys smaller than the node, and the right subtree contains keys greater.",
            incorrect: [
                "Each node has at most two children.",
                "The tree is always perfectly balanced.",
                "The root always has the smallest key."
            ]
        },
        {
            question: "What is the time complexity of searching in a perfectly balanced BST with \( n \) nodes?",
            correct: "\( O(\log n) \)",
            incorrect: [
                "\( O(1) \)",
                "\( O(n) \)",
                "\( O(n \log n) \)"
            ]
        },
        {
            question: "Which of the following is NOT a valid case for deleting a node in a BST?",
            correct: "The node is always replaced by the root.",
            incorrect: [
                "The node is a leaf.",
                "The node has exactly one child.",
                "The node has two children, and it is replaced by its in-order successor or predecessor."
            ]
        },
        {
            question: "What is the worst-case time complexity for insertion in a BST?",
            correct: "\( O(n) \)",
            incorrect: [
                "\( O(1) \)",
                "\( O(\log n) \)",
                "\( O(n \log n) \)"
            ]
        },
        {
            question: "How does an AVL tree ensure balance after insertion or deletion?",
            correct: "By checking and fixing balance factors using rotations.",
            incorrect: [
                "By performing in-order traversal after each operation.",
                "By re-sorting all elements after every insertion.",
                "By swapping nodes randomly to keep it balanced."
            ]
        },

        {
            question: "What is the purpose of a rotation in an AVL tree?",
            correct: "To balance the tree when height differences exceed 1.",
            incorrect: [
                "To make the tree grow faster.",
                "To maintain the BST property.",
                "To remove duplicate keys from the tree."
            ]
        },
        {
            question: "What is the time complexity of a range query in a BST when retrieving all keys between \( k_1 \) and \( k_2 \)?",
            correct: "\( O(\log n + |output|) \)",
            incorrect: [
                "\( O(n) \)",
                "\( O(\log n) \)",
                "\( O(|output|) \)"
            ]
        },

        {
            question: "Which of the following statements is true about self-balancing trees like AVL trees?",
            correct: "They maintain balance by keeping the difference in height between subtrees at most 1.",
            incorrect: [
                "The height is always exactly \( O(\log n) \).",
                "Searching, inserting, and deleting all have a guaranteed \( O(n) \) complexity.",
                "They are faster than hash tables for all search operations."
            ]
        },
        {
            question: "What is the difference between a standard BST and an augmented BST?",
            correct: "An augmented BST stores additional information in each node for specialized queries.",
            incorrect: [
                "An augmented BST does not follow the BST property.",
                "An augmented BST allows duplicate keys while a standard BST does not.",
                "A standard BST is always balanced, while an augmented BST is not."
            ]
        },
        {
            question: " If a BST has a worst-case height of \( n-1 \), what type of input likely caused this?",
            correct: "Insertions in already sorted order.",
            incorrect: [
                "A random sequence of numbers.",
                "A perfectly balanced set of insertions.",
                "A mix of insertions and deletions in a random order."
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