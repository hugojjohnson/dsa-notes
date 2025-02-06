import { useState } from "react";
import { Question } from "../Question";
import { Q11generateQ1 } from "../questions/11-question";
import VideoResource from "../../other/VideoResource";


export default function Eleven() {
  const callback = () => {
    setIndex(index + 1)
  }

  const questions = [Q11generateQ1]
  const [index, setIndex] = useState(0)

  return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
    <h1 className="text-4xl pt-5">Week 11: Divide and Conquer II</h1>
    <VideoResource>
      <a href="https://www.youtube.com/watch?v=3pK89m8lNp0"></a>
    </VideoResource>

    <h1>Key Takeaways</h1>
    <ul>
      <li>Divide and Conquer: Split problem, recursively solve, merge solutions for efficiency.</li>
      <li>Maxima-Set Algorithm: Sort, split, solve each half, merge non-dominated points.</li>
      <li>Karatsuba Multiplication: Reduces complexity using three recursive calls, faster computation.</li>
    </ul>

    <h1>Divide and Conquer Overview</h1>
    <p>Divide and Conquer is a powerful algorithmic strategy that breaks a problem into smaller subproblems, solves them recursively, and then merges the results to obtain the final solution. This method is particularly useful when problems exhibit optimal substructure, allowing smaller solutions to contribute effectively to the overall result. Many efficient algorithms, such as mergesort and quicksort, follow this paradigm.</p>

    <h2>Key Steps in Divide and Conquer</h2>
    <ul>
      <li><strong>Divide</strong>: Break the problem into smaller, independent subproblems.</li>
      <li><strong>Recur</strong>: Solve each subproblem recursively until reaching a base case.</li>
      <li><strong>Conquer</strong>: Merge or combine the subproblem solutions to form the final answer.</li>
    </ul>

    <h1>Maxima-Set (Pareto Frontier) Algorithm</h1>
    <p>The <strong>Maxima-Set problem</strong> involves finding points in a 2D plane that are not dominated by any other points (i.e., no other point has both a higher x- and y-coordinate). The brute-force approach checks every point against all others, leading to an inefficient \( O(n^2) \) complexity. Instead, a Divide and Conquer approach improves performance by recursively splitting the point set into two halves, solving for each half, and merging the results efficiently.</p>

    <h2>Steps in the Divide and Conquer Approach</h2>
    <ul>
      <li><strong>Sort</strong> points by x-coordinates to enable efficient comparisons.</li>
      <li><strong>Divide</strong> the sorted array into two equal halves.</li>
      <li><strong>Recur</strong> by solving for the maxima-set in each half.</li>
      <li><strong>Conquer</strong> by merging the two sets while discarding dominated points.</li>
    </ul>

    <p>This method achieves an optimal time complexity of \( O(n \log n) \).</p>

    <h1>Integer Multiplication: Naïve vs. Karatsuba’s Algorithm</h1>
    <p>Computing the product of two large numbers is a fundamental problem in computer science. The <strong>naïve approach</strong> follows the schoolbook multiplication method, requiring \( O(n^2) \) operations. However, the <strong>Karatsuba algorithm</strong> improves this by reducing the number of recursive multiplications. Instead of four smaller multiplications per step, it cleverly reduces them to three by reusing computations, lowering the overall complexity to \( O(n^&#123;\log_2 3&#125;) \approx O(n^&#123;1.6&#125;) \).</p>

    <h2>Karatsuba’s Key Insight</h2>
    <ul>
      <li>Represent numbers as two halves: \( x = x_1 2&#123;n / 2&#125; + x_0 \) and \( y = y_1 2^&#123;n / 2&#125; + y_0 \).</li>
      <li>Compute intermediate terms to reduce multiplications.</li>
      <li>Merge results efficiently using subtraction and bit shifts.</li>
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