// === Resume Download ===
document.getElementById("resumeDownload").addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/14KH5vqIyoLtExm5-QrezMx1ycNEdgXZf/view?usp=sharing", "_blank");
});

// === Typewriter Effect ===
const typewriter = document.querySelector(".typewriter");
const texts = [
  "Full Stack Java Developer",
  "Spring Boot + Angular Expert",
  "Building Real-World Projects"
];
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[index].length) {
    typewriter.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 300);
  }
}
type();

// === EmailJS ===
emailjs.init("qOBa4XSMyXcOESvl0");

const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_p9lnzxt", "template_gmy52ey", this).then(
    () => {
      msg.textContent = "Message sent successfully!";
      msg.style.color = "lime";
      form.reset();
    },
    (error) => {
      msg.textContent = "Failed to send message!";
      msg.style.color = "red";
      console.error("Error:", error);
    }
  );
});

// === Section Display Logic ===
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section[data-section]");
  const showAllBtn = document.createElement("button");

  // Create "Show All" button
  showAllBtn.textContent = "Show Full Website";
  showAllBtn.classList.add("btn", "show-all-btn");
  showAllBtn.style.display = "none";
  document.body.insertBefore(showAllBtn, document.querySelector("footer"));

  function showOnlySection(targetId) {
    sections.forEach(section => {
      section.style.display = section.getAttribute("data-section") === targetId ? "block" : "none";
    });
    showAllBtn.style.display = "block";
  }

  function showAllSections() {
    sections.forEach(section => (section.style.display = "block"));
    showAllBtn.style.display = "none";
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const sectionId = href.replace("#", "");

      // Allow full scroll view when clicking "Home"
      if (sectionId !== "hero") {
        e.preventDefault();
        showOnlySection(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  showAllBtn.addEventListener("click", showAllSections);
});