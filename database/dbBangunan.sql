-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versi server:                 PostgreSQL 16.0, compiled by Visual C++ build 1935, 64-bit
-- OS Server:                    
-- HeidiSQL Versi:               12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- membuang struktur untuk table public.tb_barang_keluars
CREATE TABLE IF NOT EXISTS "tb_barang_keluars" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''tb_barang_keluars_id_seq''::regclass)',
	"kodeBarang" VARCHAR(10) NULL DEFAULT NULL,
	"namaBarang" VARCHAR(20) NULL DEFAULT NULL,
	"jmlKeluar" VARCHAR(10) NULL DEFAULT NULL,
	"tglKeluar" VARCHAR(20) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NULL DEFAULT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_barang_keluars: -1 rows
/*!40000 ALTER TABLE "tb_barang_keluars" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_barang_keluars" ENABLE KEYS */;

-- membuang struktur untuk table public.tb_barang_masuks
CREATE TABLE IF NOT EXISTS "tb_barang_masuks" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''tb_barang_masuks_id_seq''::regclass)',
	"jumlahMasuk" VARCHAR(10) NULL DEFAULT NULL,
	"kodeBarang" VARCHAR(10) NULL DEFAULT NULL,
	"namaBarang" VARCHAR(20) NULL DEFAULT NULL,
	"tglMasuk" VARCHAR(20) NULL DEFAULT NULL,
	"supllayer" VARCHAR(25) NULL DEFAULT NULL,
	"hargaBarang" VARCHAR(10) NULL DEFAULT NULL,
	"satuan" VARCHAR(10) NULL DEFAULT NULL,
	"deskripsi" VARCHAR(10) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NOT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_barang_masuks: -1 rows
/*!40000 ALTER TABLE "tb_barang_masuks" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_barang_masuks" ENABLE KEYS */;

-- membuang struktur untuk table public.tb_data_barangs
CREATE TABLE IF NOT EXISTS "tb_data_barangs" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''tb_data_barangs_id_seq''::regclass)',
	"deskripsi" VARCHAR(10) NULL DEFAULT NULL,
	"hargaBarang" VARCHAR(10) NULL DEFAULT NULL,
	"kodeBarang" VARCHAR(10) NULL DEFAULT NULL,
	"namaBarang" VARCHAR(20) NULL DEFAULT NULL,
	"jumlahMasuk" VARCHAR(10) NULL DEFAULT NULL,
	"satuan" VARCHAR(10) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NOT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_data_barangs: -1 rows
/*!40000 ALTER TABLE "tb_data_barangs" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_data_barangs" ENABLE KEYS */;

-- membuang struktur untuk table public.tb_logins
CREATE TABLE IF NOT EXISTS "tb_logins" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''tb_logins_id_seq''::regclass)',
	"username" VARCHAR(20) NULL DEFAULT NULL,
	"password" VARCHAR(8) NULL DEFAULT NULL,
	"userRoles" VARCHAR(10) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NOT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_logins: -1 rows
/*!40000 ALTER TABLE "tb_logins" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_logins" ENABLE KEYS */;

-- membuang struktur untuk table public.tb_mst_Barangs
CREATE TABLE IF NOT EXISTS "tb_mst_Barangs" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''"tb_mst_Barangs_id_seq"''::regclass)',
	"kodeBarang" VARCHAR(10) NULL DEFAULT NULL,
	"namaBarang" VARCHAR(20) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NOT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_mst_Barangs: -1 rows
/*!40000 ALTER TABLE "tb_mst_Barangs" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_mst_Barangs" ENABLE KEYS */;

-- membuang struktur untuk table public.tb_mst_Satuans
CREATE TABLE IF NOT EXISTS "tb_mst_Satuans" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''"tb_mst_Satuans_id_seq"''::regclass)',
	"name" VARCHAR(25) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NOT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_mst_Satuans: -1 rows
/*!40000 ALTER TABLE "tb_mst_Satuans" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_mst_Satuans" ENABLE KEYS */;

-- membuang struktur untuk table public.tb_suplayers
CREATE TABLE IF NOT EXISTS "tb_suplayers" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''tb_suplayers_id_seq''::regclass)',
	"name" VARCHAR(20) NULL DEFAULT NULL,
	"alamat" VARCHAR(50) NULL DEFAULT NULL,
	"noTlp" VARCHAR(20) NULL DEFAULT NULL,
	"createdAt" TIMESTAMPTZ NULL DEFAULT NULL,
	"updatedAt" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY ("id")
);

-- Membuang data untuk tabel public.tb_suplayers: -1 rows
/*!40000 ALTER TABLE "tb_suplayers" DISABLE KEYS */;
/*!40000 ALTER TABLE "tb_suplayers" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
