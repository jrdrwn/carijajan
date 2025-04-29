'use client';

import useFetch from '@/hooks/use-fetch';

import 'leaflet/dist/leaflet.css';

import { Heart, Phone } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { FormatedTime, ILokasi } from './card-pedagang';

interface Props {
  params: {
    id: string;
  };
}

interface ITag {
  id: number;
  nama: string;
}

interface IPedagangDetail {
  id: number;
  nama: string;
  deskripsi: string;
  jenis_dagangan: string;
  foto_url: string;
  jam_buka: string;
  jam_tutup: string;
  hari_mangkal: string[];
  lokasi: ILokasi;
  status: string;
  no_hp: string;
  jarak_km?: number;

  tags: ITag[];
}

function DetailPedagangSkeleton() {
  return (
    <div className="mx-auto grid auto-rows-auto grid-cols-2 gap-x-12 gap-y-8">
      <Skeleton className="h-100 rounded-lg" />
      <div className="flex flex-col justify-between">
        <div>
          <Skeleton className="mb-2 h-6 w-32 rounded-md" />
          <Skeleton className="mb-2 h-4 w-full rounded-md" />
          <Skeleton className="mb-2 h-4 w-full rounded-md" />
          <Skeleton className="mb-2 h-4 w-full rounded-md" />
        </div>
        <div className="mt-6 flex gap-4">
          <Skeleton className="size-10 rounded-md"></Skeleton>
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
      <div className="col-span-2 h-100">
        <Skeleton className="size-full h-100 rounded-lg" />
      </div>
    </div>
  );
}

export default function DetailPedagang({ params }: Props) {
  const [favorite, setFavorite] = useState(false);
  const MyMap = useMemo(
    () =>
      dynamic(() => import('@/components/cari-pedagang/preview-map'), {
        ssr: false,
        loading: () => <Skeleton className="size-full h-100 rounded-xl" />,
      }),
    [],
  );
  const { data, loading, error } = useFetch<IPedagangDetail>(
    `/api/pedagang/${params.id}`,
  );
  return (
    <section className="container mx-auto px-2 py-6">
      {error && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Error</h1>
          <p>{error.message}</p>
        </div>
      )}
      {loading && <DetailPedagangSkeleton />}
      {data && (
        <div className="mx-auto grid grid-flow-row gap-x-12 gap-y-8 lg:auto-rows-auto lg:grid-cols-2">
          <div>
            <Image
              src={data.foto_url}
              alt={data.nama}
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover lg:h-100"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Badge>{data.jenis_dagangan}</Badge>
              <h1 className="mt-1 max-w-4xl border-b bg-gradient-to-b from-orange-900 to-neutral-500 bg-clip-text pb-1 text-3xl leading-snug font-bold text-transparent">
                {data.nama}
              </h1>
              <p className="mt-4 text-lg">{data?.deskripsi}</p>
              <div className="mt-8 grid grid-cols-6 gap-x-2 gap-y-4 lg:grid-cols-5">
                <span className="col-span-2 text-foreground/65 lg:col-span-1">
                  Buka
                </span>
                <span className="col-span-4">
                  {FormatedTime(data.jam_buka)}
                </span>
                <span className="col-span-2 text-foreground/65 lg:col-span-1">
                  Tutup
                </span>
                <span className="col-span-4">
                  {FormatedTime(data.jam_tutup)}
                </span>
                <span className="col-span-2 text-foreground/65 lg:col-span-1">
                  Hari mangkal
                </span>
                <span className="col-span-4">
                  {data.hari_mangkal.join(', ')}
                </span>
                <span></span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                variant={favorite ? 'default' : 'outline'}
                size={'icon'}
                className="size-10 rounded-md"
                onClick={() => setFavorite(!favorite)}
              >
                <Heart />
              </Button>
              <Button asChild variant={'default'} size={'lg'}>
                <Link href={`tel:${data.no_hp}`}>
                  <Phone />
                  <span className="hidden lg:block">Hubungi penjual</span>
                </Link>
              </Button>
              <Button asChild variant={'outline'} size={'lg'}>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${data?.lokasi.latitude},${data?.lokasi.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat di Google Maps
                </Link>
              </Button>
            </div>
          </div>
          <div className="h-100 lg:col-span-2">
            <MyMap
              center={[data.lokasi.latitude, data.lokasi.longitude]}
              position={[data.lokasi.latitude, data.lokasi.longitude]}
            />
          </div>
        </div>
      )}
    </section>
  );
}
