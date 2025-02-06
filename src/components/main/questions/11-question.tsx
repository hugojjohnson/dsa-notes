import { QuestionI } from "../../../Interfaces";
import { randomElement, shuffle } from "../../../hooks/utils";


export var Q11generateQ1 = (): QuestionI => {
    const questions = [
        {
            question: "What are the three main steps of the Divide and Conquer approach?",
            correct: "Divide, Recur, Conquer",
            incorrect: [
                "Split, Sort, Merge",
                "Partition, Iterate, Combine",
                "Search, Solve, Merge"
            ]
        },
        {
            question: "What is the time complexity of the Divide and Conquer Maxima-Set algorithm?",
            correct: "\( O(n \log n) \)",
            incorrect: [
                "\( O(n^2) \)",
                "\( O(\log n) \)",
                "\( O(n) \)"
            ]
        },
        {
            question: "Why is Karatsuba’s multiplication faster than the naive approach?",
            correct: "It reduces the number of recursive multiplications from 4 to 3",
            incorrect: [
                "It avoids recursion entirely",
                "It uses bitwise operations instead of arithmetic",
                "It runs in constant time for any input size"
            ]
        },
        {
            question: "What is the expected time complexity of the QuickSelect algorithm?",
            correct: "\( O(n) \)",
            incorrect: [
                "\( O(n \log n) \)",
                "\( O(n^2) \)",
                "\( O(\log n) \)"
            ]
        },
        {
            question: "How does the Master Theorem classify recurrence relations?",
            correct: "Based on comparisons between \( f(n) \) and \( n^{\log_b a} \)",
            incorrect: [
                "By measuring the total number of recursive calls",
                "By using matrix transformations",
                "By ignoring the base case of the recurrence"
            ]
        },
        {
            question: "In the Maxima-Set problem, a point is considered a maximum if:",
            correct: "No other point has both a greater x- and y-coordinate",
            incorrect: [
                "It has the highest x-value in the dataset",
                "It has the lowest y-value in the dataset",
                "It is the leftmost point in the dataset"
            ]
        },
        {
            question: "What is the recurrence relation for the Karatsuba multiplication algorithm?",
            correct: "\( T(n) = 3T(n/2) + O(n) \)",
            incorrect: [
                "\( T(n) = 4T(n/2) + O(n) \)",
                "\( T(n) = 2T(n/2) + O(n) \)",
                "\( T(n) = T(n/2) + O(n) \)"
            ]
        },
        {
            question: "What is the key difference between QuickSelect and QuickSort?",
            correct: "QuickSelect only recurses into one partition, while QuickSort recurses into both",
            incorrect: [
                "QuickSelect always sorts the array first",
                "QuickSelect has worse average-case performance than QuickSort",
                "QuickSelect does not use a pivot for partitioning"
            ]
        },
        {
            question: "What is the best-case time complexity of the Selection algorithm using Median of Medians?",
            correct: "\( O(n) \)",
            incorrect: [
                "\( O(n \log n) \)",
                "\( O(n^2) \)",
                "\( O(\log n) \)"
            ]
        },
        {
            question: "What is the significance of using the Master Theorem for Divide and Conquer algorithms?",
            correct: "It provides a structured way to determine time complexity",
            incorrect: [
                "It allows algorithms to avoid recursion",
                "It guarantees constant-time solutions for all problems",
                "It is only applicable to sorting algorithms"
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