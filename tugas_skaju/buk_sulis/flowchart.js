// ? Deklarasi Variabel
let alas, tinggi, hasil;

// ? Masukkan input
alas = prompt("Masukkan panjang alas segitiga (cm)");
tinggi = prompt("Masukkan tinggi segitiga (cm)");

// ! Validasi tipe data
if (isNaN(alas) || isNaN(tinggi)) {
  // ? Jika salah satu input bukan angka, maka tampilkan pesan error
  alert("MASUKKAN NOMOR SAJA");
} else {
  // ? Hitung Luas Segitiga
  hasil = (1 / 2) * alas * tinggi;

  // ? Tampilkan data
  alert(
    `Luas alas segitiga dari alas : ${alas}cm dan tinggi ${tinggi}cm adalah ${hasil}cm`
  );
}
