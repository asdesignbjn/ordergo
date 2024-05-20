document.getElementById('kirim-wa').addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;

    if (!nama || !alamat) {
        alert('Mohon isi Nama Toko dan Alamat.');
        return;
    }

    const produkCheckboxes = document.querySelectorAll('.produk-checkbox');
    let pesan = `Nama Pemesan: ${nama}\nAlamat: ${alamat}\n\nProduk yang dipesan:\n\n`;

    produkCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            const namaProduk = checkbox.getAttribute('data-nama');
            const jumlahProduk = checkbox.parentElement.nextElementSibling.querySelector('.produk-jumlah').value;
            pesan += `Nama Produk: ${namaProduk}\nJumlah: ${jumlahProduk}\n\n`;
        }
    });

    const encodedPesan = encodeURIComponent(pesan);
    const whatsappUrl = `https://wa.me/6285176960858?text=${encodedPesan}`;
    window.open(whatsappUrl, '_blank');
});
