// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1000);
});

// ===============================
// Nama Tamu dari URL
// contoh:
// ?to=Budi
// ===============================

const params = new URLSearchParams(window.location.search);

const guest = document.getElementById("guest");

if (guest) {
    guest.innerHTML = params.get("to") || "Tamu Undangan";
}

// ===============================
// Tombol Buka Undangan
// ===============================

const openBtn = document.getElementById("openInvitation");

const cover = document.getElementById("cover");

const content = document.getElementById("mainContent");

const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

  document.body.classList.remove("lock-scroll");

    cover.style.display = "none";

    content.style.display =

    music.play();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Countdown
// ===============================

const target = new Date("December 20, 2026 09:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = target - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// ===============================
// Salin Rekening
// ===============================

function copyRekening() {

    navigator.clipboard.writeText("1234567890");

    alert("Nomor rekening berhasil disalin.");

}

// ======================================
// Tombol Musik Play / Pause
// ======================================

const musicButton = document.getElementById("musicButton");

let isPlaying = true;

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "🎵";

        isPlaying = true;

    } else {

        music.pause();

        musicButton.innerHTML = "🔇";

        isPlaying = false;

    }

});

// ======================================
// Video Selesai Otomatis Scroll
// ======================================

const video = document.getElementById("openingVideo");

if(video){

video.addEventListener("ended",()=>{

document.querySelector(".couple").scrollIntoView({

behavior:"smooth"

});

});

}

// ======================================
// Efek Muncul Saat Scroll
// ======================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// ======================================
// Efek Hover Tombol
// ======================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ======================================
// Efek Fade Navbar (Jika nanti ditambah)
// ======================================

window.addEventListener("scroll",()=>{

const y=window.scrollY;

if(y>100){

document.body.classList.add("scrolling");

}else{

document.body.classList.remove("scrolling");

}

});

// ======================================
// Efek Kelap-kelip Tombol Buka
// ======================================

setInterval(()=>{

openBtn.animate([

{transform:"scale(1)"},

{transform:"scale(1.08)"},

{transform:"scale(1)"}

],{

duration:1500

});

},2000);

const video = document.getElementById("openingVideo");

if (video) {
    video.addEventListener("pause", () => {
        video.play();
    });
}