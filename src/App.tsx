import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Programs from "./components/Programs";
import AboutFounder from "./components/AboutFounder";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Programs />
        <AboutFounder />
      </main>
      <Footer />
    </>
  );
}

export default App;
