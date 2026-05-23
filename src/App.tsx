import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharacterListPage } from "./pages/CharactersListPage/CharactersListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<CharacterListPage />}>
          <Route index element={<p>Select a character</p>} />
          <Route path=":id" element={<CharacterDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
