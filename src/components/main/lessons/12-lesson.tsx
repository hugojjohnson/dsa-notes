import { useState } from "react";
import { Question } from "../Question";
import { Q12generateQ1 } from "../questions/12-question";
import VideoResource from "../../other/VideoResource";


export default function Twelve() {
  const callback = () => {
    setIndex(index + 1)
  }

  const questions = [Q12generateQ1]
  const [index, setIndex] = useState(0)

  return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
    <h1 className="text-4xl pt-5">Week 12: Randomised Algorithms</h1>
    <VideoResource>
      <a href="https://www.youtube.com/watch?v=Hoixgm4-P4M"></a>
    </VideoResource>

    <h1>Key Takeaways</h1>
    <ul>
      <li>Randomised algorithms use randomness to improve efficiency and avoid worst cases.</li>
      <li>Fisher-Yates algorithm ensures uniform random permutations in O(n) time.</li>
      <li>Skip lists offer O(log n) search, insert, and delete performance.</li>
    </ul>

    <h1>Randomised Algorithms and Their Benefits</h1>
    <p>Randomised algorithms incorporate randomness into their logic to improve efficiency, avoid worst-case scenarios, and simplify solutions to complex problems. Unlike deterministic algorithms, which produce the same output for a given input every time, randomised algorithms introduce variability in execution. This can be beneficial in various applications, such as sorting, sampling, and resource allocation.</p>

    <h2>Benefits of Randomised Algorithms:</h2>
    <ul>
      <li><strong>Avoid worst-case scenarios</strong> – Some algorithms, like QuickSort, perform poorly on already sorted data. Randomisation helps mitigate this.</li>
      <li><strong>Simpler implementation</strong> – Randomised algorithms can often be more straightforward than their deterministic counterparts.</li>
      <li><strong>Load balancing</strong> – Helps in distributing resources in an unpredictable but efficient manner.</li>
      <li><strong>Better average performance</strong> – Many randomised algorithms offer strong expected performance guarantees.</li>
    </ul>

    <h1>Randomised QuickSort and Its Complexity</h1>
    <p>QuickSort is a classic example of an algorithm that benefits from randomisation. It works by selecting a pivot element and partitioning the array into elements smaller and greater than the pivot. The key improvement with the randomised version is that it selects a pivot randomly, which prevents consistently poor performance on already sorted or nearly sorted arrays.</p>

    <h2>QuickSort Steps:</h2>
    <ol>
      <li><strong>Select a random pivot</strong> from the array.</li>
      <li><strong>Partition the array</strong> into three groups: elements less than, equal to, and greater than the pivot.</li>
      <li><strong>Recursively apply QuickSort</strong> to the smaller and larger partitions.</li>
      <li><strong>Combine the partitions</strong> to form the final sorted array.</li>
    </ol>
    <p>The expected time complexity of QuickSort with randomisation is <strong>O(n log n)</strong>, making it one of the most efficient sorting algorithms in practice.</p>

    <h1>Random Permutations and Fisher-Yates Algorithm</h1>
    <p>Generating a truly random permutation is crucial for many applications, including sampling, shuffling, and simulation. A naïve approach of swapping each element with a randomly chosen index often results in biased distributions, meaning some permutations are more likely than others. The <strong>Fisher-Yates shuffle</strong> correctly ensures uniform randomness.</p>

    <h2>Fisher-Yates Algorithm:</h2>
    <ul>
      <li>Start with an array of size <strong>n</strong>.</li>
      <li>Swap each element <strong>i</strong> with a randomly chosen element from <strong>i</strong> to <strong>n - 1</strong>.</li>
      <li>Ensures all permutations are equally probable.</li>
      <li>Runs in <strong>O(n) time</strong> and is widely used in programming for efficient shuffling.</li>
    </ul>

    <h1>Skip Lists: A Randomised Data Structure</h1>
    <p>Skip lists provide an alternative to balanced trees for efficient searching, insertion, and deletion. Instead of strict balancing like AVL trees, they use a <strong>hierarchical structure with probabilistic balancing</strong>, meaning elements are randomly placed at different levels. This allows for efficient operations while keeping implementation simple.</p>

    <h2>Skip List Properties:</h2>
    <ul>
      <li>Each node has multiple levels; higher levels store fewer elements.</li>
      <li>Searching moves both horizontally (within levels) and vertically (between levels).</li>
      <li>Insertions use <strong>coin flips</strong> to determine how high a new element should be placed.</li>
      <li>Expected search, insert, and delete time is <strong>O(log n)</strong>.</li>
    </ul>

    <h1>Why Randomisation Matters in Computer Science</h1>
    <p>Randomisation is a powerful tool in algorithm design, offering benefits beyond just sorting and searching. It plays a role in fields like <strong>cryptography, game theory, and distributed computing</strong>. The unpredictability introduced by randomisation often leads to robust and adaptable algorithms.</p>

    <h2>Key Takeaways:</h2>
    <ul>
      <li><strong>Randomisation improves efficiency and avoids predictable worst-case scenarios.</strong></li>
      <li><strong>QuickSort benefits from random pivots, achieving O(n log n) expected time.</strong></li>
      <li><strong>Fisher-Yates shuffle ensures unbiased, uniform random permutations in O(n) time.</strong></li>
      <li><strong>Skip lists provide O(log n) expected time complexity without explicit rebalancing.</strong></li>
      <li><strong>Randomised algorithms are widely used in real-world applications, from databases to cryptography.</strong></li>
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