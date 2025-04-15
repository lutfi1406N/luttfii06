document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  const whatsappLink = `https://wa.me/qr/JIR4IIGQQYUBH1?text=` +
    encodeURIComponent(`Halo, saya ingin bertanya tentang pembuatan website.\n\nNama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);

  window.open(whatsappLink, '_blank');
});
