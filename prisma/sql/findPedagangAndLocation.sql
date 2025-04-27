-- @param {Int} $1:skip
-- @param {Int} $2:limit
-- @param {String} $3:q (query nama)
-- @param {String} $4:jenis (jenis dagangan)
-- @param {String} $5:tag (nama tag)
-- @param {String} $6:kota (nama kota)
-- @param {Decimal} $7:latitude user (optional)
-- @param {Decimal} $8:longitude user user (optional)
SELECT
  pedagang.id,
  pedagang.nama,
  pedagang.jenis_dagangan,
  pedagang.foto_url,
  pedagang.jam_buka,
  pedagang.jam_tutup,
  pedagang.status,
  json_build_object(
    'id', lokasi.id,
    'latitude', lokasi.latitude,
    'longitude', lokasi.longitude,
    'alamat', lokasi.alamat,
    'kota', lokasi.kota
  ) AS lokasi,

  -- Hitung jarak pakai rumus Haversine
  (6371 * acos(
      cos(radians($7)) * cos(radians(lokasi.latitude)) * cos(radians(lokasi.longitude) - radians($8)) +
      sin(radians($7)) * sin(radians(lokasi.latitude))
  )) AS jarak_km

FROM pedagang
LEFT JOIN lokasi ON lokasi.pedagang_id = pedagang.id
WHERE
  pedagang.nama ILIKE '%' || $3 || '%'
  AND pedagang.jenis_dagangan ILIKE '%' || $4 || '%'
  AND EXISTS (
    SELECT 1
    FROM pedagang_tag
    INNER JOIN tags ON tags.id = pedagang_tag.tag_id
    WHERE pedagang_tag.pedagang_id = pedagang.id
      AND tags.nama ILIKE '%' || $5 || '%'
  )
  AND lokasi.kota ILIKE '%' || $6 || '%'
ORDER BY jarak_km ASC
OFFSET $1
LIMIT $2;