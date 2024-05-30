import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState([]);
  const { t } = useTranslation();

  return (
    <div className="App d-flex flex-column">
      <Router>
        <Navbar />
        <div className="main-content">
          <h1>Certificaciones Universidad Adolfo Ibañez</h1>
          {
            !user.length > 0
              ? <Login setUser={setUser} />
              : <Home user={user} setUser={setUser} />
          }
        </div>
      </Router>
      <Footer className="fixed-bottom" />
    </div>
  );
}

export default App;
