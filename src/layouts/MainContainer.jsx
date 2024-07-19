import Spinner from "../components/Spinner";
import { useUser } from "../hooks/useUser";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainContainer() {
  const {isUser}=useUser()
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      {isUser && <Spinner/>}
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
