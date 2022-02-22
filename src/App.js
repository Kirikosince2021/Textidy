import './styles/css/reset.css';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Howto } from './components/Howto';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Howto />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
