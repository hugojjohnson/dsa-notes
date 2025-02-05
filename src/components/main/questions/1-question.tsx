import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { QuestionI } from "../../../Interfaces";
import { randomElement, randomNum, shuffle } from "../../../hooks/utils";


export var generateQ1 = (): QuestionI => {
    const lettersss = ["n!", "\\times3^n", "\\times2^n", "n^3", "n^2", "n", "log(n)", "1"]
    let terms = [0, 1, 2, 3, 4, 5].sort(shuffle).slice(0, randomNum(1, 4))
    if (terms.length > 1 && Math.random() > 0.5) {
        terms = terms.filter(idk => idk !== 0)
    }
    const options = terms.slice()
    while (options.length < 4) {
        options.push([0, 1, 2, 3, 4, 5].filter(idk => !options.includes(idk)).sort(shuffle)[0])
    }

    return {
        question: <p className="text-center">Given the function $ T(n)={terms.map(idk => Math.floor(Math.random() * 10 + 1).toString() + lettersss[idk]).join("+")} $, determine its Big - O classification.</p>,
        options: options.map(idk => `$$O(${lettersss[idk].replace("\\times", "")})$$`),
        correct: terms.indexOf(Math.min(...terms))
    }
}

export var generateQ2 = (): QuestionI => {
    const codeSnippets = [
        {
            code: `def get_first_element(lst):
    return lst[0] if lst else None`,
            complexity: "1"
        },
        {
            code: `def sum_list(lst):
    total = 0
    for num in lst:
        total += num
    return total
`,
            complexity: "n"
        },
        {
            code: `def print_pairs(lst):
    for i in range(len(lst)):
        for j in range(len(lst)):
            print(lst[i], lst[j])`,
            complexity: "n^2"
        },
        {
            code: `def count_triplets(lst):
    count = 0
    for i in range(len(lst)):
        for j in range(len(lst)):
            for k in range(len(lst)):
                count += 1
    return count`,
            complexity: "n^3"
        },
        {
            code: `def binary_search(lst, target):
    left, right = 0, len(lst) - 1
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
            complexity: "log(n)"
        }
    ]


    const lettersss = ["n!", "\\times3^n", "\\times2^n", "n^3", "n^2", "n", "log(n)", "1"]
    const term = randomElement(codeSnippets)
    const options = [term.complexity]
    while (options.length < 4) {
        options.push(lettersss.filter(idk => !options.includes(idk)).sort(shuffle)[0])
    }
    options.sort(shuffle)

    return {
        question: <div className="text-left"><p>Consider the following code:</p>
            <SyntaxHighlighter language="javascript" style={docco}>
                {term.code}
            </SyntaxHighlighter >
            <p>What is its time complexity?</p>
        </div>,
        options: options.map(idk => `$$O(${idk.replace("\\times", "")})$$`),
        correct: options.indexOf(term.complexity)
    }
}


export var generateQ3 = (): QuestionI => {
    const codeSnippets = [
        {
            code: `def constant_time(n):
    print("Hello, World!")`,
            O: "1",
            Omega: "1"
        },
        {
            code: `def linear_time(n):
    if i == 2:
        return
    for i in range(n):
        print(i)`,
            O: "n",
            Omega: "1"
        },
        {
            code: `def quadratic_time(n):
    for i in range(n):
        for j in range(n):
            print(i, j)
        if n%2 == 0:
            return`,
            O: "n^2",
            Omega: "n"
        },
        {
            code: `def conditional_linear_time(n):
    if n > 0:
        for i in range(n):
            print(i)`,
            O: "n",
            Omega: "1"
        },
        {
            code: `def mixed_time(n):
    if n > 5:
        for i in range(n):
            for j in range(n):
                print(i, j)
    else:
        print("n is small")`,
            O: "n^2",
            Omega: "1"
        }
    ]

    const findOmega = Math.random() > 0.5
    const lettersss = ["n!", "\\times3^n", "\\times2^n", "n^3", "n^2", "n", "log(n)", "1"]
    const term = randomElement(codeSnippets)
    const options = [findOmega ? term.Omega : term.O]
    while (options.length < 4) {
        options.push(lettersss.filter(idk => !options.includes(idk)).sort(shuffle)[0])
    }
    options.sort(shuffle)

    return {
        question: <div className="text-left"><p>Consider the following code:</p>
            <SyntaxHighlighter language="javascript" style={docco}>
                {term.code}
            </SyntaxHighlighter >
            <p>What is its <strong>Big-{findOmega ? "$\\mathbf{\\Omega}$" : "O"}</strong> time complexity?</p>
        </div>,
        options: options.map(idk => `$$O(${idk.replace("\\times", "")})$$`),
        correct: options.indexOf(findOmega ? term.Omega : term.O)
    }
}