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
