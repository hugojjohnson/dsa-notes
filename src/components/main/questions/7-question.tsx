import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q7generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is the primary difference between DFS and BFS?",
            correct: "DFS explores as deeply as possible before backtracking; BFS explores level-by-level.",
            incorrect: [
                "BFS explores as deeply as possible before backtracking; DFS explores level-by-level.",
                "DFS requires a queue, while BFS requires a stack.",
                "BFS is only used for directed graphs, while DFS is for undirected graphs.",
            ]
        },
        {
            question: "What is the time complexity of both DFS and BFS (given an adjacency list representation)?",
            correct: "O(n + m), where n is the number of vertices and m is the number of edges.",
            incorrect: [
                "O(n²) for DFS and O(n log n) for BFS.",
                "O(n log n) for DFS and O(n²) for BFS.",
                "O(m²) for both DFS and BFS.",
            ]
        },
        {
            question: "Which data structure is commonly used to implement BFS?",
            correct: "Queue",
            incorrect: [
                "Stack",
                "Hash table",
                "Priority queue",
            ]
        },
        {
            question: "Which of the following applications is best suited for BFS?",
            correct: "Finding the shortest path in an unweighted graph.",
            incorrect: [
                "Solving a maze using backtracking.",
                "Detecting cycles in a directed graph.",
                "Topological sorting of a Directed Acyclic Graph (DAG).",
            ]
        },
        {
            question: "In DFS, what happens when an already visited vertex is encountered again?",
            correct: "It is ignored to prevent infinite loops.",
            incorrect: [
                "The traversal stops immediately.",
                "The edge leading to it is deleted.",
                "The vertex is revisited to ensure completeness.",
            ]
        },
        {
            question: "A graph without cycles is called a(n):",
            correct: "Acyclic graph",
            incorrect: [
                "Bipartite graph",
                "Weighted graph",
                "Dense graph",
            ]
        },
        {
            question: "What is a spanning tree?",
            correct: "A subgraph that connects all vertices of a graph with the minimum number of edges.",
            incorrect: [
                "A tree that contains cycles and connects all vertices.",
                "A disconnected subset of a graph.",
                "A directed graph with weighted edges.",
            ]
        },
        {
            question: "What is a key property of a bipartite graph?",
            correct: "Its vertices can be divided into two sets such that no two adjacent vertices belong to the same set.",
            incorrect: [
                "It contains at least one cycle.",
                "Every vertex has an even degree.",
                "It has more edges than vertices.",
            ]
        },
        {
            question: "Which of the following statements about graph traversal is TRUE?",
            correct: "Both DFS and BFS visit every vertex and edge at least once.",
            incorrect: [
                "BFS can be implemented using recursion.",
                "DFS always finds the shortest path in an unweighted graph.",
                "BFS is inefficient for large graphs compared to DFS.",
            ]
        },
        {
            question: " What is a cut edge (bridge) in a graph?",
            correct: "An edge whose removal increases the number of connected components in the graph.",
            incorrect: [
                "An edge that belongs to every spanning tree of the graph.",
                "A self-loop in an undirected graph.",
                "An edge that does not participate in any path.",
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