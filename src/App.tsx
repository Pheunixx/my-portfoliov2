import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
