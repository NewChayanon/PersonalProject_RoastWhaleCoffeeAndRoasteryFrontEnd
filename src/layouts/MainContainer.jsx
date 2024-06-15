import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainContainer() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Header />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
