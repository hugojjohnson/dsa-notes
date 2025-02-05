import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from "react";
import { Question } from "../Question";
import { Q4generateQ1 } from "../questions/4-question";


export default function Five() {
    const callback = () => {
        setIndex(index + 1)
    }

    const questions = [Q4generateQ1]
    const [index, setIndex] = useState(0)

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
        <h1 className="text-4xl pt-5">Week 4: Binary Search Trees</h1>

        <h1>Key Takeaways</h1>
        <ul>
            <li>Priority queues store key-value pairs and remove the smallest key.</li>
            <li>Heaps enable efficient insertions and removals in O(log n) time.</li>
            <li>Stock matching engines use priority queues for trade execution.</li>
        </ul>

        <h1>Key concepts</h1>
        <h2>Priority Queues and Their Operations</h2>
        A priority queue is an abstract data type (ADT) that stores key-value pairs, where elements are removed based on their priority rather than the order in which they were inserted. The two most common operations in a priority queue are inserting an element with a given priority and removing the element with the highest or lowest priority. Typically, a min-priority queue removes the element with the smallest key, while a max-priority queue removes the element with the largest key. However, a single instance of a priority queue cannot support both at the same time.

        <h2>Basic Operations of a Priority Queue</h2>
        <ul>
            <li><SyntaxHighlighter language="javascript" style={docco}>insert(k, v)</SyntaxHighlighter> Adds an item with key `k` and value `v`.</li>
            <li><SyntaxHighlighter language="javascript" style={docco}>remove_min()</SyntaxHighlighter> Removes and returns the item with the smallest key.</li>
            <li><SyntaxHighlighter language="javascript" style={docco}>min()</SyntaxHighlighter> Returns (but does not remove) the item with the smallest key.</li>
            <li><SyntaxHighlighter language="javascript" style={docco}>size()</SyntaxHighlighter> Returns the number of elements in the priority queue.</li>
            <li><SyntaxHighlighter language="javascript" style={docco}>is_empty()</SyntaxHighlighter> Checks whether the priority queue is empty.</li>
        </ul>

        <h2>Implementing Priority Queues</h2>
        There are several ways to implement a priority queue, each with different efficiency trade-offs. A sequence-based priority queue can use an unsorted list, where insertions take \( O(1) \) time but `remove_min()` requires \( O(n) \) time, since the smallest element must be found by scanning the entire list. Alternatively, a sorted list implementation allows `remove_min()` to run in \( O(1) \) time, but insertions take \( O(n) \) time since the correct position must be found to maintain order. These inefficiencies make heaps a preferred data structure for implementing priority queues efficiently.

        <h2>Heap-Based Priority Queues</h2>
        A heap is a binary tree that maintains a heap-order property, ensuring that the parent node always has a smaller key than its children (for a min-heap). The tree is also complete, meaning all levels are fully filled except possibly the last one, which is filled from left to right. Heaps enable efficient priority queue operations:
        <ul>
            <li>Insertion takes \( O(\log n) \) time via an upheap process (bubbling up to restore order).</li>
            <li>Removal of the minimum takes \( O(\log n) \) time via a downheap process (sifting down to restore order).</li>
            <li>Heap construction can be done in \( O(n) \) time using the bottom-up heapification technique.</li>
        </ul>

        <h2>Applications of Priority Queues</h2>
        Priority queues are fundamental in computer science and real-world applications. One major example is stock matching engines, which handle buy and sell orders based on price-time priority. When a new order is placed:
        <ul>
            <li>Buy orders are stored in a max-priority queue (higher price = higher priority).</li>
            <li>Sell orders are stored in a min-priority queue (lower price = higher priority).</li>
            <li>The matching engine removes the highest-priority buy and sell orders and executes trades when conditions are met.</li>
        </ul>

        <h2>Heap-Sort and Generalization</h2>
        The priority queue ADT can be leveraged for sorting using heap-sort, which has a time complexity of \( O(n \log n) \). This algorithm involves inserting all elements into a heap and repeatedly extracting the minimum element. Additionally, priority queues can support extra operations like:
        <ul>
            <li><SyntaxHighlighter language="javascript" style={docco}>remove(e)</SyntaxHighlighter> Removes a specific element.</li>
            <li><SyntaxHighlighter language="javascript" style={docco}>replace_key(e, k)</SyntaxHighlighter> Updates an element’s priority.</li>
            <li><SyntaxHighlighter language="javascript" style={docco}>replace_value(e, v)</SyntaxHighlighter> Changes the value associated with a key.</li>
        </ul>

        
        <h1>Questions</h1>
        <div className="p-3 mx-64 mt-10 min-h-32 rounded-md bg-white border-[1.5px] border-gray-200 inline-block">
            {index > questions.length - 1
                ? <div className="w-full h-32 flex justify-center items-center"><p>You're all done! Go on to the next week, or refresh the page to try the questions again.</p></div>
                : <Question key={index} callback={callback} generate={questions[index]} />
            }
        </div>

        <div className="h-[25vh]"></div> {/* spacing */}
    </div>
}