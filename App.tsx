import Header from './components/Header';
import Hero from './components/Hero';
import SkillsShowcase from './components/SkillsShowcase';
import TechnologyStack from './components/TechnologyStack';
import AIFeatures from './components/AIFeatures';
import ExperienceAreas from './components/ExperienceAreas';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SkillsShowcase />
      <TechnologyStack />
      <AIFeatures />
      <ExperienceAreas />
      <Footer />
    </div>
  );
}

export default App;
