import Experience from "./components/Experience";
import Committee from "./components/Committee";
import Recipes from "./components/Recipes";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-screen w-full fixed top-0 z-10  lg:block">
        <Experience />
      </div>
      <Header />
      <Hero />
      <Committee />
      <Recipes />
      <Footer />
    </main>
  );
}

export default App;
