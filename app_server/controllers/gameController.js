const mainPage = function(req, res) {
  res.render('game-list', {
    title: 'Game Portal',
    pageHeader: { title: 'Available Games' },
    games: [
      { 
        name: 'The Witcher 3: Wild Hunt', 
        description: 'An open-world RPG set in a rich fantasy universe where you play as Geralt of Rivia, a monster hunter.', 
        image: 'https://github.com/Furalza/webprojects/blob/main/images/TW3.jpg?raw=true', 
        lastUpdated: '10 mins ago' 
      },
      { 
        name: 'Cyberpunk 2077', 
        description: 'A narrative-driven action RPG set in a dystopian future where you can explore the sprawling Night City.', 
        image: 'https://github.com/Furalza/webprojects/blob/main/images/cyberpunk_2077.jpg?raw=true', 
        lastUpdated: '20 mins ago' 
      },
      { 
        name: 'Assassin\'s Creed Odyssey', 
        description: 'Experience an epic journey through Ancient Greece, playing as a legendary mercenary fighting for their destiny.', 
        image: 'https://github.com/Furalza/webprojects/blob/main/images/assassinscreed_odyssey.jpg?raw=true', 
        lastUpdated: '30 mins ago' 
      },
      { 
        name: 'Call of Duty: Modern Warfare', 
        description: 'A gritty and immersive military shooter that reinvents the franchise with a new narrative and gameplay mechanics.', 
        image: 'https://github.com/Furalza/webprojects/blob/main/images/codmw.jpg?raw=true', 
        lastUpdated: '1 hour ago' 
      },
      {
        name: 'Shadow of the Tomb Raider',
        description: 'Follow Lara Croft\'s journey as she explores deadly jungles, discovers hidden tombs, and solves intricate puzzles.',
        image: 'https://github.com/Furalza/webprojects/blob/main/images/shadow-of-the-tomb-raider.jpg?raw=true',
        lastUpdated: '2 hours ago'
      }
    ]
  });
};

module.exports = {
  mainPage
};
