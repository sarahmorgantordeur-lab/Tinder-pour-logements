import { AuthProvider } from './context/AuthContext';
import Navbar from './components/navigation/Navbar';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main className="app-main">
        <AppRouter />
      </main>
    </AuthProvider>
  );
}

export default App;
