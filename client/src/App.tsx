import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
}

export default App;
