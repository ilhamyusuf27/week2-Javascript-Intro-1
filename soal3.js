const printSegitiga = 5;
let temp = '';

if (typeof printSegitiga === 'number') {
	for (let i = 0; i < printSegitiga; i++) {
		for (let j = 1; j <= printSegitiga - i; j++) {
			temp += j;
		}
		console.log(temp);
		temp = '';
	}
} else {
	console.log('Data harus number');
}

/* Pada program pembuatan segitiga ini hal pertama yang dilakukan yaitu asign variable printSegitiga untuk jumlah yang ingin ditampilkan
Setelah itu mendeklarasikan variable temp berupa string kosong untuk wadah sementara
Lakukan Validasi apakah tipe data yang kita inputkan number atau tidak
Jika benar maka akan menjalankan perulangan menggunakan for dimana i dimulai dari 0 dan perulangan akan dilakukan hingga nilai i < printSegitiga
Perulangan yang pertama ini digunakan untuk menentukan jumlah baris yang ingin ditampilkan
Kemudian buat perulangan menggunakan for kembali didalamnya dimana j diawali dari 1 dan perulangan akan dilakukan hingga j <= printSegitiga -i
Perulangan ini akan memasukan nilai j ke variable temp
Lalu tampilkan variabel temp dan buat temp menjadi string kosong kembali untuk mereset isi dari temp */
