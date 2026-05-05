
const reviewsContainer = document.getElementById('reviews-container');

function renderReviews() {
  reviews.forEach(review => {
    // Створюємо зірочки рейтингу
    const stars = '⭐'.repeat(review.rating);

    const reviewHtml = `
      <article class="review-card">
        <div class="review-header">
          <img src="${review.avatar}" alt="${review.userName}" class="avatar">
          <div>
            <h4>${review.userName}</h4>
            <span class="rating">${stars}</span>
          </div>
        </div>
        <p class="review-text">"${review.text}"</p>
        <time datetime="${review.date}">${new Date(review.date).toLocaleDateString('uk-UA')}</time>
      </article>
    `;

    reviewsContainer.innerHTML += reviewHtml;
  });
}

renderReviews();