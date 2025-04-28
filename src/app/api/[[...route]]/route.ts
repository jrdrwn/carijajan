import prisma from '@db';
import { findPedagang, findPedagangAndLocation, findPedagangById } from '@sql';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

app.get('/pedagang', async (c) => {
  const args = {
    skip: Number(c.req.query('skip') || 0),
    take: Number(c.req.query('limit') || 3),
    q: c.req.query('q') || '',
    jenis: c.req.query('jenis') || '',
    tag: c.req.query('tag') || '',
    kota: c.req.query('kota') || '',
    latitude: c.req.query('latitude'),
    longitude: c.req.query('longitude'),
  };
  let pedagang;
  if (args.latitude && args.longitude) {
    pedagang = await prisma.$queryRawTyped(
      findPedagangAndLocation(
        args.skip,
        args.take,
        args.q,
        args.jenis,
        args.tag,
        args.kota,
        +args.latitude,
        +args.longitude,
      ),
    );
  } else {
    pedagang = await prisma.$queryRawTyped(
      findPedagang(
        args.skip,
        args.take,
        args.q,
        args.jenis,
        args.tag,
        args.kota,
      ),
    );
  }
  return c.json(pedagang);
});

app.get('/pedagang/:id', async (c) => {
  const pedagang = await prisma.$queryRawTyped(
    findPedagangById(Number(c.req.param('id'))),
  );
  if (!pedagang) return c.notFound();
  return c.json(pedagang[0]);
});

app.get('/jenis-dagangan', async (c) => {
  const jenis = await prisma.pedagang.findMany({
    take: Number(c.req.query('limit') || 6),
    skip: Number(c.req.query('skip') || 0),
    where: {
      jenis_dagangan: {
        contains: c.req.query('q') || undefined,
        mode: 'insensitive',
      },
    },
    select: {
      jenis_dagangan: true,
    },
    distinct: ['jenis_dagangan'],
  });
  const serialized = jenis.map((j) => j.jenis_dagangan);
  return c.json(serialized);
});
export const GET = handle(app);
export const POST = handle(app);
