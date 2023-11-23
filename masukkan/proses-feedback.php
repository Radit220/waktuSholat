<?php
        include("config.php");
        // cek apakah tombol daftar sudah diklik atau blum?
        if(isset($_POST['daftar'])){
        // ambil data dari formulir
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $jk = $_POST['pesan'];
        // buat query
        $sql = "INSERT INTO komentaruser (waktu_dikirim, nama, email, pesan) VALUE (NOW(),'$nama', '$alamat', '$jk')";
        $query = mysqli_query($db, $sql);
        // apakah query simpan berhasil?
        if( $query ) {
        // kalau berhasil alihkan ke halaman index.php dengan status=sukses
        header('Location: feedBack.php?status=sukses');
        } else {
        // kalau gagal alihkan ke halaman indek.php dengan status=gagal
        header('Location: ' . $_SERVER['HTTP_REFERER'] . '&status=gagal');
        }
        } else {
        die("Mohon masukkan data dengan benar");
        }
?>
