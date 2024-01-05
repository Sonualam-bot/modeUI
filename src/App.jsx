import Annoucement from "./pages/Annoucement";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="max-w-[375px] sm:max-w-[100vw] ">
      <Annoucement />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
