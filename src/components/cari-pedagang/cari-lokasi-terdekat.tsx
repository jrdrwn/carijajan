import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function CariLokasiTerdekat() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (values?: { name: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams.toString());
      values?.forEach((v) => {
        params.set(v.name, v.value);
      });

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Select
      defaultValue="semua"
      onValueChange={(e) => {
        if (e === 'semua') {
          router.push(
            pathname +
              '?' +
              createQueryString([
                { name: 'latitude', value: '' },
                { name: 'longitude', value: '' },
              ]),
            {
              scroll: false,
            },
          );
        } else {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            router.push(
              pathname +
                '?' +
                createQueryString([
                  { name: 'latitude', value: latitude.toString() },
                  { name: 'longitude', value: longitude.toString() },
                ]),
              {
                scroll: false,
              },
            );
          });
        }
      }}
    >
      <SelectTrigger className="w-full max-w-38">
        <SelectValue placeholder="Lokasi Terdekat" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="semua">Semua Lokasi</SelectItem>
        <SelectItem value="lokasi-terdekat">Lokasi Terdekat</SelectItem>
      </SelectContent>
    </Select>
  );
}
