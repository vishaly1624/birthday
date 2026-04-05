/* ================= ELEMENTS ================= */
const lock = document.getElementById("lock");
const hero = document.getElementById("hero");
const viewer = document.getElementById("viewer");
const finalPage = document.getElementById("finalPage");

const img = document.getElementById("slideImg");
const text = document.getElementById("slideText");
const music = document.getElementById("music");
const heroTitle = document.getElementById("heroTitle");
const typeText = document.getElementById("typeText");

/* ================= 🔐 PASSWORD ================= */
function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === "vidhi") {
    lock.classList.add("hidden");
    hero.classList.remove("hidden");

    startTitleTyping(); // 💖 start typing title
  } else {
    error.innerText = "Wrong password 😢";
  }
}

/* ================= 💖 TITLE TYPEWRITER ================= */

const fullTitle = "🎊❤️🎂 Happy Birthday Anshika ❤️🎂🎊";

let tIndex = 0;

function startTitleTyping() {
  heroTitle.innerText = "";
  tIndex = 0;
  typeTitle();
}

function typeTitle() {
  if (tIndex < fullTitle.length) {
    heroTitle.innerText += fullTitle.charAt(tIndex);
    tIndex++;
    setTimeout(typeTitle, 40);
  } else {
    // 💖 After typing → style name + line break
    heroTitle.innerHTML = heroTitle.innerText
      .replace("Happy Birthday", "Happy Birthday<br>")
      .replace(
        "Anshika",
        '<span class="name">Anshika</span>'
      );
  }
}

/* ================= 💌 SUB TEXT TYPEWRITER ================= */

const msg = "You are the best thing that ever happened to me 💖";
let i = 0;

function typeMessage() {
  if (i < msg.length) {
    typeText.innerHTML += msg[i++];
    setTimeout(typeMessage, 50);
  }
}

/* ================= 💖 SLIDES ================= */

let index = 0;

const slides = [
  {
    img: "images/img4.jpeg",
    text: "The way you sit there so calmly, lost in your own thoughts… it makes me realize how beautiful you are, not just outside but inside too. You bring peace to my chaos and light to my darkest days ✨💖"
  },
  {
    img: "images/img5.jpeg",
    text: "Seeing you in this beautiful dress feels like I’m looking at a dream. You don’t just look pretty… you look magical. I swear, every time I see you like this, I fall in love with you all over again 💕👑"
  },
  {
    img: "images/img.jpeg",
    text: "The way you stand, the way you look away… it’s like time slows down. You are not just someone I love, you are my everything, my peace, my happiness, my whole world 💖✨"
  },
  {
    img: "images/img1.jpeg",
    text: "That smile… it’s my favorite thing in this entire world. No matter how bad my day is, just one smile from you can fix everything. You are my happiness, always 😊💫"
  },
  {
    img: "images/img2.jpeg",
    text: "Life felt normal before you… but after you came, everything became beautiful. Colors feel brighter, moments feel special, and every second with you feels like magic 💫💖"
  },
  {
    img: "images/img3.jpeg",
    text: "Every little moment with you — whether we talk, laugh, or just sit silently — becomes something special. You don’t even realize how much happiness you bring into my life ❤️✨"
  }
];

/* ================= 🚀 START ================= */

function start() {
  hero.classList.add("hidden");
  viewer.classList.remove("hidden");

  index = 0;
  showSlide();

  // 🎵 MUSIC FADE-IN
  music.volume = 0;
  music.play().catch(() => { });

  let v = 0;
  const fade = setInterval(() => {
    if (v < 1) {
      v += 0.05;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 200);

  // 💌 start sub text typing
  typeText.innerHTML = "";
  i = 0;
  typeMessage();
}

/* ================= 📸 SHOW ================= */

function showSlide() {
  const current = slides[index];

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = current.img;
    text.innerText = current.text;

    document.querySelector(".img-box")
      .style.setProperty("--bg-img", `url(${current.img})`);

    img.style.opacity = 1;
  }, 200);
}

/* ================= ➡️ NEXT ================= */

function nextSlide() {
  index++;

  if (index >= slides.length) {
    viewer.classList.add("hidden");
    finalPage.classList.remove("hidden");

    // 🎆 CONFETTI
    confetti({
      particleCount: 200,
      spread: 120
    });

    return;
  }
  showSlide();
}

/* ================= 🔁 RESTART ================= */

function restart() {
  finalPage.classList.add("hidden");
  hero.classList.remove("hidden");

  startTitleTyping(); // restart typing
}

/* ================= 💖 FLOATING HEARTS ================= */

const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

/* ================= 💥 CLICK HEART ================= */

document.addEventListener("click", (e) => {
  const heart = document.createElement("div");

  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "burst 1s ease forwards";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});