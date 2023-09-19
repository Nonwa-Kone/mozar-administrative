import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Outlet/>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
