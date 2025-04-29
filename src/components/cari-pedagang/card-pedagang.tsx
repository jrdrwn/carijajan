import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Heart,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export interface ILokasi {
  id: number;
  latitude: number;
  longitude: number;
  alamat: string;
  kota: string;
}
export interface IPedagang {
  id: number;
  nama: string;
  jenis_dagangan: string;
  foto_url: string;
  jam_buka: string;
  jam_tutup: string;
  lokasi: ILokasi;
  status: string;
  jarak_km?: number;
}
export function FormatedTime(datetime: string) {
  return new Date(datetime).toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    timeZoneName: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function CardPedagangSkeleton() {
  return (
    <Card className="relative w-115 animate-pulse pt-42">
      <Skeleton className="absolute -top-8 left-1/2 h-46 w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg" />
      <Skeleton className="absolute top-33 right-8 rounded-full p-2" />
      <CardContent>
        <Skeleton className="mb-2 h-6 w-full rounded-md" />
        <Skeleton className="mb-2 h-4 w-full rounded-md" />
        <div className="mt-4 flex items-center gap-4">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-4 w-16 rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="flex items-end justify-between">
        <Skeleton className="h-4 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </CardFooter>
    </Card>
  );
}

export default function CardPedagang(pedagang: IPedagang) {
  const [favorite, setFavorite] = useState(false);
  return (
    <Card className="relative w-115 pt-42">
      <Image
        src={pedagang.foto_url}
        alt="hero"
        width={800}
        height={800}
        className="absolute -top-8 left-1/2 h-46 w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg object-cover object-center"
      />
      <Button
        size={'icon'}
        variant={favorite ? 'default' : 'secondary'}
        className="absolute top-33 right-8"
        onClick={() => setFavorite(!favorite)}
      >
        <Heart />
      </Button>
      <CardContent>
        <CardTitle className="line-clamp-2 text-xl text-ellipsis lg:text-2xl">
          {pedagang.nama}
        </CardTitle>
        <div className="mt-2 flex items-center gap-1 text-card-foreground/65">
          <MapPin className="size-5" />
          <span className="line-clamp-1 text-ellipsis">
            {pedagang.lokasi.alamat}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <span className="flex items-center gap-0.5 text-sm">
            <ChevronUp className="size-5 text-green-600" />
            {FormatedTime(pedagang.jam_buka)}
          </span>
          <span className="flex items-center gap-0.5 text-sm">
            <ChevronDown className="size-5 text-red-600" />
            {FormatedTime(pedagang.jam_tutup)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex items-end justify-between">
        <div className="flex gap-2">
          <Badge variant="secondary">{pedagang.jenis_dagangan}</Badge>
          {pedagang.jarak_km && (
            <Badge variant="secondary">{pedagang.jarak_km.toFixed(2)} km</Badge>
          )}
        </div>
        <Link href={`/cari-pedagang/${pedagang.id}`} target="_blank">
          <Button
            className="flex items-center justify-between"
            variant={'outline'}
          >
            Detail <ArrowUpRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
