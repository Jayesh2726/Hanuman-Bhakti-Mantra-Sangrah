// async function loadMantras() {
//   try {
//     const response = await fetch("mantras3.json");
//     const mantraData = await response.json();
//     const tableBody = document.getElementById("mantraTableBody");

//     mantraData.forEach((mantra, index) => {
//       const row = document.createElement("tr");

//       row.innerHTML = `
//         <td>${index + 1}</td>
//         <td class="sanskrit">${mantra.sanskrit}</td>
//         <td>${mantra.japam}</td>
//         <td>${mantra.translation}</td>
//       `;

//       tableBody.appendChild(row);
//     });
//   } catch (error) {
//     console.error("Error loading mantras:", error);
//   }
// }

// // Load mantras on page load
// document.addEventListener("DOMContentLoaded", loadMantras);

// const container = document.querySelector(".table-container");
// let lastScrollTop = 0;

// container.addEventListener("scroll", function() {
//   let st = container.scrollTop;

//   if (st > lastScrollTop) {
//     // Scrolling Down → scrollbar wide
//     container.style.setProperty("--scrollbar-width", "14px");
//   } else {
//     // Scrolling Up → scrollbar thin
//     container.style.setProperty("--scrollbar-width", "6px");
//   }

//   lastScrollTop = st <= 0 ? 0 : st;
// });

async function loadMantras() {
  try {
    const response = await fetch("mantras3.json");
    const mantraData = await response.json();
    const tableBody = document.getElementById("mantraTableBody");

    mantraData.forEach((mantra, index) => {
      const row = document.createElement("tr");

      // Tailwind classes neat layout + hover effect
      row.className = "hover:bg-cyan-400/10 transition";

      row.innerHTML = `
        <td class="p-4 text-sky-100">${index + 1}</td>
        <td class="p-4 font-noto text-lg text-sky-200">${mantra.sanskrit}</td>
        <td class="p-4 text-sky-100">${mantra.japam}</td>
        <td class="p-4 text-sky-100">${mantra.translation}</td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading mantras:", error);
  }
}

// Load mantras on page load
document.addEventListener("DOMContentLoaded", loadMantras);

// Scrollbar effect (wide ↓, thin ↑)
// const container = document.querySelector(".table-container");
// let lastScrollTop = 0;

// container.addEventListener("scroll", function () {
//   let st = container.scrollTop;

//   if (st > lastScrollTop) {
//     // Scrolling Down → scrollbar wide
//     container.style.setProperty("--scrollbar-width", "14px");
//   } else {
//     // Scrolling Up → scrollbar thin
//     container.style.setProperty("--scrollbar-width", "6px");
//   }

//   lastScrollTop = st <= 0 ? 0 : st;
// });


const menuBtn = document.querySelector("#menuBtn");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let st = window.scrollY;

  if (st > lastScrollTop) {
    // Scroll down → hide
    menuBtn.classList.add("opacity-0", "pointer-events-none");
  } else {
    // Scroll up → show
    menuBtn.classList.remove("opacity-0", "pointer-events-none");
  }

  lastScrollTop = st <= 0 ? 0 : st;
});


