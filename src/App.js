import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Techonologies from "./components/Techonologies";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="container mx-auto">
      <Navbar />
      <Home />
      <Techonologies />
      <Services />
      <Experience/>      
      <Blog />
      <Contact/>
      </div>
    </div>
  );
}

export default App;

