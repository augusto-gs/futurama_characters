import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharactersListPage } from "./pages/CharactersListPage/CharactersListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<CharactersListPage />}>
          <Route index element={<p>Select a character</p>} />
          <Route path=":id" element={<CharacterDetailPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/characters" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
