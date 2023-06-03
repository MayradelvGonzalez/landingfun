import './App.css';
import Main from './components/Main/main.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
         <Main />
         <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
