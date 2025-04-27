'use client';

import useFetch from '@/hooks/use-fetch';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function CariJenisDagangan() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [jenisOpen, setJenisOpen] = useState(false);
  const [jenis, setJenis] = useState<string>('semua');
  const [jenisList, setJenisList] = useState<string[]>([]);
  const { data } = useFetch<string[]>(`/api/jenis-dagangan`);

  useEffect(() => {
    if (data) {
      setJenisList(data);
    }
  }, [data]);

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
    <Popover open={jenisOpen} onOpenChange={setJenisOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          role="combobox"
          aria-expanded={jenisOpen}
          className="w-full max-w-32 justify-between"
        >
          {jenis === 'semua' ? 'Semua Jenis' : jenis}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-32 p-0">
        <Command>
          <CommandInput
            placeholder="Cari..."
            onChangeCapture={async (e) => {
              const res = await fetch(
                `/api/jenis-dagangan?q=${e.currentTarget.value}`,
              );
              const data = await res.json();
              setJenisList(data);
            }}
          />
          <CommandList>
            <CommandEmpty>Jenis dagangan tidak ada.</CommandEmpty>
            <CommandGroup>
              {jenisList.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(currentValue) => {
                    setJenis(currentValue === jenis ? 'semua' : item);
                    setJenisOpen(false);
                    router.push(
                      pathname +
                        '?' +
                        createQueryString(
                          'jenis',
                          currentValue === jenis ? '' : item,
                        ),
                      {
                        scroll: false,
                      },
                    );
                  }}
                >
                  {item}
                  <Check
                    className={cn(
                      'ml-auto',
                      jenis === item ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
