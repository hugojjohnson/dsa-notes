import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MathJaxContext } from "better-react-mathjax"

// Components
import Header from "./components/other/Header"
import Dashboard from "./components/main/Dashboard"
import { NoPage } from "./components/other/NoPage"
import One from "./components/main/lessons/1-lesson"
import Two from "./components/main/lessons/2-lesson"
import Feedback from "./components/other/Feedback"
import Three from "./components/main/lessons/3-lesson"
import Four from "./components/main/lessons/4-lesson"
import Five from "./components/main/lessons/5-lesson"

function App(): React.ReactElement {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

  return (
    <MathJaxContext config={config}>
      <BrowserRouter basename="dsa-notes">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="1-big-o-notation" element={<One />} />
            <Route path="2-lists" element={<Two />} />
            <Route path="3-trees" element={<Three />} />
            <Route path="4-bst" element={<Four />} />
            <Route path="5-priority-queues" element={<Five />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MathJaxContext>
  )
}

export default App