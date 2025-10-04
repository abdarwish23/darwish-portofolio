import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Awards />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
