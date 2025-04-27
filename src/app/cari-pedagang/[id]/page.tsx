import DetailPedagang from '@/components/cari-pedagang/detail-pedagang';
import EndCTA from '@/components/shared/end-cta';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CariPedagang({ params }: Props) {
  return (
    <>
      <Header />
      <DetailPedagang params={await params} />
      <EndCTA />
      <Footer />
    </>
  );
}
