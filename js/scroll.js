// Показувати кнопку після скролінгу
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Скролінг до верху при кліку
document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});
