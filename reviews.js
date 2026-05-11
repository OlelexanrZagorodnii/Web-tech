// reviews.js
const reviews = [
  {
    id: 1,
    author: 'Олександр Загородній',
    avatar: 'assets/images/users/user1.png',
    text: 'Ваш підхід до каресансуй дійсно допомагає знайти спокій під час сесії. Неймовірний досвід!',
    rating: 5,
  },
  {
    id: 2,
    author: 'Діана (Староста)',
    avatar: 'assets/images/users/user2.png',
    text: 'Дуже зручний формат онлайн-сесій. Практичні інструменти для щоденного балансу працюють на всі 100%.',
    rating: 5,
  },
  {
    id: 3,
    author: 'Іван Компан',
    avatar: 'assets/images/users/user3.png',
    text: 'Ретрити — це щось особливе. Поєднання природи та роботи з коучем дало крутий результат.',
    rating: 4,
  }
];

// Іконка зірки (SVG) для рейтингу
const starIconSVG = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#DBFFEC" stroke="#DBFFEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;