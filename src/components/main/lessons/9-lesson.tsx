import { useState } from "react";
import { Question } from "../Question";
import { Q9generateQ1 } from "../questions/9-question";
import VideoResource from "../../other/VideoResource";


export default function Nine() {
  const callback = () => {
    setIndex(index + 1)
  }

  const questions = [Q9generateQ1]
  const [index, setIndex] = useState(0)

  return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
    <h1 className="text-4xl pt-5">Week 9: Greedy Algorithms</h1>
    <VideoResource>
      <a href="https://www.youtube.com/watch?v=ARvQcqJ_-NY"></a>
    </VideoResource>
    <p>Greedy algorithms are a class of algorithms that make decisions step by step, choosing the best possible option at each stage in the hope of reaching an optimal global solution. They are often simple to implement and can be highly efficient, but they are not always guaranteed to find the best solution. A key characteristic of greedy algorithms is that they never reconsider previous choices; instead, they proceed with the decision that seems best at the moment. This makes them particularly useful for problems where local choices lead directly to a globally optimal solution.</p>
    <h1>Key Takeaways</h1>
    <ul>
      <li>Greedy algorithms make locally optimal choices to build a solution.</li>
      <li>Fractional knapsack is optimally solved using benefit-to-weight ratio.</li>
      <li>Huffman encoding efficiently compresses text using a greedy tree.</li>
    </ul>

    <h2>Key characteristics of greedy algorithms:</h2>
    <ul>
      <li>They make decisions based only on current information, without backtracking.</li>
      <li>They work well when an optimal substructure exists (i.e., optimal solutions to subproblems lead to an optimal global solution).</li>
      <li>They are often faster than other approaches like dynamic programming but may fail for certain problem variations.</li>
    </ul>

    <h1>The Fractional Knapsack Problem</h1>

    <p>One of the classic applications of greedy algorithms is the <strong>Fractional Knapsack Problem</strong>, where the goal is to maximize the total benefit of items placed in a knapsack without exceeding a given weight limit. Unlike the 0-1 knapsack problem, where items must be entirely included or excluded, fractional knapsack allows taking fractions of items. The best approach is to sort items based on their <strong>benefit-to-weight ratio</strong> and greedily select items with the highest ratio until the knapsack is full. Since each decision optimally fills the knapsack step by step, this greedy approach guarantees an optimal solution.</p>

    <h2>Steps in solving the fractional knapsack problem:</h2>
    <ul>
      <li>Sort items by their <strong>benefit-to-weight</strong> ratio in descending order.</li>
      <li>Pick the item with the highest ratio and take as much as possible.</li>
      <li>Repeat until the knapsack reaches its weight capacity.</li>
    </ul>

    <h1>Task Scheduling and Interval Partitioning</h1>

    <p>Another well-known greedy algorithm is used for <strong>task scheduling</strong>, where the goal is to allocate tasks or lectures to the fewest number of classrooms without overlap. The key idea is to <strong>sort lectures by start time</strong> and assign them to the first available classroom. A related problem, <strong>interval partitioning</strong>, determines the minimum number of resources required based on the depth of overlapping intervals. This problem highlights how greedy algorithms can provide efficient solutions to scheduling problems when they maintain a <strong>priority-based approach</strong> to handling constraints.</p>

    <h2>Why greedy scheduling works well:</h2>
    <ul>
      <li>Sorting by start time ensures lectures are processed in an organized manner.</li>
      <li>The algorithm guarantees that no two overlapping lectures share the same room.</li>
      <li>Using a priority queue optimizes room allocation dynamically.</li>
    </ul>

    <h1>Huffman Encoding for Text Compression</h1>

    <p>Greedy algorithms are also powerful for <strong>text compression</strong>, as seen in <strong>Huffman encoding</strong>. This algorithm efficiently encodes characters by assigning shorter binary codes to frequent characters and...</p>


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