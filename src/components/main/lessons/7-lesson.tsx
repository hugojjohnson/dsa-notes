import { useState } from "react";
import { Question } from "../Question";
import { Q7generateQ1 } from "../questions/7-question";
import VideoResource from "../../other/VideoResource";


export default function Seven() {
  const callback = () => {
    setIndex(index + 1)
  }

  const questions = [Q7generateQ1]
  const [index, setIndex] = useState(0)

  return <div className="mt-28 mx-auto max-w-screen-2xl w-full h-full flex flex-col markdown">
    <h1 className="text-4xl pt-5">Week 7: Graph Traversals</h1>
    <VideoResource>
      <a href="https://www.youtube.com/watch?v=pcKY4hjDrxk"></a>
    </VideoResource>

    <h1>Key Takeaways</h1>
    <ul>
      <li>Graphs consist of vertices (nodes) and edges (connections between them).</li>
      <li>DFS explores deeply first, while BFS visits breadth-wise level-by-level.</li>
      <li>Graph algorithms help find paths, cycles, and shortest distances.</li>
    </ul>

    <h1>Key concepts</h1>

    <p>Graphs are a fundamental data structure in computer science, consisting of vertices (nodes) and edges (connections). They can be either directed (edges have a direction) or undirected (edges do not have a direction). Graphs are used in various real-world applications, such as transportation networks, social networks, circuit design, and web crawling. One of the most important operations on graphs is traversal, where we systematically visit vertices and edges to extract information or solve problems.</p>

    <h1>Depth-First Search (DFS)</h1>
    <p>DFS is a traversal technique that explores as deeply as possible along one branch before backtracking. It is implemented using recursion or an explicit stack. DFS is useful for detecting cycles, finding connected components, and constructing spanning trees.</p>

    <ul>
      <li>Time Complexity: \( O(n + m) \) (where \( n \) is the number of vertices, and \( m \) is the number of edges)</li>
      <li>
        Applications:
        <ol>
          <li>Finding paths in a maze or puzzle</li>
          <li>Detecting cycles in a graph</li>
          <li>Solving problems in AI and game theory (e.g., backtracking)</li>
        </ol>
      </li>
    </ul>

    <h1>Breadth-First Search (BFS)</h1>
    <p>BFS explores all neighbors of a node before moving to their neighbors, making it ideal for shortest-path calculations in unweighted graphs. Unlike DFS, BFS is typically implemented using a queue.</p>

    <ul>
      <li>Time Complexity: \( O(n + m) \)</li>
      <li>
        Applications:
        <ol>
          <li>Finding the shortest path in an unweighted graph</li>
          <li>Social media friend recommendations</li>
          <li>Web crawlers for search engines</li>
        </ol>
      </li>
    </ul>

    <h1>Graph Connectivity and Structure</h1>
    <p>Graphs can be connected or disconnected, where a connected graph has a path between every pair of vertices. Some important properties include:</p>

    <ul>
      <li>Acyclic graphs: Graphs without cycles (e.g., trees)</li>
      <li>Spanning tree: A subgraph that connects all vertices with minimal edges</li>
      <li>Cut edges (bridges): Removing these edges increases the number of connected components</li>
      <li>Bipartite graphs: Graphs that can be colored with two colors without adjacent nodes sharing the same color</li>
    </ul>

    <h1>Choosing the Right Traversal</h1>
    <p>Both DFS and BFS have distinct advantages, and choosing the right algorithm depends on the problem:</p>

    <p>Use DFS when:</p>
    <ul>
      <li>You need to explore all possible paths (e.g., puzzles, backtracking problems)</li>
      <li>Detecting cycles or strongly connected components</li>
    </ul>

    <p>Use BFS when:</p>
    <li>Finding the shortest path in an unweighted graph</li>
    <li>Solving problems where all nodes at a given depth should be processed first</li>

    <p>Graph traversal techniques are essential tools for solving computational problems, from network routing to artificial intelligence. Understanding their properties helps in designing efficient algorithms for real-world applications.</p>

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