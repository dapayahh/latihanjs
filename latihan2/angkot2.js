var jlhAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// while(noAngkot <= angkotBeroperasi) {
//     console.log ('Angkot No.'+ noAngkot +' beroperasi dengan baik');

//     noAngkot++;
// }

for(noAngkot = 1; noAngkot <= jlhAngkot; noAngkot++) {
    if (noAngkot <=5 && noAngkot !== 5) {
        console.log ('Angkot No. '+ noAngkot +' beroperasi dengan baik');

    }else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log ('Angkot No. '+ noAngkot +' sedang lembur');

    }else {
        console.log ('Angkot No. '+ noAngkot +' sedang tidak beroperasi');

    }
    
}