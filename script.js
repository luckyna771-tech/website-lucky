function kirimPesan() {
    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("isiPesan").value;

    if (nama === "" || pesan === "") {
        alert("Nama dan pesan harus diisi terlebih dahulu!");
        return;
    }

    let nomorWhatsApp = "6285728583548";

    let teks = 
        "Halo Lucky! 👋%0A%0A" +
        "Nama: " + nama + "%0A" +
        "Pesan: " + pesan;

    let linkWhatsApp = "https://wa.me/" + nomorWhatsApp + "?text=" + teks;

    window.open(linkWhatsApp, "_blank");
}
