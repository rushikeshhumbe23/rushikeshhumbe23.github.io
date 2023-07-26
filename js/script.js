// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// *=============================== github calender ==================================
GitHubCalendar(".calendar", "0avinashmohandev1");

// or enable responsive functionality:
GitHubCalendar(".calendar", "0avinashmohandev1", { responsive: true });

// *=============================== resume opening in a new tab ==================================

let resume1 = document
  .getElementById("resume-button-1")
  .addEventListener("click", NewTab);
let resume2 = document
  .getElementById("resume-button-2")
  .addEventListener("click", NewTab);

// =========================== Resume Button =====================================================
function downloadAndOpen() {
  const resumeURL =
    "https://drive.google.com/file/d/1dS82bx7pu_STR236_C74fybEXqqJln6p/view?usp=sharing";
  const downloadURL =
    "https://drive.google.com/uc?export=download&id=1dS82bx7pu_STR236_C74fybEXqqJln6p";

  // Open the link in a new tab
  window.open(resumeURL, "_blank");

  // Trigger the download
  const link = document.createElement("a");
  link.href = downloadURL;
  link.download = "Rushikesh-Humbe-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // *=============================== sticky navbar ==================================

  // let header = document.querySelector("header");

  // header.classList.toggle("sticky", window.scrollY > 100);

  // *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .project-card, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

let stats = document
  .getElementById("github-top-langs")
  .addEventListener("click", statsfun);

function statsfun() {
  window.open("https://github.com/rushikeshhumbe23", "_blank");
}
