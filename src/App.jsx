import Annoucement from "./pages/Annoucement";
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
    </div>
  );
}

export default App;
