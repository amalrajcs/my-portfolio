// Menu Toggle 

const toggle = document.getElementById('menu-toggle');
  const navItems = document.getElementById('nav-items');

  toggle.addEventListener('click', () => {
    navItems.classList.toggle('show');
  });

// Form Messgaes Receiver

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new URLSearchParams(new FormData(form));

    fetch("https://script.google.com/macros/s/AKfycbwOL08KlYW74fLMvZj6AZC56oLtiRlFyvrqhxA3OZT7-fcoXNe2mTDbjFnllVvThKPJ/exec", {
      method: "POST",
      body: data,
    })
    .then(res => res.text())
    .then(data => {
      document.getElementById("status").textContent = "Message sent successfully!";
      form.reset();
    })
    .catch(err => {
      document.getElementById("status").textContent = "Failed to send message.";
    });
  });


