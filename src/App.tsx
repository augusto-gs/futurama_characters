import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharactersListPage } from "./pages/CharactersListPage/CharactersListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";
import { StatusMessage } from "./components/StatusMessage/StatusMessage";
import { SquareMousePointer } from "lucide-react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<CharactersListPage />}>
          <Route
            index
            element={
              <StatusMessage
                variant="empty"
                title="Select a character"
                description=""
                icon={<SquareMousePointer />}
              />
            }
          />
          <Route path=":id" element={<CharacterDetailPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/characters" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
