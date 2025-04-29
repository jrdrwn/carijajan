import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';

import { Button } from '../ui/button';

export default function EndCTA() {
  return (
    <section className="flex h-full flex-col items-center justify-center px-2">
      <div className="relative container mx-auto flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-border bg-secondary/50 px-4 py-20">
        <h1 className="z-10 mb-4 text-center text-xl font-medium text-secondary-foreground lg:text-2xl xl:text-4xl">
          Mari Bergabung untuk Menyebarkan Cita Rasa Lokal!
        </h1>
        <p className="z-10 mb-6 max-w-4xl text-center text-sm text-secondary-foreground/80 md:text-lg">
          Platform ini tumbuh berkat komunitasnya. Kamu bisa membantu orang lain
          menemukan pedagang favorit, sekaligus mendukung para pedagang kecil
          untuk mendapatkan lebih banyak pelanggan.
        </p>
        <Link href="#" className="z-10">
          <Button size={'lg'}>Yuk cobain!</Button>
        </Link>
        <Boxes />
      </div>
    </section>
  );
}
