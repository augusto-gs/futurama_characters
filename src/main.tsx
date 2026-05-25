import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FavouritesProvider } from "./context/FavouritesProvider";
import "./styles/global.scss";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </StrictMode>
);
