# Implementasi Breadth-First Search (BFS)

## Overview

Kode ini merupakan tugas untuk mata kuliah **Kecerdasan Buatan** di kampus saya. Kode ini mengimplementasikan algoritma **Breadth-First Search (BFS)** untuk mencari jalur terpendek antara dua simpul dalam sebuah graf.

## Struktur Kode

### Graph

Graph merupakan struktur data yang terdiri dari simpul-simpul yang terhubung satu sama lain melalui edge. Yang dimana setiap simpul memiliki atribut data dan edge yang menghubungkannya dengan simpul lain.

### Function

Function merupakan bagian utama dari algoritma BFS. Fungsi ini menerima sebuah graf dan dua simpul awal dan akhir, dan mengembalikan jalur terpendek antara kedua simpul tersebut. Untuk mencapai ini, fungsi ini menggunakan queue untuk menyimpan simpul-simpul yang akan dikunjungi berikut dengan informasi tentang simpul-simpul yang telah dikunjungi sebelumnya.

### Input dan Output

Input merupakan data yang diperlukan untuk menjalankan algoritma BFS. Yang dimana input ini berupa graf dan dua simpul awal dan akhir.

Output merupakan hasil dari jalur terpendek yang ditemukan oleh algoritma BFS. Yang dimana output ini berupa array yang berisi simpul-simpul yang terhubung satu sama lain melalui edge.

## Penggunaan

1. Clone repositori ini ke komputer Anda.

   ```bash
   git clone https://github.com/anggamys/kecerdasan-buatan.git
   ```

2. Jalankan kode program BFS dengan menjalankan perintah berikut:

   ```bash
   node bfs.js
   ```

3. Masukkan input simpul awal dan akhir yang ingin dicari jalur terpendeknya.
   Contoh:

   ```bash
   Masukkan simpul awal: Arad
   Masukkan simpul akhir: Bucharest
   ```

## Author

- **Nama**: Moh Angga Yunus
- **NPM**: 23081010008
- **Kelas**: Kecerdasan Buatan B081
- **Dosen**: Budi Mukhamad Mulyo, S.KOM., M.T.
