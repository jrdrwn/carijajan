import Feature from "@/components/home/feature";
import Hero from "@/components/home/hero";
import EndCTA from "@/components/shared/end-cta";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <EndCTA />
      <Footer />
    </>
  );
}
