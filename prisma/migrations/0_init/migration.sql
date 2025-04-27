-- CreateTable
CREATE TABLE "lokasi" (
    "id" INTEGER NOT NULL,
    "latitude" DECIMAL,
    "longitude" DECIMAL,
    "alamat" TEXT,
    "kota" VARCHAR,

    CONSTRAINT "lokasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedagang" (
    "id" INTEGER NOT NULL,
    "nama" VARCHAR,
    "deskripsi" TEXT,
    "jenis_dagangan" VARCHAR,
    "foto_url" TEXT,
    "jam_buka" TIME(6),
    "jam_tutup" TIME(6),
    "hari_mangkal" VARCHAR[],
    "lokasi_id" INTEGER,
    "status" VARCHAR,
    "no_hp" VARCHAR,
    "created_at" TIMESTAMP(6),

    CONSTRAINT "pedagang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedagang_tag" (
    "id" INTEGER NOT NULL,
    "pedagang_id" INTEGER,
    "tag_id" INTEGER,

    CONSTRAINT "pedagang_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL,
    "nama" VARCHAR,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pedagang" ADD CONSTRAINT "pedagang_lokasi_id_fkey" FOREIGN KEY ("lokasi_id") REFERENCES "lokasi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedagang_tag" ADD CONSTRAINT "pedagang_tag_pedagang_id_fkey" FOREIGN KEY ("pedagang_id") REFERENCES "pedagang"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedagang_tag" ADD CONSTRAINT "pedagang_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

