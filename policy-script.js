// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add smooth scroll behavior to internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add scroll to top button functionality
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scroll-top').style.display = 'block';
  } else {
    document.getElementById('scroll-top').style.display = 'none';
  }
};

// Print functionality
function printPage() {
  window.print();
}