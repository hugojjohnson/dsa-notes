import Tip from "../../other/Tip";
import { useState } from "react";
import { Question } from "../Question";
import { Q6generateQ1 } from "../questions/6-question";
import VideoResource from "../../other/VideoResource";


export default function Six() {
    const callback = () => {
        setIndex(index + 1)
    }

    const questions = [Q6generateQ1]
    const [index, setIndex] = useState(0)

    return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
        <h1 className="text-4xl pt-5">Week 6: Hash Tables</h1>
        <VideoResource>
            <a href="https://www.youtube.com/watch?v=knV86FlSXJ8"></a>
        </VideoResource>

        <h1>Key Takeaways</h1>
        <ul>
            <li>Hash tables provide O(1) expected time for insert, search, delete.</li>
            <li>Collisions are handled using chaining, probing, or cuckoo hashing methods.</li>
            <li>Load factor affects performance; resizing may be required for efficiency.</li>
        </ul>

        <h1>Key concepts</h1>
        <p>Hash tables are a fundamental data structure that provide efficient key-value storage, allowing O(1) expected time complexity for insertions, lookups, and deletions. They achieve this performance by using a hash function to convert keys into indices within a fixed-size array. However, a poor hash function can cause clustering or an uneven distribution of elements, leading to inefficiencies. Selecting a good hash function is crucial to minimizing collisions and ensuring a well-balanced distribution of keys.</p>

        <ul>
            <li>Common operations: `get(k)`, `put(k, v)`, `remove(k)`, `size()`, `is_empty()`.</li>
            <li>Ideal properties of a hash function: fast computation, uniform distribution, and minimal collisions.</li>
        </ul>

        <p>Collisions occur when two different keys are mapped to the same index, which must be resolved for proper functioning. Separate chaining and open addressing are two major collision-handling strategies. Separate chaining involves maintaining a linked list at each index, while open addressing uses techniques like linear probing, where colliding elements are placed in the next available slot. Open addressing can suffer from clustering, where consecutive occupied slots make insertions and lookups slower.  </p>

        <ul>
            <li>Separate chaining: uses linked lists to handle multiple keys at the same index.</li>
            <li>Linear probing: places new entries in the next available space.</li>
            <li>Cuckoo hashing: ensures worst-case O(1) lookup time by displacing elements.</li>
        </ul>

        <p>The load factor (α = n/N), where `n` is the number of stored elements and `N` is the table size, determines when resizing should occur. A higher load factor increases the likelihood of collisions, reducing efficiency. Many implementations, such as Python dictionaries and Java HashMaps, resize the table when the load factor exceeds a certain threshold (e.g., 0.75 for Java’s `HashSet`). Proper resizing strategies involve rehashing, where all existing keys are reassigned to a larger table using the same or a better hash function.  </p>
        <ul>
            <li>Low load factor (α &lt; 0.5) → efficient lookups, but may waste space.</li>
            <li>High load factor (α &gt; 0.75) → more collisions, leading to slower performance.</li>
            <li>Rehashing: required when the load factor becomes too high.</li>
        </ul>

        <p>Advanced hashing techniques such as universal hashing and cuckoo hashing improve performance guarantees. Universal hashing ensures a low probability of collisions by randomly selecting a hash function from a family of functions. Cuckoo hashing, inspired by the cuckoo bird's nesting behavior, moves colliding elements between two hash tables until a suitable position is found. These advanced techniques are often used in high-performance applications, such as networking and cryptography.  </p>
        <ul>
            <li>Universal hashing: selects a function randomly to reduce worst-case collisions.</li>
            <li>Cuckoo hashing: guarantees O(1) lookups, but insertions may require rehashing.</li>
            <li>Cryptographic hashing: designed for security rather than fast lookups (e.g., SHA-256).</li>
        </ul>

        Despite its efficiency, hashing has theoretical limitations. In practice, most hash table implementations assume that hash functions distribute values uniformly, but perfect uniformity is impossible. Research in perfect hashing and probabilistic methods continues to improve hash table performance in the real world. Understanding these concepts is essential for designing efficient data structures in computer science.

        <Tip>
            <p>Don't forget</p>
            <p>Hash tables have <strong>expected</strong> O(1) insert, search and delete times, but this is not the worst case.</p>
            <p>In the exam, assume that hash tables have an O(n) running times for all of these operations!</p>
        </Tip>


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