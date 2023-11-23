<?php include("config.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran Siswa Baru | SMK Coding</title>
    <!-- Link to Css -->
    <link rel="stylesheet" href="admin-style.css">

    <!-- Link for FA -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
    <header>
        <h3>Admin Page</h3>
    </header>

    <br>

    <table border="1">
        <thead>
            <tr>
                <th class="number">No</th>
                <th>Tanggal Dikirim</th>
                <th>Waktu Dikirim</th>
                <th>Nama User</th>
                <th>Email User</th>
                <th>Pesan User</th>
                <th></th>
            </tr>
        </thead>
        <tbody>

        <?php
            $sql = "SELECT * FROM komentaruser ORDER BY id DESC";
            $query = mysqli_query($db, $sql);

            $nomor_urut = 1; // Inisialisasi nomor urut

            while($siswa = mysqli_fetch_array($query)){
                echo "<tr>";
                echo "<td>".$nomor_urut."</td>";
                echo "<td>".$siswa["tanggal_dikirim"]."</td>";
                echo "<td>".$siswa["waktu_dikirim"]."</td>";
                echo "<td>".$siswa['nama']."</td>";
                echo "<td>".$siswa['email']."</td>";
                echo "<td>".$siswa['pesan']."</td>";
                echo "<td class='section-remove'>";
                echo "<a href='hapus.php?id=".$siswa['id']."' class='no-decoration'>Hapus</a>";
                echo "</td>";
                echo "</tr>";

                $nomor_urut++; // Increment nomor urut
            }
        ?>


        </tbody>
    </table>

    <div class="kembali" onclick="location.href='../main.html'">
        <i class="fa-solid fa-right-from-bracket"></i>  
    </div>

    <script>
        let tombol = document.queryselector('no-decoration');

        tombol.addEventListener("click", ()=>{
            alert('Komentar telah terhapus');
        })
    </script>

</body>
</html>