'use client';

import { ArrowRight, BellDot, Search, Star } from 'lucide-react';
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
    <section className="container mx-auto flex flex-col justify-center px-2 py-16 lg:flex-row lg:justify-between lg:px-0">
      <div className="text-center lg:text-start">
        <div className="mx-auto flex w-max items-center gap-2 rounded-full bg-muted px-2 py-1 text-muted-foreground lg:mx-0 lg:gap-4 lg:px-4 lg:py-2">
          <span>
            <BellDot className="size-5 text-primary lg:size-6" />
          </span>
          <p className="text-sm lg:text-base">
            30+ Pedagang Baru Telah Ditambahkan!
          </p>
          <span className="rounded-full bg-neutral-500 p-1">
            <ArrowRight className="size-5 text-neutral-50 lg:size-6" />
          </span>
        </div>
        <h1 className="mt-4 mb-4 max-w-3xl bg-gradient-to-br from-orange-900 to-neutral-500 bg-clip-text text-5xl leading-tight font-bold tracking-wide text-transparent lg:mb-8 lg:text-7xl">
          Temukan Pedagang Kaki Lima Terdekat di Sekitarmu!
        </h1>
        <p className="max-w-2xl leading-relaxed tracking-wide lg:text-lg">
          Jelajahi peta untuk menemukan makanan kaki lima favoritmu mulai dari
          bakso keliling, sate gerobak, hingga es doger yang legendaris!
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 lg:mt-12 lg:justify-start">
          <Input
            type="text"
            placeholder="Contoh: Gorengan Renyah..."
            className="w-full max-w-3xs placeholder:text-sm lg:placeholder:text-base lg:max-w-[400px] lg:px-4 lg:py-6"
            onChange={(e) => setQ(e.currentTarget.value)}
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
              <span className="hidden lg:block">Cari Pedagang</span>
            </Link>
          </Button>
        </div>
        <div className="mx-auto mt-8 flex w-fit flex-wrap items-center justify-center gap-2 lg:mx-0 lg:mt-12">
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
      <div className="w-full pt-20 lg:w-1/2 lg:pt-0">
        <div className="relative mx-auto flex items-center justify-center lg:h-170 lg:w-200">
          <Image
            src={'https://images.unsplash.com/photo-1572000423136-e94e163fb50b'}
            alt="hero"
            width={800}
            height={800}
            className="absolute -top-10 right-0 h-20 w-40 rounded-lg object-cover object-center shadow-lg lg:top-15 lg:right-10 lg:h-40 lg:w-60"
          />
          <Image
            src={'https://images.unsplash.com/photo-1597247003506-42ee1e7bc7dd'}
            alt="hero"
            width={800}
            height={800}
            className="absolute bottom-25 left-0 h-20 w-40 rounded-lg object-cover object-top shadow-lg lg:bottom-60 lg:left-15 lg:h-25 lg:w-50"
          />
          <Image
            src={'https://images.unsplash.com/photo-1514425263458-109317cc1321'}
            alt="hero"
            width={800}
            height={800}
            className="absolute right-0 -bottom-5 h-10 w-60 rounded-lg object-cover object-center shadow-lg lg:right-auto lg:bottom-15 lg:h-15 lg:w-85"
          />
          <Image
            src={'https://images.unsplash.com/photo-1733509524469-12fb3d629b7a'}
            alt="hero"
            width={800}
            height={800}
            className="h-70 w-70 rounded-lg object-cover object-center lg:h-125 lg:w-125"
          />
        </div>
      </div>
    </section>
  );
}
