import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function ProtectedRoute({ children }) {
  const { isUser } = useUser();
  if (!isUser) {
    return <Navigate to="/logins" />;
  }
  return <>{children}</>;
}
