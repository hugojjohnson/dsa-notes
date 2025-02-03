import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MathJaxContext } from "better-react-mathjax"

// Components
import Header from "./components/other/Header"
import Dashboard from "./components/main/Dashboard"
import { NoPage } from "./components/other/NoPage"
import One from "./components/main/lessons/lesson-1"
import Two from "./components/main/lessons/lesson-2"
import Feedback from "./components/other/Feedback"

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
            <Route path="feedback" element={<Feedback />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MathJaxContext>
  )
}

export default App