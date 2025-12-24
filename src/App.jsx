import Navbar from "./layout/Navbar";
import About from "./section/About";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from "./layout/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Ram Suryawanshi | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer building scalable, production-ready web applications with React, Node.js, and modern cloud tools."
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
