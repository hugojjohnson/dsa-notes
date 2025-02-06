import Tip from "../../other/Tip";
import { useState } from "react";
import { Question } from "../Question";
import { Q4generateQ1 } from "../questions/4-question";
import VideoResource from "../../other/VideoResource";


export default function Four() {
    const callback = () => {
        setIndex(index + 1)
    }

    const questions = [Q4generateQ1]
    const [index, setIndex] = useState(0)

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
        <h1 className="text-4xl pt-5">Week 4: Binary Search Trees</h1>
        <VideoResource>
            <a href="https://www.youtube.com/watch?v=Gt2yBZAhsGM"></a>
        </VideoResource>

        <h1>Key Takeaways</h1>
        <ul>
            <li>BST property: Left subtree keys &lt; node key &lt; right subtree keys.</li>
            <li>Operations: Search, insert, delete in \(O(h)\); best case \(O(\log n)\).</li>
            <li>Balancing: AVL trees maintain \(O(\log n)\) height via rotations.</li>
        </ul>

        <h1>Key concepts</h1>
        <p>A Binary Search Tree (BST) is a hierarchical data structure where each node contains a key (or key-value pair) that follows a specific ordering property: all keys in the left subtree of a node are smaller than the node’s key, while all keys in the right subtree are larger. This property enables efficient searching, insertion, and deletion. A key advantage of BSTs is that an inorder traversal visits nodes in sorted order, making them useful for sorted data storage and retrieval.</p>

        <ul>
            <li>BST property: Left subtree keys &lt; node key &lt; right subtree keys.</li>
            <li>Inorder traversal: Visits nodes in ascending order.</li>
            <li>Use cases: Databases, search applications, and ordered collections.</li>
        </ul>

        <h1>Searching, Insertion, and Deletion in BSTs</h1>

        <p>Searching for a key in a BST follows a straightforward recursive approach: starting at the root, compare the target key with the node’s key. If the key is smaller, move left; if larger, move right. This continues until the key is found or an external (null) node is reached, indicating an unsuccessful search. Insertion follows the same process, except when reaching a null position, a new node is added. Deletion is slightly more complex—if the node has no children, it is simply removed; if it has one child, its parent adopts the child; if it has two children, the smallest key in the right subtree (or the largest in the left) replaces the deleted node.</p>
        
        <ul>
            <li>Search time complexity: Best case \(O(\log n)\), worst case \(O(n)\).</li>
            <li>Insertion: Locate the appropriate spot and add the new key.</li>
            <li>
                Deletion cases:
                <ol>
                    <li>Node has no children → Remove it.</li>
                    <li>Node has one child → Promote the child.</li>
                    <li>Node has two children → Replace with inorder successor/predecessor.</li>
                </ol>
            </li>
        </ul>

        <h1>Importance of Balanced BSTs</h1>
        <p>A BST&apostrophe;s efficiency is heavily dependent on its height. In the worst case (e.g., inserting elements in sorted order), the tree degenerates into a linked list with height \(O(n)\), leading to slow search operations. Balanced BSTs, such as AVL trees and Red-Black trees, enforce rules to keep the tree height at \(O(\log n)\), ensuring efficient operations. AVL trees maintain balance by performing rotations when the height difference between child subtrees exceeds 1. This rebalancing ensures that insertion, deletion, and search all operate efficiently.</p>
        <ul>
            <li>Worst-case BST height: \(O(n)\) (degenerated case).</li>
            <li>Balanced BST height: \(O(\log n)\), achieved via rotations.</li>
            <li>AVL tree balance condition: Height difference between child subtrees ≤ 1.</li>
        </ul>

        <h1>Common Mistakes and Best Practices</h1>

        <p>One of the most common mistakes in working with BSTs is not handling edge cases properly during insertion and deletion. When implementing deletion, forgetting to replace a deleted node with its inorder successor or predecessor can break the BST property. Another mistake is assuming the tree is always balanced—an unbalanced BST can be as slow as an unsorted list. To avoid this, consider using self-balancing trees like AVL or Red-Black trees.</p>

        <Tip>
            <p>Don't forget</p>
            <p>Using a tree data structure doesn't automatically mean it is efficient - consider the following tree, where each node has a right child but no left children. This is technically a tree, but really it's just a list!</p>
            <p>In the next week we look at how to build balanced trees that guarantee they are efficient.</p>
        </Tip>

        <p>Mastering BSTs is crucial for understanding more advanced data structures like AVL and Red-Black trees. By ensuring proper implementation and avoiding common pitfalls, you can efficiently manage ordered data in various applications.</p>


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