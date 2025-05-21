
// navbar js
const toggleBtn = document.getElementById("toggleNavbar");
const navLinks = document.getElementById("navbar-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("nav a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#FF1414";
  });
});


// gsap code start
gsap.to("nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "Body",
    //   markers: true,
    start: "top -15%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    // markers: "true",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from(".left", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".right", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".left1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left1",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".right1", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right1",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".left2", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left2",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".right2", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right2",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".left3", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left3",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});

gsap.from(".right3", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right3",
    start: "top 80%",
    toggleActions: "play none none none",
    scrub: 2,
  },
});




// Open login modal
openLogin.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

// Close login modal
closeLogin.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

// Close login modal when clicking outside
loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});


// registration page
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close modal if click outside of the form
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

