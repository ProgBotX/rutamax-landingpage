import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderiza el contenido de cada página */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
