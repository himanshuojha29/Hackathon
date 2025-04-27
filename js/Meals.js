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


// gsap code is start

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


// Meals data
const meals = [
  // Veg Meals (20)
  {name: 'Vegetable Stir Fry', calories: 250, protein: 8, carbs: 35, fats: 10, type: 'veg', link: 'recipes/vegetable-stir-fry.html'},
  {name: 'Quinoa Salad', calories: 300, protein: 10, carbs: 40, fats: 12, type: 'veg', link: 'recipes/quinoa-salad.html'},
  {name: 'Chickpea Curry', calories: 400, protein: 15, carbs: 45, fats: 15, type: 'veg', link: 'recipes/chickpea-curry.html'},
  {name: 'Spinach Sandwich', calories: 350, protein: 18, carbs: 35, fats: 14, type: 'veg', link: 'recipes/spinach-sandwich.html'},
  {name: 'Grilled Veg Wrap', calories: 320, protein: 10, carbs: 38, fats: 11, type: 'veg', link: 'recipes/grilled-veg-wrap.html'},
  {name: 'Tofu Scramble', calories: 270, protein: 20, carbs: 8, fats: 18, type: 'veg', link: 'recipes/tofu-scramble.html'},
  {name: 'Veggie Pasta', calories: 400, protein: 12, carbs: 50, fats: 10, type: 'veg', link: 'recipes/veggie-pasta.html'},
  {name: 'Paneer Bhurji', calories: 350, protein: 22, carbs: 12, fats: 20, type: 'veg', link: 'recipes/paneer-bhurji.html'},
  {name: 'Mushroom Risotto', calories: 420, protein: 10, carbs: 45, fats: 16, type: 'veg', link: 'recipes/mushroom-risotto.html'},
  {name: 'Avocado Toast', calories: 320, protein: 8, carbs: 30, fats: 20, type: 'veg', link: 'recipes/avocado-toast.html'},
  {name: 'Vegetable Soup', calories: 150, protein: 5, carbs: 20, fats: 5, type: 'veg', link: 'recipes/vegetable-soup.html'},
  {name: 'Cucumber Salad', calories: 120, protein: 4, carbs: 15, fats: 3, type: 'veg', link: 'recipes/cucumber-salad.html'},
  {name: 'Corn Chaat', calories: 200, protein: 6, carbs: 30, fats: 8, type: 'veg', link: 'recipes/corn-chaat.html'},
  {name: 'Dal Tadka', calories: 300, protein: 14, carbs: 25, fats: 10, type: 'veg', link: 'recipes/dal-tadka.html'},
  {name: 'Rajma Rice', calories: 450, protein: 15, carbs: 55, fats: 10, type: 'veg', link: 'recipes/rajma-rice.html'},
  {name: 'Kale Smoothie', calories: 180, protein: 6, carbs: 25, fats: 5, type: 'veg', link: 'recipes/kale-smoothie.html'},
  {name: 'Methi Paratha', calories: 320, protein: 10, carbs: 35, fats: 12, type: 'veg', link: 'recipes/methi-paratha.html'},
  {name: 'Fruit Bowl', calories: 200, protein: 2, carbs: 35, fats: 2, type: 'veg', link: 'recipes/fruit-bowl.html'},
  {name: 'Hummus & Pita', calories: 350, protein: 10, carbs: 40, fats: 14, type: 'veg', link: 'recipes/hummus-pita.html'},
  {name: 'Veg Biryani', calories: 400, protein: 8, carbs: 50, fats: 12, type: 'veg', link: 'recipes/veg-biryani.html'},

  // Non-Veg Meals (20)
  {name: 'Grilled Chicken Breast', calories: 300, protein: 45, carbs: 5, fats: 10, type: 'nonveg', link: 'recipes/grilled-chicken-breast.html'},
  {name: 'Egg White Omelette', calories: 200, protein: 25, carbs: 5, fats: 6, type: 'nonveg', link: 'recipes/egg-white-omelette.html'},
  {name: 'Turkey Sandwich', calories: 400, protein: 30, carbs: 35, fats: 14, type: 'nonveg', link: 'recipes/turkey-sandwich.html'},
  {name: 'Chicken Stir Fry', calories: 420, protein: 35, carbs: 20, fats: 18, type: 'nonveg', link: 'recipes/chicken-stir-fry.html'},
  {name: 'Fish Tacos', calories: 350, protein: 28, carbs: 25, fats: 12, type: 'nonveg', link: 'recipes/fish-tacos.html'},
  {name: 'Beef Steak', calories: 500, protein: 50, carbs: 0, fats: 35, type: 'nonveg', link: 'recipes/beef-steak.html'},
  {name: 'Shrimp Salad', calories: 250, protein: 22, carbs: 10, fats: 10, type: 'nonveg', link: 'recipes/shrimp-salad.html'},
  {name: 'Chicken Caesar Salad', calories: 350, protein: 30, carbs: 15, fats: 20, type: 'nonveg', link: 'recipes/chicken-caesar-salad.html'},
  {name: 'Grilled Salmon', calories: 400, protein: 40, carbs: 0, fats: 20, type: 'nonveg', link: 'recipes/grilled-salmon.html'},
  {name: 'Lamb Kebabs', calories: 450, protein: 35, carbs: 5, fats: 25, type: 'nonveg', link: 'recipes/lamb-kebabs.html'},
  {name: 'Prawn Curry', calories: 380, protein: 30, carbs: 15, fats: 15, type: 'nonveg', link: 'recipes/prawn-curry.html'},
  {name: 'Chicken Biryani', calories: 550, protein: 35, carbs: 50, fats: 20, type: 'nonveg', link: 'recipes/chicken-biryani.html'},
  {name: 'Fish Curry', calories: 400, protein: 35, carbs: 10, fats: 15, type: 'nonveg', link: 'recipes/fish-curry.html'},
  {name: 'Meatball Pasta', calories: 600, protein: 35, carbs: 55, fats: 22, type: 'nonveg', link: 'recipes/meatball-pasta.html'},
  {name: 'Roast Chicken', calories: 450, protein: 40, carbs: 5, fats: 20, type: 'nonveg', link: 'recipes/roast-chicken.html'},
  {name: 'Grilled Tuna', calories: 350, protein: 38, carbs: 2, fats: 10, type: 'nonveg', link: 'recipes/grilled-tuna.html'},
  {name: 'Egg Bhurji', calories: 300, protein: 20, carbs: 5, fats: 20, type: 'nonveg', link: 'recipes/egg-bhurji.html'},
  {name: 'Chicken Wrap', calories: 420, protein: 30, carbs: 25, fats: 16, type: 'nonveg', link: 'recipes/chicken-wrap.html'},
  {name: 'Butter Chicken', calories: 500, protein: 35, carbs: 10, fats: 25, type: 'nonveg', link: 'recipes/butter-chicken.html'},
  {name: 'Fish Fry', calories: 380, protein: 30, carbs: 8, fats: 18, type: 'nonveg', link: 'recipes/fish-fry.html'}
];

const mealTable = document.getElementById('mealTable');

function renderMeals(filterType = null) {
  mealTable.innerHTML = '';
  meals.forEach(meal => {
    if (!filterType || meal.type === filterType) {
      const row = document.createElement('tr');
      row.className = 'border-b border-[var(--main-orange)] hover:bg-[var(--main-orange)] hover:text-black transition';
      row.innerHTML = `
        <td class="py-4 px-6">
          <a href="${meal.link}" class="text-white hover:text-black">${meal.name}</a>
        </td>
        <td class="py-4 px-6">${meal.calories}</td>
        <td class="py-4 px-6">${meal.protein}</td>
        <td class="py-4 px-6">${meal.carbs}</td>
        <td class="py-4 px-6">${meal.fats}</td>
      `;
      mealTable.appendChild(row);
    }
  });
}

document.getElementById('vegButton').addEventListener('click', () => renderMeals('veg'));
document.getElementById('nonVegButton').addEventListener('click', () => renderMeals('nonveg'));

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  const rows = mealTable.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let text = row.textContent.toLowerCase();
    if (text.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
});

renderMeals(); // Initial render



