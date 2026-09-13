import { Navbar } from "./Navbar";
import { Home } from "../Pages/Home";
import { Services } from "../Pages/Services";
import { Skills } from "../Pages/Skills";
import { Projects } from "../Pages/Projects";
import { Contact } from "../Pages/Contact";
import { Footer } from "../Pages/Footer";
import { About } from "../Pages/About";

export const Portfolio = () => {
  
  return (
    <>
      <Navbar />
      <main className="pt-15">
        <section id="home">
          <Home />
        </section>
     
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
};