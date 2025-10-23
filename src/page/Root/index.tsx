import Footer from "@/domain/Layout/components/Footer";
import Header from "@/domain/Layout/components/Header";
import { Outlet, useLocation } from "react-router-dom";

function Root() {
  const location = useLocation();

  const getHeaderVariant = () => {
    if (location.pathname.startsWith("/project/")) {
      return "default";
    } else return "transparent";
  };

  return (
    <div>
      <Header variant={getHeaderVariant()} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
