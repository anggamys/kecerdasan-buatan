function bfs(graf, awal, akhir) {
  const antrian = [[awal]];
  const dikunjungi = new Set();
  const log = [];

  while (antrian.length > 0) {
    const jalur = antrian.shift();
    const simpul = jalur[jalur.length - 1];

    if (!dikunjungi.has(simpul)) {
      log.push(simpul);
      dikunjungi.add(simpul);

      if (simpul === akhir) {
        return { jalurTerpendek: jalur, log };
      }

      for (const tetangga of graf[simpul] || []) {
        if (!dikunjungi.has(tetangga)) {
          antrian.push([...jalur, tetangga]);
        }
      }
    }
  }

  return { jalurTerpendek: null, log };
}

const graf = {
  Arad: ['Timisoara', 'Sibiu', 'Zerind'],
  Timisoara: ['Arad', 'Lugoj'],
  Lugoj: ['Timisoara', 'Mehadia'],
  Mehadia: ['Lugoj', 'Dobreta'],
  Dobreta: ['Mehadia', 'Craiova'],
  Sibiu: ['Arad', 'Rimnicu Vilcea', 'Fagaras', 'Oradea'],
  'Rimnicu Vilcea': ['Sibiu', 'Craiova', 'Pitesti'],
  Craiova: ['Dobreta', 'Rimnicu Vilcea', 'Pitesti'],
  Pitesti: ['Rimnicu Vilcea', 'Craiova', 'Bucharest'],
  Fagaras: ['Sibiu', 'Bucharest'],
  Bucharest: ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni'],
  Giurgiu: ['Bucharest'],
  Urziceni: ['Bucharest', 'Hirsova', 'Vaslui'],
  Hirsova: ['Urziceni', 'Eforie'],
  Eforie: ['Hirsova'],
  Vaslui: ['Urziceni', 'Iasi'],
  Iasi: ['Vaslui', 'Neamt'],
  Neamt: ['Iasi'],
  Zerind: ['Arad', 'Oradea'],
  Oradea: ['Zerind', 'Sibiu'],
};

const prompt = require('prompt-sync')();
const simpulAwal = prompt('Masukkan simpul awal: ');
const simpulAkhir = prompt('Masukkan simpul akhir: ');

if (!graf[simpulAwal] || !graf[simpulAkhir]) {
  console.error('Simpul awal atau simpul akhir tidak valid.');
} else if (simpulAwal === simpulAkhir) {
  console.log('Simpul awal dan simpul akhir sama.');
} else {
  const { jalurTerpendek, log } = bfs(graf, simpulAwal, simpulAkhir);

  console.log('\nJalur Terpendek BFS:');
  console.log(jalurTerpendek ? jalurTerpendek.join(' -> ') : 'Jalur tidak ditemukan.');

  console.log('\nSimpul yang Dikunjungi BFS:');
  console.log(log.join(', '));
}
