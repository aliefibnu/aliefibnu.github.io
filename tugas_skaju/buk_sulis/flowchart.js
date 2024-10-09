// ? Deklarasi Variabel
let alas, tinggi, hasil;

// ? Masukkan input
alas = prompt("Masukkan panjang alas segitiga");
tinggi = prompt("Masukkan tinggi segitiga");

// ! Validasi tipe data
if (isNaN(alas) || isNaN(tinggi)) {
  // ? Jika salah satu input bukan angka, maka tampilkan pesan error
  alert("MASUKKAN NOMOR SAJA");
} else {
  // ? Hitung Luas Segitiga
  hasil = (1 / 2) * alas * tinggi;

  // ? Tampilkan data
  alert(
    `Luas alas segitiga dari alas : ${alas} dan tinggi ${tinggi} adalah ${hasil}`
  );
}
