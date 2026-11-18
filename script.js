const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const themeToggle = document.getElementById("themeToggle");
const courseCertificate = document.getElementById("courseCertificate");
const courseCertificate2 = document.getElementById("courseCertificate2");
const courseCertificate3 = document.getElementById("courseCertificate3");
const courseCertificate4 = document.getElementById("courseCertificate4");
const internshipCertificate = document.getElementById("internshipCertificate");
const certificateDialog = document.getElementById("certificateDialog");
const certificateDialogClose = certificateDialog.querySelector(".certificate-dialog-close");
const certificateDialogTitle = document.getElementById("certificateDialogTitle");
const certificateImage = document.getElementById("certificateImage");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☼";
});

courseCertificate.addEventListener("click", () => {
  certificateDialogTitle.textContent = "NPTEL – Big Data Computing";
  certificateImage.src = "nptel-course-certificate.png";
  certificateImage.alt = "NPTEL Big Data Computing certificate awarded to Rakesh Pujari";
  certificateDialog.showModal();
});
courseCertificate2.addEventListener("click", () => {
  certificateDialogTitle.textContent = "NPTEL – Privacy and Security in Online Social Media";
  certificateImage.src = "nptel-course-certificate2.png";
  certificateImage.alt = "NPTEL Privacy and Security in Online Social Media certificate awarded to Sai Abhiram";
  certificateDialog.showModal();
});
courseCertificate3.addEventListener("click", () => {
  certificateDialogTitle.textContent = "NPTEL – Understanding Incubation and Entrepreneurship";
  certificateImage.src = "nptel-course-certificate3.png";
  certificateImage.alt = "NPTEL Understanding Incubation and Entrepreneurship certificate awarded to Sai Abhiram";
  certificateDialog.showModal();
});
courseCertificate4.addEventListener("click", () => {
  certificateDialogTitle.textContent = "NPTEL – Product Engineering and Design Thinking";
  certificateImage.src = "nptel-course-certificate4.png";
  certificateImage.alt = "NPTEL Product Engineering and Design Thinking certificate awarded to Sai Abhiram";
  certificateDialog.showModal();
});
internshipCertificate.addEventListener("click", () => {
  certificateDialogTitle.textContent = "Internship Certificate";
  certificateImage.src = "internship-certificate.png";
  certificateImage.alt = "Averixis Solutions Web Development internship certificate awarded to Rakesh Pujari";
  certificateDialog.showModal();
});
certificateDialogClose.addEventListener("click", () => certificateDialog.close());
certificateDialog.addEventListener("click", event => {
  if (event.target === certificateDialog) certificateDialog.close();
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name").toString().trim();
  const email = formData.get("email").toString().trim();
  const subject = formData.get("subject").toString().trim();
  const message = formData.get("message").toString().trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:saiabhiram1717@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  document.getElementById("contactFormStatus").textContent = "Opening your email app...";
  window.location.href = mailto;
});

document.getElementById("year").textContent = new Date().getFullYear();