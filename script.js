function kirimPesan() {

    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("isiPesan").value;

    if (nama === "" || pesan === "") {
        alert("Nama dan pesan harus diisi terlebih dahulu!");
        return;
    }

    document.getElementById("hasilPesan").innerHTML = `
        <div class="pesan-kartu">
            <h3>Pesan dari ${nama} 💙</h3>
            <p>${pesan}</p>
        </div>
    `;

    document.getElementById("nama").value = "";
    document.getElementById("isiPesan").value = "";

    alert("Pesan berhasil dikirim! 💌");
}