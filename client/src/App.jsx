import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";
import { HomeProvider } from "./contexts/HomeContext";

function App() {
  return (
    <>
      <HomeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      </HomeProvider>
    </>
  );
}

export default App;