import Annoucement from "./pages/Annoucement";
import Feature from "./pages/Feature";
import Hero from "./pages/Hero";
import LogoSection from "./pages/LogoSection";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="max-w-[375px] sm:max-w-[100vw]">
      <Annoucement />
      <Navbar />
      <Hero />
      <LogoSection />
      <Feature />
    </div>
  );
}

export default App;
