// render-reviews.js
const reviewsContainer = document.getElementById('testimonialsList');

function renderAllReviews() {
  // Очищуємо контейнер перед рендерингом (на всякий випадок)
  reviewsContainer.innerHTML = '';

  reviews.forEach((review) => {
    const card = document.createElement('div');
    // Використовуємо твої класи BEM
    card.className = 'card card--rounded-md card--md card--flex-column card--gap-sm review-card';
    card.dataset.id = review.id;

    // Створюємо рядок із зірочок на основі рейтингу
    const ratingStars = starIconSVG.repeat(review.rating);

    card.innerHTML = `
      <div class="card__header card--flex-row card--gap-sm">
        <div class="card__avatar">
          <img src="${review.avatar}" alt="${review.author}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
        </div>
        <div class="card__author-info">
          <h3 class="card__title" style="margin: 0; font-size: 1.1rem;">${review.author}</h3>
          <div class="card__rating" style="display: flex; gap: 2px;">${ratingStars}</div>
        </div>
      </div>
      <div class="card__info" style="font-style: italic; color: #f0f0f0;">"${review.text}"</div>
      <div class="card__action">
        <span style="color: #DBFFEC; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px;">Verified Experience</span>
      </div>
    `;

    reviewsContainer.appendChild(card);
  });
}

// Запускаємо функцію після завантаження скрипта
renderAllReviews();