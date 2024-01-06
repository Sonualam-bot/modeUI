import Annoucement from "./pages/Annoucement";
import Feature from "./pages/Feature";
import Feature2 from "./pages/Feature2";
import Hero from "./pages/Hero";
import LogoSection from "./pages/LogoSection";
import Metric from "./pages/Metric";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="max-w-[375px] sm:max-w-[100vw]">
      <Annoucement />
      <Navbar />
      <Hero />
      <LogoSection />
      <Feature />
      <Feature2 />
      <Metric />
    </div>
  );
}

export default App;
