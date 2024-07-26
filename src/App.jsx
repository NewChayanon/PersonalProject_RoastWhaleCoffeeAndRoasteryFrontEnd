import { Suspense } from "react";
import { UserContextProvider } from "./contexts/UserContext";
import Router from "./routes/route";
import Spinner from "./components/Spinner";

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </Suspense>
  );
}
