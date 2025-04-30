'use client';

import { getCookie, setCookie } from 'cookies-next/client';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export default function Announcement() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getCookie('announcement-location') != 'true') {
      setOpen(true);
    }
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Halo! 😊</DialogTitle>
          <DialogDescription>
            Jangan khawatir, lokasi Anda tidak kami simpan di database.
            Informasi ini hanya digunakan untuk keperluan edukasi saja. Website
            ini mungkin meminta informasi lokasi Anda untuk memberikan
            pengalaman yang lebih baik. Terima kasih! 🙏
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={'outline'}
            onClick={() => {
              setCookie('announcement-location', 'false', {
                maxAge: 60 * 60 * 24 * 30,
              });
              setOpen(false);
            }}
          >
            Gak mau
          </Button>
          <Button
            onClick={() => {
              setCookie('announcement-location', 'true', {
                maxAge: 60 * 60 * 24 * 30,
              });
              setOpen(false);
            }}
          >
            Paham
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
