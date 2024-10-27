/* GET main page showing games */
const mainPage = function(req, res) {
  res.render('game-list', {
    title: 'Game Portal',
    pageHeader: { title: 'Available Games' },
    games: [
      { name: 'The Witcher 3', description: 'An open-world RPG set in a rich fantasy universe where you play as Geralt of Rivia, a monster hunter.', image: 'witcher3.jpg', lastUpdated: '10 mins ago' },
      { name: 'Cyberpunk 2077', description: 'A narrative-driven action RPG set in a dystopian future where you can explore the sprawling Night City.', image: 'cyberpunk2077.jpg', lastUpdated: '20 mins ago' },
      { name: 'Assassin\'s Creed Odyssey', description: 'Experience an epic journey through Ancient Greece, playing as a legendary mercenary fighting for their destiny.', image: 'assassinscreedodyssey.jpg', lastUpdated: '30 mins ago' },
      { name: 'Call of Duty: Modern Warfare', description: 'A gritty and immersive military shooter that reinvents the franchise with a new narrative and gameplay mechanics.', image: 'callofduty.jpg', lastUpdated: '1 hour ago' }
    ]
  });
};

module.exports = {
  mainPage
};
