// Fungsi untuk mendapatkan pilihan komputer secara acak
function getComputerChoice() {
    // Menghasilkan angka acak antara 0 dan 1
    let compChoice = Math.random();

    // Mengembalikan pilihan berdasarkan nilai acak
    if (compChoice < 0.35) {
        return "gunting"; // Jika kurang dari 0.35, pilih "gunting"
    } else if (compChoice > 0.7) {
        return "batu"; // Jika lebih dari 0.7, pilih "batu"
    } else {
        return "kertas"; // Selain itu, pilih "kertas"
    }
}

// Fungsi untuk menentukan hasil pertandingan antara pilihan user dan komputer
function ayoSuit(compChoose, userChoose) { 
    if (userChoose === compChoose) {
        // Jika pilihan user dan komputer sama, hasil seri
        alert(`SERI
            Skor
   Kamu : ${humanScore} dan Komputer : ${computerScore}
    `);
        return "Hasil SERI";
    } 
    // Kondisi untuk menang
    else if ((userChoose === "batu" && compChoose === "gunting") || 
             (userChoose === "gunting" && compChoose === "kertas") || 
             (userChoose === "kertas" && compChoose === "batu")) {
        humanScore++; // Menambahkan skor untuk user jika menang
        alert(`Kamu MENANG 
            Skor
   Kamu : ${humanScore} dan Komputer : ${computerScore}
    `);
        return "MENANG";
    } 
    // Jika tidak menang dan tidak seri, user kalah
    else {
        computerScore++; // Menambahkan skor untuk komputer jika user kalah
        alert(`Kamu KALAH
            Skor
   Kamu : ${humanScore} dan Komputer : ${computerScore}
    `);
        return "KALAH";
    }
}

// Inisialisasi skor awal
let humanScore = 0;
let computerScore = 0;

// Fungsi untuk memvalidasi input dari user
function cekInput(userChoose) {
    // Memeriksa apakah input user valid (batu, gunting, kertas)
    if (userChoose !== "batu" && userChoose !== "gunting" && userChoose !== "kertas") {
        alert("Input SALAH"); // Jika tidak valid, beri peringatan
        return false;
    } else {
        return true; // Jika valid, kembalikan nilai true
    }
}

// Fungsi utama untuk menjalankan permainan
function playGame() {
    for (let i = 0; i < 5; i++) { // Loop sebanyak 5 kali untuk 5 ronde
        let inputValid = false; // Inisialisasi validitas input
        let compChoose = getComputerChoice(); // Mendapatkan pilihan komputer
        let userChoose;

        // Looping untuk meminta input sampai valid
        while (!inputValid) {
            let a = i;
            a++;
            userChoose = prompt(`Game ke ${a}:
                Masukkan pilihan Kamu: `).toLowerCase(); // Meminta input user
            inputValid = cekInput(userChoose); // Memeriksa validitas input
        }

        // Menjalankan logika suit
        ayoSuit(compChoose, userChoose);
    }
}

// Fungsi untuk mereset skor setelah permainan selesai
function reset() {
    humanScore = 0;
    computerScore = 0;
}

// Fungsi untuk menentukan pemenang akhir
function theWinner() {
    if (humanScore > computerScore) {
        return "Kamu MENANG"; // User menang jika skor lebih tinggi dari komputer
    } else if (humanScore < computerScore) {
        return "Kamu KALAH"; // User kalah jika skor lebih rendah dari komputer
    } else {
        return "Hasil SERI"; // Jika skor sama, hasil seri
    }
}

// Menambahkan event listener ke tombol "Start" untuk memulai permainan
document.getElementById('startGame').addEventListener('click', function() {
    playGame(); // Menjalankan permainan saat tombol diklik
    alert(` ${theWinner()} 
            Skor
   Kamu : ${humanScore} dan Komputer : ${computerScore}
    `); // Menampilkan hasil akhir
    reset(); // Mengatur ulang skor setelah permainan selesai
});
