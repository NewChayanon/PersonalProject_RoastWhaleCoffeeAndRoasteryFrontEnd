import RegisterForm from "../features/authentication/RegisterForm";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}
