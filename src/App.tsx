import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MathJaxContext } from "better-react-mathjax"

// Components
import Header from "./components/other/Header"
import Dashboard from "./components/main/Dashboard"
import { NoPage } from "./components/other/NoPage"
// import Choose from "./components/main/Choose"
// import Learn from "./components/main/Learn"
import One from "./components/main/lessons/1"
import Privacy from "./components/other/Privacy"

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="learn/" element={<Learn />} />
            <Route path="choose/:topicid?" element={<Choose />} /> */}
            <Route path="one" element={<One />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MathJaxContext>
  )
}

export default App