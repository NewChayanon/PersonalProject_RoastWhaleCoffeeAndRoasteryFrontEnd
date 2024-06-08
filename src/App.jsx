import { UserContextProvider } from "./contexts/UserContext";
import Router from "./routes/route";

export default function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}
