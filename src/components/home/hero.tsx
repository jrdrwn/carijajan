'use client';

import { ArrowRight, BellDot, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Hero() {
  const [q, setQ] = useState('');
  const reviews = {
    count: 200,
    rating: 4.5,
    avatars: [
      {
        src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        alt: 'Avatar 1',
      },
      {
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        alt: 'Avatar 2',
      },
      {
        src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        alt: 'Avatar 3',
      },
      {
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        alt: 'Avatar 4',
      },
      {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        alt: 'Avatar 5',
      },
    ],
  };

  return (
    <section className="container mx-auto flex justify-between py-16">
      <div>
        <div className="flex w-max items-center gap-4 rounded-full bg-muted px-4 py-2 text-muted-foreground">
          <span>
            <BellDot className="text-primary" />
          </span>
          <p>30+ Pedagang Baru Telah Ditambahkan!</p>
          <span className="rounded-full bg-neutral-500 p-1">
            <ArrowRight className="text-neutral-50" />
          </span>
        </div>
        <h1 className="mt-4 mb-8 max-w-3xl bg-gradient-to-br from-orange-900 to-neutral-500 bg-clip-text text-7xl leading-tight font-bold tracking-wide text-transparent">
          Temukan Pedagang Kaki Lima Terdekat di Sekitarmu!
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed tracking-wide">
          Jelajahi peta untuk menemukan makanan kaki lima favoritmu mulai dari
          bakso keliling, sate gerobak, hingga es doger yang legendaris!
        </p>
        <div className="mt-12 flex items-center gap-4">
          <Input
            type="text"
            placeholder="Contoh: Gorengan Renyah..."
            className="w-full max-w-[400px] px-4 py-6"
            onChange={(e) => setQ(e.currentTarget.value)}
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
              Cari Pedagang
            </Link>
          </Button>
        </div>
        <div className="mt-12 flex w-fit flex-wrap items-center justify-center gap-2">
          <span className="mr-2 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-12 border-2 border-white">
                <AvatarImage
                  src={avatar.src}
                  alt={avatar.alt}
                  className="object-cover object-center"
                />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-orange-400 text-orange-400"
                />
              ))}
              <span className="mr-1 font-semibold">
                {reviews.rating?.toFixed(1)}
              </span>
            </div>
            <p className="text-left text-sm font-medium text-muted-foreground md:text-base">
              Dari {reviews.count}+{' '}
              <Link href="#" className="underline underline-offset-2">
                ulasan
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative mx-auto flex h-170 w-200 items-center justify-center">
          <Image
            src={'https://images.unsplash.com/photo-1572000423136-e94e163fb50b'}
            alt="hero"
            width={800}
            height={800}
            className="absolute top-15 right-10 h-40 w-60 rounded-lg object-cover object-center shadow-lg"
          />
          <Image
            src={'https://images.unsplash.com/photo-1597247003506-42ee1e7bc7dd'}
            alt="hero"
            width={800}
            height={800}
            className="absolute bottom-60 left-15 h-25 w-50 rounded-lg object-cover object-top shadow-lg"
          />
          <Image
            src={'https://images.unsplash.com/photo-1514425263458-109317cc1321'}
            alt="hero"
            width={800}
            height={800}
            className="absolute bottom-15 h-15 w-85 rounded-lg object-cover object-center shadow-lg"
          />
          <Image
            src={'https://images.unsplash.com/photo-1733509524469-12fb3d629b7a'}
            alt="hero"
            width={800}
            height={800}
            className="h-125 w-125 rounded-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
