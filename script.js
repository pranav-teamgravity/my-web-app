// Splash screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.style.opacity = 0;
    splash.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      splash.style.display = 'none';
      navigateTo('home');
    }, 500);
  }, 2000);
});

// SPA page navigation
function navigateTo(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    if (p.id === pageId) {
      p.classList.remove('hidden');
      p.style.opacity = 1;
      p.style.transform = 'translateY(0)';
    } else {
      p.classList.add('hidden');
      p.style.opacity = 0;
      p.style.transform = 'translateY(20px)';
    }
  });
}

// Card clicks
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    navigateTo(card.dataset.page);
  });
});

// Bottom navigation clicks
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    navigateTo(item.dataset.page);
  });
});

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.log(err));
  });
}
