import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/Home";
import { useThemeStore } from "./store/themeStore";
function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <main className={`flex h-screen ${theme === "dark" ? "dark" : ""}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor/:roomId" element={<EditorPage />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Toaster />
    </>
  );
}

export default App;
