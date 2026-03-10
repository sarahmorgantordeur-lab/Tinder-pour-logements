import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";
import { HomeProvider } from "./contexts/HomeContext";

function App() {
  return (
    <>
      <AuthProvider>
      <HomeProvider>
        <AppRouter />
      </HomeProvider>
      </AuthProvider>
    </>
  );
}

export default App;