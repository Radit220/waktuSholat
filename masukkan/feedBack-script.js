let tombol = document.querySelector(".tombol");

function bukaWindow(url) {
  window.open(url, "_blank");
}

tombol.addEventListener("click", function () {
  let username = document.querySelector(".nama").value;
  let email = document.querySelector(".alamat").value;
  let pesan = document.querySelector(".pesan").value;
  let form = document.querySelector(".form");

  if (username === "admin123" && email === "admin@gmail.com" && pesan === "the goal of life is death") {
    bukaWindow("http://localhost/waktusholat/masukkan/admin.php");
  } else if (username !== "" && email !== "" && pesan !== "") {
    alert("Berhasil");
    form.method = "POST";
  } else if ((username !== "" || email !== "") && pesan === "") {
    alert("Ada yang kosong");
  } else if ((username !== "" || pesan !== "") && email === "") {
    alert("Ada yang kosong");
  } else if ((pesan !== "" || email !== "") && username === "") {
    alert("Ada yang kosong");
  } else {
    alert("Mohon isi terlebih dahulu");
  }
});

function tutupHalaman() {
    // Menutup halaman saat tombol di div terakhir diklik
    window.close();
}

// Menggunakan PHP untuk memeriksa apakah suatu kondisi terpenuhi

// function kirim(){

//     document.querySelector('#myform').addEventListener("submit", function(event){
//         event.preventDefault()

//         console.log('Terkirim')
//     })

//     }
