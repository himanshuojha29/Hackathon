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


gsap.from(".card5", {
    opacity: 0,
    y: 50,
    duration: 3,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card5",
    //   start: "top 80%",
    //   toggleActions: "play none none none",
      scrub: 1,
    },
   
  });

// select card
const card1 = document.getElementById("card1");
const bmiModal = document.getElementById("bmiModal");

card1.addEventListener("click", () => {
  bmiModal.classList.remove("hidden");
});

function closeModal() {
  bmiModal.classList.add("hidden");
}

// bmi code
function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector("input[name='gender']:checked")?.value;

  if (!height || !weight || !age || age < 2 || age > 120) {
    document.getElementById("bmiResult").textContent =
      "Please enter valid values for all fields.";
    return;
  }

  const bmi = weight / Math.pow(height / 100, 2);
  let category = "";
  let color = "text-lime-400";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  // Result Text
  document.getElementById("bmiResult").innerHTML = `BMI = ${bmi.toFixed(
    1
  )} kg/m² <span class="${color}">(${category})</span>`;
  document.getElementById("bmiCategory").textContent = category;

  // Rotate pointer based on BMI (gauge goes from 15 to 40)
  const pointer = document.getElementById("pointer");
  const minBMI = 15,
    maxBMI = 40;
  const angle = ((bmi - minBMI) / (maxBMI - minBMI)) * 180; // 0 to 180 degrees
  pointer.setAttribute("transform", `rotate(${angle}, 150, 150)`);
}


// login.js

const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const loginModal = document.getElementById("loginModal");

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


gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "nav ",
      scroller: "Body",
    //   markers: true,
      start: "top -15%",
      end: "top -11%",
      scrub: 1,
    },
  });

