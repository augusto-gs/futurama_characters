import { Outlet, useParams } from "react-router-dom";
import styles from "./CharactersListPage.module.scss";

export function CharacterListPage() {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);

  return (
    <div
      className={`${styles.layout} ${isDetailOpen ? styles["layout--detail-open"] : ""}`}
    >
      <aside className="layout__list">
        <h1>Characters List</h1>
      </aside>
      <main className="layout__detail">
        <Outlet />
      </main>
    </div>
  );
}
