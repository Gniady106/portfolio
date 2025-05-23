
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  const navlink= document.querySelectorAll('.nav-link');
  
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navlink.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });