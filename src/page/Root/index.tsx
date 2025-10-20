import Footer from "@/component/Layout/Footer";
import Header from "@/component/Layout/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
