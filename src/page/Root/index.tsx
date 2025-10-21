import Footer from "@/domain/Layout/Footer";
import Header from "@/domain/Layout/Header";
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
