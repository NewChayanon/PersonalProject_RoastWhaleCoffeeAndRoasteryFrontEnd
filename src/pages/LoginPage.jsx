import LoginForm from "../features/authentication/LoginForm";
import Footer from "../layouts/Footer";

import Header from "../layouts/Header";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <LoginForm />
      <Footer/>
    </div>
  );
}
