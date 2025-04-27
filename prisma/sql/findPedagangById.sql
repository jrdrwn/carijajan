-- @param {Int} $1:id pedagang
SELECT
  pedagang.id,
  pedagang.nama,
  pedagang.deskripsi,
  pedagang.jenis_dagangan,
  pedagang.foto_url,
  pedagang.jam_buka,
  pedagang.jam_tutup,
  pedagang.hari_mangkal,
  pedagang.status,
  pedagang.no_hp,
  pedagang.created_at,

  json_build_object(
    'id', lokasi.id,
    'pedagang_id', lokasi.pedagang_id,
    'latitude', lokasi.latitude,
    'longitude', lokasi.longitude,
    'alamat', lokasi.alamat,
    'kota', lokasi.kota
  ) AS lokasi,

  COALESCE(
    json_agg(
      json_build_object(
        'id', tags.id,
        'nama', tags.nama
      )
    ) FILTER (WHERE tags.id IS NOT NULL),
    '[]'::json
  ) AS tags

FROM pedagang
LEFT JOIN lokasi ON lokasi.pedagang_id = pedagang.id
LEFT JOIN pedagang_tag ON pedagang_tag.pedagang_id = pedagang.id
LEFT JOIN tags ON tags.id = pedagang_tag.tag_id
WHERE pedagang.id = $1
GROUP BY pedagang.id, lokasi.id
LIMIT 1;
