'use client';

import { cn } from '@/lib/utils';
import { Candy, Filter, Pizza, Search, UtensilsCrossed } from 'lucide-react';
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
      <div className="absolute left-22 hidden h-20 w-20 rotate-45 items-center justify-center rounded-md border-2 border-primary bg-muted shadow lg:flex">
        <Candy size={52} className="text-primary" />
      </div>
      <div className="absolute top-50 left-45 hidden h-20 w-20 rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow lg:flex">
        <Pizza size={52} className="text-primary" />
      </div>
      <div className="absolute top-80 left-20 hidden h-20 w-20 rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow lg:flex">
        <UtensilsCrossed size={52} className="text-primary" />
      </div>
      <div className="absolute right-22 hidden h-20 w-20 scale-x-[-1] -rotate-45 items-center justify-center rounded-md border-2 border-primary bg-muted shadow lg:flex">
        <Candy size={52} className="text-primary" />
      </div>
      <div className="absolute top-50 right-45 hidden h-20 w-20 scale-x-[-1] -rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow lg:flex">
        <Pizza size={52} className="text-primary" />
      </div>
      <div className="absolute top-80 right-20 hidden h-20 w-20 scale-x-[-1] -rotate-12 items-center justify-center rounded-md border-2 border-primary bg-muted shadow lg:flex">
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
    <section className="relative container mx-auto flex justify-center px-2 pt-8 pb-6 lg:px-0 lg:pt-16 lg:pb-12">
      <div>
        <SidesDecorator />
        <h1 className="mt-4 mb-8 max-w-4xl bg-gradient-to-b from-orange-900 to-neutral-500 bg-clip-text text-center text-4xl leading-tight font-bold tracking-wide text-transparent lg:text-7xl">
          Temukan Pedagang Kaki Lima di Sekitarmu!
        </h1>
        <div className="mx-auto mt-12 flex items-center justify-center gap-2 lg:gap-4">
          <Input
            type="search"
            placeholder="Contoh: Gorengan Renyah..."
            className="w-full max-w-[400px] placeholder:text-sm lg:px-4 lg:py-6 lg:placeholder:text-base"
            onChange={(e) => setQ(e.target.value)}
            value={q}
          />
          <Button className="lg:px-4 lg:py-6" asChild>
            <Link
              scroll={false}
              href={{
                pathname: '/cari-pedagang',
                query: { q },
              }}
            >
              {<Search />}
              <span className="hidden lg:block">Cari</span>
            </Link>
          </Button>
          <Button
            className="lg:px-4 lg:py-6"
            variant={'secondary'}
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            <Filter />
            <span className="hidden lg:block">Filter</span>
          </Button>
        </div>
        <div
          className={cn(
            'mt-4 flex-wrap items-center justify-center gap-4 overflow-hidden transition-all duration-300 [&>*]:placeholder:text-sm lg:[&>*]:placeholder:text-base',
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
