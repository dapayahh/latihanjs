var tanya = true
while (tanya) {

// Menangkap pilihan Player
var p = prompt('Pilih: batu, kertas, gunting');

// Menangkap pilihan Komputer
// Membangkitkan bilangan random
var comp = Math.random();

if(comp <0.34 ) {
    comp ='batu';

}else if(comp >=0.34 && comp < 0.67){
    comp ='kertas';
}else {
    comp ='gunting';
}



var hasil ='';
// Menentukan rules
if(p == comp) {
    hasil ='SERI!';
} else if(p == 'kertas') {
//     if(comp == 'orang')
//         hasil ='MENANG!';
// } else {
//     hasil='KALAH!'
// }

hasil = (comp == 'batu') ? 'MENANG!' : 'KALAH!';
}else if(p == 'batu') {
    hasil = (comp =='kertas') ? 'KALAH!' : 'MENANG!';
}else if(p == 'gunting') {
    hasil = (comp == 'batu') ? 'KALAH!' : 'MENANG!';
}else ('MEMASUKKAN PILIHAN YANG SALAH!')

// Tampilkan hasilnya
alert('Kamu memilih : '+ p +' dan Komputer memilih : '+ comp + '\nMaka hasilnya : Kamu ' + hasil);

tanya = confirm('lagi?');
}
alert('Terimakasih sudah bermain.')