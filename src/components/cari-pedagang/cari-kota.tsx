'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { Input } from '../ui/input';

export default function CariKota() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  return (
    <Input
      type="search"
      className="max-w-3xs"
      placeholder="Kota"
      onChangeCapture={(e) => {
        router.push(
          pathname + '?' + createQueryString('kota', e.currentTarget.value),
          {
            scroll: false,
          },
        );
      }}
    />
  );
}
