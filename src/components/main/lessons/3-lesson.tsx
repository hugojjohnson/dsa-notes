import { MathJax } from "better-react-mathjax";
import Tip from "../../other/Tip";
import { useState } from "react";
import { Question } from "../Question";
import { Q3generateQ1 } from "../questions/3-question";
import VideoResource from "../../other/VideoResource";


/**
 * Tailwind components to make:
 *  Heading
 *  Subheading
 *  Tip
 *  Warning
**/
export default function Three() {
    const callback = () => {
        setIndex(index + 1)
    }

    const questions = [Q3generateQ1]
    const [index, setIndex] = useState(0)

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
        <h1 className="text-4xl pt-5">Week 3: Trees</h1>
        <VideoResource>
            <a href="https://www.youtube.com/watch?v=1-l_UOFi1Xw"></a>
        </VideoResource>

        <h1>Key Takeaways</h1>
        <ul>
            <li>Trees model hierarchical structures with parent-child relationships and a root.</li>
            <li>Traversals include pre-order, in-order, and post-order for processing nodes.</li>
            <li>Binary search trees enable efficient searching, insertion, and deletion in O(log n) time.</li>
        </ul>

        <h1>Key concepts</h1>
    <h2>Definition and Basic Properties</h2>
        A tree is a hierarchical data structure consisting of nodes.
        The topmost node is called the root, and every node (except the root) has exactly one parent.
        Nodes can have children, and nodes without children are called leaves.
        <h2>Tree Terminology</h2>
        Root: The node without a parent.
        Internal Node: A node with at least one child.
        Leaf Node: A node with no children.
        Depth: The number of edges from the root to a node.
        Height: The longest path from a node to a leaf.
        <h2>Types of Trees</h2>
        General Trees: Each node can have any number of children.
        Binary Trees: Each node has at most two children (left and right).
        Binary Search Trees (BST): A binary tree where the left subtree has smaller values and the right subtree has larger values.
        Balanced Trees (e.g., AVL Trees, Red-Black Trees): Self-adjusting trees to maintain efficiency in operations.
        <h2>Tree Applications</h2>
        File Systems: Directory structures in operating systems.
        Expression Trees: Representing arithmetic expressions (e.g., (2 × (a - 1) + (3 × b))).
        Decision Trees: Used in AI and machine learning for decision-making.
        Network Routing: Routing algorithms use trees for efficient pathfinding.
        <h2>Tree Representation in Code</h2>
        Linked Representation: Each node contains a value and pointers to child nodes.
        Array Representation: Used in special cases like heaps.
        <h2>Tree Traversal Techniques</h2>
        Pre-order Traversal: Visit root → left subtree → right subtree.
        In-order Traversal: Visit left subtree → root → right subtree (used in BSTs).
        Post-order Traversal: Visit left subtree → right subtree → root.
        Level-order Traversal: Visit nodes level by level using a queue.
        <h2>Recursive Tree Traversal Implementation</h2>
        Implementing pre-order, in-order, and post-order using recursion.
        Understanding the base case (when a node is null).
        <h2>Non-Recursive Tree Traversal</h2>
        Using Stacks: Simulating recursion for in-order and pre-order traversal.
        Using Queues: Level-order traversal using breadth-first search (BFS).
        <h2>Binary Trees vs. Binary Search Trees (BSTs)</h2>
        Binary Tree: No specific order in child nodes.
        BST: Left child &lsaquo; parent &lsaquo; right child.
        <h2>Properties of BSTs</h2>
        Efficient searching: Average time complexity 𝑂(log⁡𝑛)
        O(logn) if balanced.
        Insertion and deletion: Follows BST rules to maintain order.
        <h2>Special Types of BSTs</h2>
        Balanced BSTs: AVL trees, Red-Black trees.
        Self-balancing Trees: Adjust automatically to maintain 𝑂(log⁡𝑛)
        O(logn) operations.
        12. Tree Operations & Their Complexity
        Insertion: 𝑂(log⁡𝑛) O(logn) in a balanced BST, 𝑂(𝑛)
        O(n) in an unbalanced tree.
        Deletion: Requires finding a node, handling three cases (leaf, one child, two children).
        Search: 𝑂(log⁡𝑛)
        O(logn) if balanced, 𝑂(𝑛)
        O(n) if unbalanced.

        <Tip>
            <p>Common mistake</p>
            <MathJax>The coefficients of the terms don't matter in big-O notation. So $2000n$, $n + 1$ and $n + 3834$ are all $O(n)$, since the fastest growing term is $n$ in all of these cases.</MathJax>
        </Tip>

        <p>Big-Θ (Θ): The tight bound, meaning the algorithm runs in at least and at most this complexity.</p>
        <p>Big-Ω (Ω): The lower bound, meaning the algorithm takes at least this much time, but possibly more.</p>


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