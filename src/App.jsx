import Annoucement from "./pages/Annoucement";
import CallToAction from "./pages/CallToAction";
import Feature from "./pages/Feature";
import Feature2 from "./pages/Feature2";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import LogoSection from "./pages/LogoSection";
import Metric from "./pages/Metric";
import Navbar from "./pages/Navbar";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="max-w-[375px] sm:max-w-[100vw] bg-[#FFF] ">
      <Annoucement />
      <Navbar />
      <Hero />
      <LogoSection />
      <Feature />
      <Feature2 />
      <Metric />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
