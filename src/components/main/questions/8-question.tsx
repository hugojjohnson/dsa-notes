import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q8generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What is the primary assumption of Dijkstra’s algorithm?",
            correct: "All edge weights are nonnegative.",
            incorrect: [
                "The graph must be directed.",
                "There must be no cycles in the graph.",
                "All edges must have unique weights."
            ]
        },
        {
            question: "What data structure is commonly used in Dijkstra’s algorithm for efficiency?",
            correct: "Priority queue (min-heap).",
            incorrect: [
                "Stack.",
                "Linked list.",
                "Hash table."
            ]
        },
        {
            question: "Which of the following best describes a Minimum Spanning Tree (MST)?",
            correct: "A subset of edges that connects all nodes with minimal weight.",
            incorrect: [
                "A path between two nodes with the least number of edges.",
                "A tree where all nodes have equal edge weights.",
                "A spanning tree where no node has more than two edges."
            ]
        },
        {
            question: "Which algorithm is more efficient for constructing an MST in a dense graph?",
            correct: "Prim’s Algorithm.",
            incorrect: [
                "Kruskal’s Algorithm.",
                "Dijkstra’s Algorithm.",
                "Bellman-Ford Algorithm."
            ]
        },
        {
            question: "Why does Dijkstra’s algorithm fail with negative weight edges?",
            correct: "It assumes that once a node’s shortest path is found, it cannot change.",
            incorrect: [
                "It cannot handle graphs with cycles.",
                "It only works for undirected graphs.",
                "It assumes all edges have equal weights."
            ]
        },
        {
            question: "What is the time complexity of Kruskal’s algorithm when using a Union-Find data structure?",
            correct: "O(m log m).",
            incorrect: [
                "O(n²).",
                "O(m + n log n).",
                "O(m log n)."
            ]
        },
        {
            question: "Which property of MSTs states that the smallest edge crossing any cut must be in the MST?",
            correct: "Cut Property.",
            incorrect: [
                "Cycle Property.",
                "Edge Relaxation.",
                "Shortest Path Property."
            ]
        },
        {
            question: "Which algorithm is best suited for finding the shortest path in graphs with negative weights?",
            correct: "Bellman-Ford Algorithm.",
            incorrect: [
                "Dijkstra’s Algorithm.",
                "Prim’s Algorithm.",
                "Kruskal’s Algorithm."
            ]
        },
        {
            question: "Which of the following applications is NOT a common use of MSTs?",
            correct: "Road network design.",
            incorrect: [
                "AI pathfinding.",
                "Clustering in data science.",
                "Electrical circuit design."
            ]
        },
        {
            question: "Which algorithm efficiently finds the shortest paths between all pairs of vertices in a dense graph?",
            correct: "Floyd-Warshall Algorithm.",
            incorrect: [
                "Dijkstra’s Algorithm.",
                "Prim’s Algorithm.",
                "Kruskal’s Algorithm."
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