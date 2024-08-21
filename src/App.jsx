import { Suspense } from "react";
import { UserContextProvider } from "./contexts/UserContext";
import Router from "./routes/route";
import { StockContextProvider } from "./contexts/StockContext";

export default function App() {
  return (
    <Suspense>
      <UserContextProvider>
        <StockContextProvider>
          <Router />
        </StockContextProvider>
      </UserContextProvider>
    </Suspense>
  );
}
