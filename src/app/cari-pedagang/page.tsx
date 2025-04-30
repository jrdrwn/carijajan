import { Hero } from '@/components/cari-pedagang/hero';
import ListPedagang from '@/components/cari-pedagang/list-pedagang';
import Announcement from '@/components/shared/announcement';
import EndCTA from '@/components/shared/end-cta';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function CariPedagang() {
  return (
    <>
      <Header />
      <Hero />
      <ListPedagang />
      <EndCTA />
      <Footer />
      <Announcement />
    </>
  );
}
