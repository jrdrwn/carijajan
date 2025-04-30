import { getCookie } from 'cookies-next/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

import Announcement from '../shared/announcement';
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
  const [announcement, setAnnouncement] = useState(false);
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
    <>
      <Select
        defaultValue="semua"
        onOpenChange={(open) => {
          if (open) {
            if (getCookie('announcement-location') == 'false')
              setAnnouncement(true);
          }
        }}
        onValueChange={async (e) => {
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
            if (getCookie('announcement-location') != 'true')
              return toast.warning(
                'Anda belum memberikan izin untuk mengakses lokasi Anda. Silakan izinkan akses lokasi Anda di pengaturan browser Anda.',
              );
            const loadingId = toast.loading(
              'Mendapatkan lokasi Anda. Silakan tunggu sebentar...',
            );
            navigator.geolocation.getCurrentPosition(
              (position) => {
                toast.dismiss(loadingId);
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
              },
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              (err) => {
                toast.dismiss(loadingId);
                toast.error(
                  'Gagal mendapatkan lokasi Anda. Silakan coba lagi atau pilih "Semua Lokasi"',
                );
              },
            );
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
      {announcement && <Announcement />}
    </>
  );
}
