document.getElementById('kirim-wa').addEventListener('click', function() {
    const produkCheckboxes = document.querySelectorAll('.produk-checkbox');
    let pesan = 'Saya ingin memesan produk berikut:\n\n';

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
