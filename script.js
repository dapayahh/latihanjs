
        const content = document.getElementById ('content');
        const header = document.createElement ('h1');
        const headerContent = document.createTextNode ('Belajar Bareng WPU🚀');

        header.appendChild (headerContent);
        content.appendChild (header);

        console.log('Hello World!');

        var x = 'Dafa';

        console.log('var x ='+x);
        
        var y = 'Selamat Datang';

        var a = 'Nama';
        var b = 'Dafa Pratama Muharam';
        var c = 'Sekolah';
        var d = 'SMKN 2 PKP';

        //alert (y+' '+x);

       
        // alert(a);
        // alert(b);
        // alert(c);
        // alert(d);

    //    var nama = prompt('Masukkan Nama');
    //    alert(nama);

       var pesan = confirm('Anda Yakin?');

       if(pesan===true){
        alert('Anda diterima');
       }else{
        alert('Anda ditolak');
       }
