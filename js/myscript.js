/* Typing */
const text = "Architecting scalable distributed systems";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

/* Hamburger */
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const burger = document.getElementById("hamburger");
  nav.classList.toggle("active");
  burger.classList.toggle("active");
}

/* Expand Experience */
function toggleExp(el) {
  el.closest(".exp-card").classList.toggle("active");
}

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((section) => {
  observer.observe(section);
});

/* Scroll Progress */
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
});

/* PDF Preview */
pdfjsLib.getDocument("resume.pdf").promise.then((pdf) => {
  pdf.getPage(1).then((page) => {
    const canvas = document.getElementById("pdf-preview");
    const ctx = canvas.getContext("2d");
    const viewport = page.getViewport({ scale: 1 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: ctx, viewport: viewport });
  });
});
