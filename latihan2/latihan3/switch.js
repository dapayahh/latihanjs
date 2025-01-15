var nilai = prompt ('masukkan angka!');

switch (nilai) {
case '1' :
case '3' :
case '5' :
    alert ('Anda memasukkan angka ganjil!');
    break;

case '2':
case '4':
case '6':
    alert ('Anda memasukkan angka genap!');
    break;

default :
    alert ('Anda memasukkan angka yang salah!');
   break;
}
