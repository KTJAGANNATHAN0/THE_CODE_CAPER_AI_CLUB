document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetElement = document.querySelector(this.getAttribute('href'));
          if (targetElement) {
              const navbar = document.querySelector('.navbar');
              const offset = targetElement.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
              window.scrollTo({ top: offset, behavior: 'smooth' });
          }
      });
  });

  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      navbar.style.background = window.scrollY > 50 ? 'rgba(15, 17, 25, 0.95)' : 'rgba(15, 17, 25, 0.8)';
  });

  // Reveal event cards smoothly
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.2 });

  document.querySelectorAll('.event-card').forEach(card => observer.observe(card));

  // Registration modal popup
  const modal = document.getElementById('registration-modal');
  const registerBtn = document.querySelector('.register-btn');
  const closeModal = document.querySelector('.close');

  registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
  });
});
