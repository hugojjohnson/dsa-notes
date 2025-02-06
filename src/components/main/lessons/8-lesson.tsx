import { useState } from "react";
import { Question } from "../Question";
import { Q8generateQ1 } from "../questions/8-question";
import VideoResource from "../../other/VideoResource";


export default function Eight() {
  const callback = () => {
    setIndex(index + 1)
  }

  const questions = [Q8generateQ1]
  const [index, setIndex] = useState(0)

  return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
    <h1 className="text-4xl pt-5">Week 8: Shortest path</h1>
    <VideoResource>
      <a href="https://www.youtube.com/watch?v=XB4MIexjvY0"></a>
    </VideoResource>

    <h1>Key Takeaways</h1>
    <ul>
      <li>Dijkstra’s algorithm finds shortest paths in graphs with nonnegative weights.</li>
      <li>Minimum Spanning Trees (MST) minimize total edge weight in graphs.</li>
      <li>Prim’s and Kruskal’s algorithms efficiently compute MST using different approaches.</li>
    </ul>

    <h1>Key concepts</h1>

    <p>In graph theory, finding the shortest path between two nodes and constructing a Minimum Spanning Tree (MST) are fundamental problems with many real-world applications. The shortest path problem aims to determine the minimum-weight path between nodes in a weighted graph, commonly used in GPS navigation, network routing, and flight scheduling. The MST problem, on the other hand, focuses on connecting all nodes in a graph with the minimum total edge weight, which is crucial in network design, electrical grid optimization, and clustering analysis. These problems are solved using efficient algorithms like Dijkstra’s for shortest paths and Prim’s or Kruskal’s for MSTs.</p>

    <h1>Dijkstra’s Algorithm</h1>

    <p>Dijkstra’s algorithm is a well-known method for finding the shortest path in graphs with nonnegative edge weights. The algorithm maintains a set of visited nodes and continuously expands the shortest known paths. It relies on a priority queue to always explore the closest unvisited node first, updating distances dynamically.</p>

    <p>Key steps in Dijkstra’s algorithm:</p>
    <ul>
      <li>Initialize distances: Set the source node's distance to 0, all others to ∞.</li>
      <li>Use a priority queue to pick the node with the smallest distance.</li>
      <li>Update distances of adjacent nodes using edge relaxation.</li>
      <li>Repeat until all nodes are processed.</li>
    </ul>

    <p>Using a binary heap, the time complexity of Dijkstra’s algorithm is O(m log n) (where *m* is the number of edges and *n* is the number of vertices), making it efficient for large graphs. However, it fails when graphs have negative weight edges, as it assumes that once a node's shortest path is found, it will not change.</p>

    <h1>Minimum Spanning Trees and Their Properties</h1>

    <p>A Minimum Spanning Tree (MST) of a connected, weighted graph is a subset of edges that connects all vertices while minimizing the total edge weight. Two fundamental properties govern MSTs:</p>
    <ul>
      <li>Cut Property: The smallest weight edge crossing any cut in the graph must be part of the MST.</li>
      <li>Cycle Property: The highest weight edge in any cycle cannot be part of the MST.</li>
    </ul>

    <p>These properties help in designing efficient MST algorithms like Prim’s and Kruskal’s. Both guarantee optimality, but they follow different approaches.</p>

    <h1>Prim’s vs. Kruskal’s Algorithm</h1>

    <p>Prim’s Algorithm builds the MST by growing a single tree, always adding the smallest edge that connects to the existing tree. This approach is efficient when using a priority queue, running in O(m log n) time. Kruskal’s Algorithm, on the other hand, sorts all edges by weight and selects them greedily while ensuring no cycles are formed. A Union-Find data structure helps track connected components efficiently, leading to a complexity of O(m log m).</p>
    <ul>
      <li>Prim’s is better for dense graphs since it operates efficiently with a priority queue.</li>
      <li>Kruskal’s is better for sparse graphs because it works by sorting edges first.</li>
    </ul>

    <p>Both algorithms leverage greedy strategies, ensuring optimal solutions without needing to backtrack.</p>

    <h1>Applications and Further Considerations</h1>

    <p>Shortest path and MST algorithms have widespread practical applications. Dijkstra’s algorithm is essential for navigation systems, computer networks, and AI pathfinding. MST algorithms play a crucial role in telecommunications, road planning, and data clustering. When dealing with negative weight edges, Bellman-Ford is a better choice than Dijkstra’s. Similarly, Floyd-Warshall is useful for all-pairs shortest paths in dense graphs.</p>

    <p>By understanding these algorithms and their properties, one can solve many real-world optimization problems efficiently. Choosing the right algorithm depends on the graph structure, edge weights, and performance requirements.</p>

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