const toggle = document.getElementById('menu-toggle');
  const navItems = document.getElementById('nav-items');

  toggle.addEventListener('click', () => {
    navItems.classList.toggle('show');
  });

  // Cursor

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    ringX += (mouseX - ringX) / 8;
    ringY += (mouseY - ringY) / 8;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animate);
  }

  animate();