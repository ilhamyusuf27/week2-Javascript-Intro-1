const mtk = 60;
const bahasaIndonesia = 95;
const ipa = 60;
const bahasaInggris = 76;

const hitungRataRata = (mtk + bahasaIndonesia + ipa + bahasaInggris) / 4;

console.log(`Rata-rata=${hitungRataRata}`);
if (hitungRataRata > 90) {
	console.log('Grade = A');
} else if (hitungRataRata > 80) {
	console.log('Grade = B');
} else if (hitungRataRata > 70) {
	console.log('Grade = C');
} else if (hitungRataRata > 60) {
	console.log('Grade = D');
} else {
	console.log('Grade = E');
}

/* Pertama yaitu mendeklarasikan variabel mtk, bahasaIndonesia, ipa, dan bahasaInggris dimana isi dari variable tersebut berupa number
Kemudian buat penghitungan Rata rata dengan rumus sebagai berikut  (mtk + bahasaIndonesia + ipa + bahasaInggris) / 4
Hasil dari penghitungan rata-rata tersebut di tampilkan menggunakan console.log
Hasil dari rata-rata tersebut dicek dengan pengkondisian if-else
Jika rata-rata > 90 maka akan menampilkan Grade = A
Jika rata-rata > 80 maka akan menampilkan Grade = B
Jika rata-rata > 70 maka akan menampilkan Grade = C
Jika rata-rata > 60 maka akan menampilkan Grade = D
Selain itu maka menampilkan Grade = E*/
