function formattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
}

async function searchKota(namaKota) {
  let response = await fetch(`https://api.myquran.com/v1/sholat/kota/cari/${namaKota}`);
  let { data } = await response.json();
  if (data && data.length > 0) {
    let result = data[0].id;
    return result;
  } else {
    return null;
  }
}

async function cards() {
  let input = document.querySelector(".search-box").value.toLowerCase();
  let id;

  try {
    id = await searchKota(input);
    if (!id) {
      throw new Error("Kota tidak ditemukan");
    }

    let main = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${id}/${formattedDate()}`);
    let mainResp = await main.json();
    // console.log(mainResp.data.lokasi);

    let cityName = document.querySelector(".city-name");
    let cards = `

                  <div class="card-container pagi">
                    <h3>SUBUH</h3>
                    <h4>${mainResp.data.jadwal.subuh}</h4>
                  </div>

                  <div class="card-container dzuhur">
                    <h3>DZUHUR</h3>
                    <h4>${mainResp.data.jadwal.dzuhur}</h4>
                  </div>

                  <div class="card-container ashar">
                    <h3>ASHAR</h3>
                    <h4>${mainResp.data.jadwal.ashar}</h4>
                  </div>

                  <div class="card-container maghrib">
                    <h3>MAGHRIB</h3>
                    <h4>${mainResp.data.jadwal.maghrib}</h4>
                  </div>

                  <div class="card-container isya">
                    <h3>ISYA</h3>
                    <h4>${mainResp.data.jadwal.isya}</h4>
                  </div>
                    `;
     let dateInfo = document.querySelector('.date-info');
     let container = document.querySelector(".section");
      container.innerHTML = cards;
      dateInfo.innerHTML = mainResp.data.jadwal.tanggal

    if (cityName) {
      cityName.innerHTML = mainResp.data.lokasi;
    } else {
      console.log("Elemen dengan kelas 'city-name' tidak ditemukan.");
    }
  } catch (error) {
    console.error(error.message);
    let cityName = document.querySelector(".city-name");
    if (cityName) {
      cityName.innerHTML = "Tidak ditemukan";
      let container = document.querySelector('.section')
      container.innerHTML = 'Jadwal Sholat Tidak Tersedia: <span class="error">Periksa kembali nama daerah yang anda masukkan</span>'
    }
  }
}

document.querySelector(".search-button").addEventListener("click", cards);

let currentPage = 0;
const itemsPerPage = 10;
const span = document.querySelector('.currentPage');
let data = [];

async function getID() {
  const res = await fetch('https://api.myquran.com/v1/sholat/kota/semua');
  const response = await res.json();
  data = response.map(city => city.id);
  renderTable();
}

async function getDay(id) {
  const date = formattedDate();
  const res = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${id}/${date}`);
  const dayData = await res.json();
  return dayData;
}

async function renderTable() {
  const tableBody = document.querySelector('.jadwalTable tbody');
  tableBody.innerHTML = '';
  const table = document.querySelector('.jadwalTable');
  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayData = data.slice(startIdx, endIdx);

  for (const id of displayData) {
    const dayData = await getDay(id);

    const row = table.insertRow(table.rows.length);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell2.style.textAlign = 'center';
    cell3.style.textAlign = 'center';
    cell4.style.textAlign = 'center';
    cell5.style.textAlign = 'center';
    cell6.style.textAlign = 'center';

    cell1.innerHTML = dayData.data.lokasi;
    cell2.innerHTML = dayData.data.jadwal.subuh;
    cell3.innerHTML = dayData.data.jadwal.dzuhur;
    cell4.innerHTML = dayData.data.jadwal.ashar;
    cell5.innerHTML = dayData.data.jadwal.maghrib;
    cell6.innerHTML = dayData.data.jadwal.isya;

    tableBody.appendChild(row);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderTable();
  }
}

function nextPage() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderTable();
  }
}

getID()



