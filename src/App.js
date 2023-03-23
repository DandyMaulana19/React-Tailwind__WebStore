import Navbar from './components/Navbar';
import Story from './components/Story';
import Services from './components/Services';
import Property from './components/Property';
import Servis from './components/Servis';
import Footer from './components/Footer';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Story/>
      <Services />
      <Property />
      <Servis />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;