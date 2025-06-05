const carousel = document.getElementById('productCarousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const filterSelect = document.getElementById('categoryFilter');

const allCards = Array.from(carousel.children);

filterSelect.addEventListener('change', () => {
  const selectedCategory = filterSelect.value;

  allCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

prevButton.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

carousel.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  carousel.scrollBy({ left: evt.deltaY < 0 ? -100 : 100 });
});

function toggleWishlist(icon) {
  icon.classList.toggle('active');
}