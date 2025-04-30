'use client';

import useFetch from '@/hooks/use-fetch';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '../ui/button';
import CardPedagang, { CardPedagangSkeleton, IPedagang } from './card-pedagang';

export default function ListPedagang() {
  const searchParams = useSearchParams();
  const [pedagang, setPedagang] = useState<IPedagang[]>([]);
  const [newLoading, setNewLoading] = useState(false);
  const { data, error, loading } = useFetch<IPedagang[]>(
    `/api/pedagang?${searchParams.toString()}`,
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (data) {
      setPedagang(data);
    }
  }, [data]);

  return (
    <section className="container mx-auto px-2 py-16 lg:px-0">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-16">
        {loading &&
          Array(6)
            .fill(0)
            .map((_, index) => <CardPedagangSkeleton key={index} />)}
        {!loading &&
          pedagang &&
          pedagang.map((pedagang) => (
            <CardPedagang key={pedagang.id} {...pedagang} />
          ))}
        {!loading && !newLoading && pedagang.length === 0 && (
          <p className="w-full text-center text-lg font-semibold text-muted-foreground">
            Tidak ada pedagang ditemukan
          </p>
        )}
        {newLoading &&
          Array(3)
            .fill(0)
            .map((_, index) => <CardPedagangSkeleton key={index} />)}

        {error && <p>Error: {error.message}</p>}
      </div>
      <div className="flex justify-center">
        {!newLoading && !loading && (
          <Button
            variant="outline"
            onClick={async () => {
              setNewLoading(true);
              const res = await fetch(
                `/api/pedagang?${createQueryString(
                  'skip',
                  pedagang.length.toString(),
                )}`,
              );
              const data = await res.json();
              setNewLoading(false);
              setPedagang((prev) => [...prev, ...data]);
            }}
            className="mx-auto mt-8"
          >
            Muat lebih banyak
          </Button>
        )}
      </div>
    </section>
  );
}
