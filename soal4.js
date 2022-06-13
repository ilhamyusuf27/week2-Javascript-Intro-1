let data = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
};

let ubah = { ...data, name: 'Ilham Yusuf Alghani', email: 'ilhamyusuf276@gmail.com', hoby: ['Membaca Komik', 'Menonton Film', 'Bermain Game'] };
console.log(ubah);
/* Untuk mengubah nama email dan menambahkan hoby di object data menggunakan spread operator
Kita hanya perlu mendeklarasikan sebuah variable dimana berisi sebuah object yang didalamnya diawali nama object menggunakan spread operator cth: ...data
Kemudian diikuti dengan properti yang akan diubah maupun menambahkan property */

let {
	address: { street: jalan, city: kota },
} = data;
console.log(`Street: ${jalan}`);
console.log(`City: ${kota}`);
/* Untuk melakukan destructering pada object data
kita mendeklarasikan variable dengan nama variable sebagai object, diawali dengan kurung kurawal
Kemudian karena kita ingin mengambil data dari property street dan city, dimana kedua property tersebut terdapat di dalam property address
Maka panggil terlebih dahulu property address kemudian kita aliaskan property yang akan kita panggil seperti street menjadi jalan dan city menjadi kota */
