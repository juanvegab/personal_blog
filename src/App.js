import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NAV_ROUTES } from './constants/routesList';
import { Routes } from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlogProvider } from './services/state/BlogStateProvider';

function App() {
  return (
    <Router>
      <BlogProvider>
        <Header routes={NAV_ROUTES} />
        <Routes />
        <Footer />
      </BlogProvider>
    </Router>
  );
}

export default App;
