INSERT INTO pedagang (nama, deskripsi, jenis_dagangan, foto_url, jam_buka, jam_tutup, hari_mangkal, status, no_hp, created_at) VALUES
('Bakso Mas Didi', 'Bakso urat khas dengan kuah gurih', 'Bakso', 'https://picsum.photos/200?1', '15:00', '21:00', ARRAY['Senin', 'Rabu', 'Jumat'], 'approved', '081234567890', now()),
('Es Campur Bu Rina', 'Segar dan manis, cocok siang hari', 'Minuman', 'https://picsum.photos/200?2', '10:00', '17:00', ARRAY['Selasa', 'Kamis'], 'approved', '081234567891', now()),
('Sate Ayam Pak Kumis', 'Sate ayam bumbu kacang legendaris', 'Sate', 'https://picsum.photos/200?3', '16:00', '22:00', ARRAY['Senin', 'Selasa', 'Rabu'], 'approved', '081234567892', now()),
('Nasi Kuning Hj. Salmah', 'Nasi kuning khas Banjar dengan lauk lengkap', 'Nasi Kuning', 'https://picsum.photos/200?4', '06:00', '10:00', ARRAY['Setiap Hari'], 'approved', '081234567893', now()),
('Pisang Coklat Kak Ita', 'Cemilan sore dengan isian coklat lumer', 'Cemilan', 'https://picsum.photos/200?5', '14:00', '18:00', ARRAY['Senin', 'Jumat'], 'approved', '081234567894', now()),
('Soto Banjar Pak Joni', 'Soto banjar kuah bening dengan perkedel', 'Soto', 'https://picsum.photos/200?6', '07:00', '13:00', ARRAY['Setiap Hari'], 'approved', '081234567895', now()),
('Lontong Sayur Bu Minah', 'Lontong dengan kuah santan dan sayur labu', 'Lontong', 'https://picsum.photos/200?7', '06:00', '09:00', ARRAY['Senin', 'Kamis'], 'approved', '081234567896', now()),
('Teh Susu Boba Kalimantan', 'Minuman kekinian dengan gula aren', 'Minuman', 'https://picsum.photos/200?8', '11:00', '19:00', ARRAY['Setiap Hari'], 'approved', '081234567897', now()),
('Pempek Bang Andi', 'Pempek Palembang asli kapal selam dan lenjer', 'Pempek', 'https://picsum.photos/200?9', '12:00', '20:00', ARRAY['Rabu', 'Jumat', 'Sabtu'], 'approved', '081234567898', now()),
('Kopi Susu Pinggir Jalan', 'Kopi robusta racikan tradisional', 'Minuman', 'https://picsum.photos/200?10', '17:00', '23:00', ARRAY['Jumat', 'Sabtu', 'Minggu'], 'approved', '081234567899', now());

INSERT INTO lokasi (pedagang_id, latitude, longitude, alamat, kota) VALUES
(1, -2.2087, 113.9146, 'Jl. Yos Sudarso, Palangka Raya', 'Palangka Raya'),
(2, -2.2221, 113.9203, 'Pasar Kahayan, Palangka Raya', 'Palangka Raya'),
(3, -2.2185, 113.9027, 'Jl. G. Obos, Palangka Raya', 'Palangka Raya'),
(4, -3.3194, 114.5908, 'Jl. A. Yani KM 6, Banjarmasin', 'Banjarmasin'),
(5, -3.3305, 114.5882, 'Siring Tendean, Banjarmasin', 'Banjarmasin'),
(6, -3.3252, 114.6034, 'Jl. Veteran, Banjarmasin', 'Banjarmasin'),
(7, -3.3220, 114.6030, 'Jl. Pramuka, Banjarmasin', 'Banjarmasin'),
(8, -2.2211, 113.9180, 'Jl. Cilik Riwut, Palangka Raya', 'Palangka Raya'),
(9, -2.2154, 113.9101, 'Bundaran Besar, Palangka Raya', 'Palangka Raya'),
(10, -3.3200, 114.6050, 'Jl. Sutoyo, Banjarmasin', 'Banjarmasin');

INSERT INTO tags (nama) VALUES
('Halal'),
('Pedas'),
('Tradisional'),
('Viral'),
('Murah'),
('Kekinian');

INSERT INTO pedagang_tag (pedagang_id, tag_id) VALUES
(1, 1), -- Halal
(1, 3), -- Tradisional
(2, 1),
(2, 5),
(3, 1),
(3, 2),
(4, 3),
(4, 1),
(5, 4),
(5, 5),
(6, 3),
(6, 1),
(7, 1),
(7, 3),
(8, 6),
(8, 4),
(9, 1),
(9, 3),
(10, 6),
(10, 5);
