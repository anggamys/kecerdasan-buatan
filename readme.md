# 🚀 Implementasi Breadth-First Search (BFS)

Kode ini merupakan tugas untuk mata kuliah **Kecerdasan Buatan** di kampus saya. Kode ini mengimplementasikan algoritma **Breadth-First Search (BFS)** untuk mencari jalur terpendek antara dua simpul dalam sebuah graf.

---

## 📝 Deskripsi Kode

Kode terdiri dari beberapa komponen berikut:

### 1. 🛠️ Fungsi BFS

Fungsi `bfs` menjalankan algoritma Breadth-First Search. Fungsi ini menerima tiga parameter:

- `graf`: Graf yang direpresentasikan sebagai **adjacency list**.
- `awal`: Simpul awal.
- `akhir`: Simpul tujuan.

Fungsi ini mengembalikan sebuah objek yang berisi:

- `jalurTerpendek`: Jalur terpendek dari simpul awal ke simpul tujuan.
- `log`: Daftar simpul yang dikunjungi sesuai urutan kunjungan.

---

### 2. 🗺️ Definisi Graf

Graf didefinisikan sebagai **adjacency list**. Setiap kunci merepresentasikan sebuah simpul, dan nilainya adalah array dari simpul-simpul tetangga.

---

### 3. ⌨️ Input Pengguna

Program meminta pengguna untuk memasukkan simpul awal dan simpul tujuan menggunakan library `prompt-sync`.

---

### 4. ✅ Validasi Input

Program memeriksa apakah simpul yang dimasukkan valid dan apakah simpul awal sama dengan simpul tujuan.

---

### 5. 📤 Output

Program menampilkan:

- **Jalur terpendek** yang ditemukan oleh BFS.
- **Daftar simpul** yang dikunjungi sesuai urutan kunjungan.

---

## 🪪 Bagian Identitas

- **👤 Nama**: Moh Angga Yunus
- **🎓 NPM**: 23081010008
- **🏫 Kelas**: B081
- **📚 Mata Kuliah**: Kecerdasan Buatan
