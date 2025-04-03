import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet /> {/* Aquí se renderiza el contenido de cada página */}
      </main>
    </>
  );
};

export default Layout;
