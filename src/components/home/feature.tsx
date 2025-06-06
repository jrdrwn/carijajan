import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function Feature() {
  return (
    <section className="container mx-auto px-2 py-16">
      <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
        <Card className="py-3 sm:py-6 lg:row-span-2 lg:py-4 xl:py-6">
          <CardContent className="flex flex-col gap-4 px-3 sm:px-6 lg:px-4 xl:px-6">
            <Image
              src={
                'https://images.unsplash.com/photo-1620802421041-cfb402036374'
              }
              alt="hero"
              width={800}
              height={800}
              className="h-110 rounded-lg object-cover object-center"
            />
            <CardTitle className="text-xl sm:text-2xl">
              Mengapa Kami Ada?
            </CardTitle>
            <CardDescription className="text-base xl:text-lg">
              Di balik kesibukan kota, pedagang kaki lima adalah bagian penting
              dari kehidupan sehari-hari. Mereka menyajikan cita rasa, cerita,
              dan kehangatan yang sering terlupakan.
            </CardDescription>
            <CardDescription className="text-base xl:text-lg">
              Namun, terkadang kita kesulitan menemukannya. Apakah mereka masih
              berjualan? Di mana lokasi mereka hari ini?
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="py-3 sm:py-6 lg:col-span-1 lg:py-4 xl:py-6">
          <CardContent className="flex flex-col gap-4 px-3 sm:px-6 lg:px-4 xl:px-6">
            <Image
              src={
                'https://images.unsplash.com/photo-1600728619239-d2a73f7aa541'
              }
              alt="hero"
              width={800}
              height={800}
              className="rounded-lg object-cover object-center lg:h-45 xl:h-40"
            />
            <CardTitle className="text-xl sm:text-2xl">
              Bukan Tempat untuk Memesan Makanan
            </CardTitle>
            <CardDescription className="text-base xl:text-lg">
              Kami adalah ruang untuk menemukan, menjelajahi, dan mendukung
              pedagang kaki lima di sekitarmu.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="py-3 sm:py-6 lg:col-span-1 lg:py-4 xl:py-6">
          <CardContent className="flex flex-col gap-4 px-3 sm:px-6 lg:px-4 xl:px-6">
            <Image
              src={
                'https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e'
              }
              alt="hero"
              width={800}
              height={800}
              className="h-25 rounded-lg object-cover object-center"
            />
            <CardTitle className="text-xl sm:text-2xl">
              Untuk Pedagang Kecil, Bukan untuk Restoran Besar!
            </CardTitle>
            <CardDescription className="text-base xl:text-lg">
              Kami hadir khusus untuk para pedagang kaki lima. Mereka yang tidak
              memiliki ruko, yang berjualan di trotoar, di pinggir jalan, atau
              di lapangan. Di sinilah mereka mendapatkan panggung.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="py-3 sm:py-6 lg:col-span-2 lg:py-4 xl:py-6">
          <CardContent className="flex flex-col gap-4 px-3 sm:px-6 lg:px-4 xl:px-6">
            <Image
              src={
                'https://images.unsplash.com/photo-1572000423136-e94e163fb50b'
              }
              alt="hero"
              width={800}
              height={800}
              className="w-full rounded-lg object-cover object-center lg:h-45 xl:h-50"
            />
            <CardTitle className="text-xl sm:text-2xl">
              Dukung Usaha Mikro Kecil dan Menengah (UMKM) Lokal!
            </CardTitle>
            <CardDescription className="text-base xl:text-lg">
              Dengan menggunakan platform ini, kamu tidak hanya menemukan
              makanan lezat — kamu juga berkontribusi untuk mendukung pelaku
              usaha kecil agar tetap bertahan dan berkembang.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
