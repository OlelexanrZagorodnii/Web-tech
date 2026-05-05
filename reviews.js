const reviews = [
  {
    id: 1,
    author: 'Sasha Zagorodnii',
    avatar: 'assets/images/users/user1.png',
    text: 'Чудовий підхід до клієнтів! Сесії коучингу допомогли мені знайти баланс у навчанні в ДУІКТ.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Diana (Group Leader)',
    avatar: 'assets/images/users/user2.png',
    text: 'Ретрити KareCare — це найкращий спосіб перезавантажитись після складних проектів. Квіти неймовірні!',
    rating: 5,
  },
  {
    id: 3,
    author: 'Ivan Ivanov',
    avatar: 'assets/images/users/user3.png',
    text: 'Дуже сподобався формат комюніті-навчання. Багато практичних інструментів для щоденного спокою.',
    rating: 4,
  }
];

const starIconSVG = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#DBFFEC" stroke="#DBFFEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const reviewsContainer = document.getElementById('testimonialsList');

reviews.forEach((review) => {
  const card = document.createElement('div');
  card.className = 'card card--rounded-md card--md card--flex-column card--gap-sm review-card';
  card.dataset.id = review.id;

  const ratingStars = starIconSVG.repeat(review.rating);

  card.innerHTML = `
    <div class="card__header card--flex-row card--gap-sm">
      <div class="card__avatar">
        <img src="${review.avatar}" alt="${review.author}" style="width: 50px; height: 50px; border-radius: 50%;">
      </div>
      <div class="card__author-info">
        <h3 class="card__title">${review.author}</h3>
        <div class="card__rating">${ratingStars}</div>
      </div>
    </div>
    <div class="card__info">"${review.text}"</div>
    <div class="card__action">
      <div class="card__date" style="color: #DBFFEC; font-size: 0.8rem;">Verified Customer</div>
    </div>
  `;

  reviewsContainer.appendChild(card);
});