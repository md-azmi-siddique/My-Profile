// import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import CardDesign from './Components/CardDesign';
import Skills from './Components/Skills';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    {/* <CardDesign></CardDesign> */}
    <Skills></Skills>
    </>
  );
}

export default App;
