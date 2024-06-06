import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainContainer() {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
