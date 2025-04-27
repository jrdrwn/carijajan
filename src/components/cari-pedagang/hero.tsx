'use client';

import { cn } from '@/lib/utils';
import { Candy, Pizza, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import CariJenisDagangan from './cari-jenis-dagangan';
import CariKota from './cari-kota';
import CariLokasiTerdekat from './cari-lokasi-terdekat';
import CariTags from './cari-tags';

function SidesDecorator() {
  return (
    <>
      <div className="absolute left-22 flex h-20 w-20 rotate-45 items-center justify-center rounded-md border-2 border-primary bg-muted shadow">
        <Candy size={52} className="text-primary" />
      </div>
      <div className="absolute top-50 left-45 flex h-20 w-20 rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow">
        <Pizza size={52} className="text-primary" />
      </div>
      <div className="absolute top-80 left-20 flex h-20 w-20 rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow">
        <UtensilsCrossed size={52} className="text-primary" />
      </div>
      <div className="absolute right-22 flex h-20 w-20 scale-x-[-1] -rotate-45 items-center justify-center rounded-md border-2 border-primary bg-muted shadow">
        <Candy size={52} className="text-primary" />
      </div>
      <div className="absolute top-50 right-45 flex h-20 w-20 scale-x-[-1] -rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow">
        <Pizza size={52} className="text-primary" />
      </div>
      <div className="absolute top-80 right-20 flex h-20 w-20 scale-x-[-1] -rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow">
        <UtensilsCrossed size={52} className="text-primary" />
      </div>
    </>
  );
}

export function Hero() {
  const searchParams = useSearchParams();
  const [q, setQ] = useState<string>('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get('q')) {
      setQ(searchParams.get('q') as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative container mx-auto flex justify-center pt-16 pb-12">
      <div>
        <SidesDecorator />
        <h1 className="mt-4 mb-8 max-w-4xl bg-gradient-to-b from-orange-900 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-wide text-transparent">
          Temukan Pedagang Kaki Lima di Sekitarmu!
        </h1>
        <div className="mx-auto mt-12 flex items-center justify-center gap-4">
          <Input
            type="search"
            placeholder="Contoh: Gorengan Renyah..."
            className="w-full max-w-[400px] px-4 py-6"
            onChange={(e) => setQ(e.target.value)}
            value={q}
          />
          <Button className="px-4 py-6" asChild>
            <Link
              scroll={false}
              href={{
                pathname: '/cari-pedagang',
                query: { q },
              }}
            >
              Cari
            </Link>
          </Button>
          <Button
            className="px-4 py-6"
            variant={'secondary'}
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            Filter
          </Button>
        </div>
        <div
          className={cn(
            'mt-4 items-center justify-center gap-4 overflow-hidden transition-all duration-300',
            filterOpen ? 'flex' : 'hidden',
          )}
        >
          <CariLokasiTerdekat />
          <CariKota />
          <CariTags />
          <CariJenisDagangan />
        </div>
      </div>
    </section>
  );
}
