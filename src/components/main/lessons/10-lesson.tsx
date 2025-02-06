import { useState } from "react";
import { Question } from "../Question";
import { Q10generateQ1 } from "../questions/10-question";
import VideoResource from "../../other/VideoResource";


export default function Ten() {
  const callback = () => {
    setIndex(index + 1)
  }

  const questions = [Q10generateQ1]
  const [index, setIndex] = useState(0)

  return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
    <h1 className="text-4xl pt-5">Week 10: Divide and Conquer I</h1>
    <VideoResource>
      <a href="https://www.youtube.com/watch?v=4VqmGXwpLqc"></a>
    </VideoResource>

    <h1>Key Takeaways</h1>
    <ul>
      <li>Divide and Conquer splits problems, solves subproblems, and merges solutions efficiently.</li>
      <li>Binary search runs in O(log n) by halving the search space.</li>
      <li>Merge sort achieves O(n log n) by recursively sorting halves.</li>
    </ul>

    <p>
      Divide and Conquer is a fundamental algorithmic strategy that breaks a problem into smaller subproblems,
      solves each recursively, and then combines the solutions to form the final result. This method is particularly
      effective for problems that exhibit overlapping subproblems and optimal substructure. Many efficient algorithms,
      such as <strong>Merge Sort</strong>, <strong>Binary Search</strong>, and <strong>Quick Sort</strong>,
      follow this paradigm. The power of this approach lies in its ability to reduce the problem size exponentially at each step,
      leading to logarithmic or near-logarithmic time complexity.
    </p>

    <h2>Steps of Divide and Conquer</h2>
    <ul>
      <li><strong>Divide</strong> – If the problem is small, solve it directly; otherwise, break it into smaller parts.</li>
      <li><strong>Recur</strong> – Solve each subproblem recursively, assuming the smaller cases are already solved.</li>
      <li><strong>Conquer</strong> – Merge the results from subproblems to obtain the final solution.</li>
    </ul>

    <h1>Binary Search: Efficient Searching in Sorted Data</h1>

    <p>
      Binary Search is a classic application of Divide and Conquer that efficiently locates a target value in a sorted array.
      Instead of scanning each element linearly (O(n) time complexity), it <strong>halves the search space</strong> at every step,
      reducing the complexity to <strong>O(log n)</strong>. The process involves checking the middle element of the array:
    </p>

    <ul>
      <li>If the target value is found, return the index.</li>
      <li>If the target is smaller, search in the left half.</li>
      <li>If the target is larger, search in the right half.</li>
    </ul>

    <p>
      This recursive halving continues until the array size becomes zero, ensuring that the search is extremely efficient even for
      large datasets. However, <strong>Binary Search only works on sorted data</strong>, making preprocessing a key consideration.
    </p>

    <h1>Merge Sort: A Stable and Efficient Sorting Algorithm</h1>

    <p>
      Merge Sort is an optimal sorting algorithm that leverages Divide and Conquer to achieve <strong>O(n log n) complexity</strong>.
      It splits the array into two halves, recursively sorts them, and then merges the sorted halves. The merging step ensures that
      the final list remains <strong>sorted and stable</strong> (meaning equal elements retain their original order).
    </p>

    <h2>Key properties of Merge Sort:</h2>
    <ul>
      <li><strong>Time Complexity:</strong> Always O(n log n), regardless of input order.</li>
      <li><strong>Space Complexity:</strong> O(n), due to auxiliary space for merging.</li>
      <li><strong>Stability:</strong> Yes, it preserves the order of equal elements.</li>
    </ul>

    <p>
      Unlike quicksort, which can degrade to O(n²) in the worst case, Merge Sort maintains <strong>consistent performance</strong>
      but requires additional memory.
    </p>

    <h1>Recurrence Relations and Complexity Analysis</h1>

    <p>
      Divide and Conquer algorithms often rely on <strong>recurrence relations</strong> to analyze their performance.
      A recurrence equation expresses the runtime <strong>T(n)</strong> of...
    </p>

    
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