<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Pendaftaran Siswa Baru | SMK Coding</title>
    <!-- Link to CSS -->
    <link rel="stylesheet" href="feedBack-style.css">
    <!-- Link for FA -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
    <header>
        <h3>FEEDBACK</h3>
    </header>
    
    <div class="container"> 
        <form action="proses-feedback.php"  class="form">

            <fieldset class="field">
                <legend>FeedBack</legend>
            <p>
                <label for="nama">Nama: </label>
                <input type="text" name="nama" placeholder="Masukkan Nama anda" class="nama" />
            </p>

            <p>
                <label for="alamat">Alamat Email: </label>
                <input name="alamat" class="alamat" placeholder="Masukkan Alamat Email Anda"></input>
            </p>

            <p>
                <label for="pesan">Pesan: </label>
                <textarea name="pesan" class="pesan"></textarea>
            </p>

            <p>
                <input type="submit" value="Kirim" name="daftar" class="tombol"/>
            </p>
            </fieldset>
        </form>
    </div>

    <button class="button" name="tutup_halaman" onclick="location.href='../main.html'"><i class="fa-solid fa-house"></i></button>


    <script src="feedBack-script.js"></script>
</script>
</body>
</html>