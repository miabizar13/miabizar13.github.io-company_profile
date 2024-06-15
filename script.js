// Jika Anda ingin menambahkan beberapa interaksi, misalnya animasi atau validasi formulir,
// Anda dapat menambahkan kode JavaScript di sini.

// Contoh: animasi pada tombol "Kirim" di halaman Kontak Kami
const submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', function() {
        alert('Pesan Anda telah terkirim!');
    });
}

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah
        document.querySelector("footer").classList.add("hidden");
    } else {
        // Scroll ke atas
        document.querySelector("footer").classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// Tambahkan kode JavaScript untuk mengatur form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thankYou").style.display = "block";
});

// Tambahkan kode JavaScript untuk menampilkan peta Google Maps
function initMap() {
    var mapOptions = {
        center: {lat: -7.2575, lng: 112.7521},
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var mapOptionsFooter = {
        center: {lat: -7.2575, lng: 112.7521},
        zoom: 15
    };
    var mapFooter = new google.maps.Map(document.getElementById('map-footer'), mapOptionsFooter);
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        showSlide(currentIndex);
    }

    // Tambahkan event listener untuk tombol next dan previous
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Fungsi untuk mengatur perpindahan slide secara otomatis
    function autoSlide() {
        nextSlide();
    }

    // Atur interval untuk memanggil fungsi autoSlide setiap 5 detik (5000 milidetik)
    setInterval(autoSlide, 5000);

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});
