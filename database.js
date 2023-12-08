const mysql = require('mysql');
const config = require('./config');

// Création d'une connexion à la base de données
let connection;



// Connexion à la base de données
function openConnection() {
  connection = mysql.createConnection(config);
  connection.connect((err) => {
    if (err) {
      process.exit(1);
    }
  });
}

function isPlaying(name, callback) {
  openConnection();
  connection.query('SELECT score FROM LEADERBOARD WHERE name = ?', name, (err, res) => {
    if (err) {
      callback(false); // ou gérer l'erreur différemment
    } else {
      callback(res.length !== 0); // true si le joueur est trouvé
    }
    closeConnection();
  });
}

function getLeaderboard(callback) {
  openConnection();
  connection.query('SELECT name, best_score FROM LEADERBOARD ORDER BY best_score DESC LIMIT 10', (err, results) => {
    if(err){
      callback(err, null);
    }
    else{
      callback(null, results);
    }
    closeConnection();
  });
}

function isInDB(name) {
  let namevl = {name: name};
  connection.query('SELECT NAME FROM LEADERBOARD WHERE ?', namevl, (err, results) => {
    if(err) return false;
    if(results !== null) {
      return results.length === 1;
    }
  });
  return false;
}

function register(name) {
  console.log("register called");
  openConnection();
  console.log("con opend");
  if(!isInDB(name)) {
    console.log("isnt in db");
    console.log("Start quer");
    connection.query("INSERT INTO LEADERBOARD SET name = ", name, (err, results) => {
     if(err) {
       console.error("Erreur dans l'insert d'un joueur");
     }
     console.log("INSERT " + name);
    });
  }
  closeConnection();
}

// Mettre a jour le best_score
function updateBestScore(name) {
  openConnection();
  connection.query('UPDATE LEADERBOARD SET best_score = score WHERE score > best_score AND name = ' + name, (err, results) => {
    if (err) {
      console.error('Erreur dans l\'update du joueur :\n', err);
      return;
    }
    console.log('Best score mis a jour');
  });
  connection.query('UPDATE LEADERBOARD SET score = 0 WHERE name = ?', name, (err, results) => {
    if (err) {
      console.error('Erreur dans la mise a 0 du score :\n', err);
      return;
    }
    console.log('Mise a 0 du score du joueur effectuée avec succès');
  })
  closeConnection();
}

function increaseScore(name, amount) {
  openConnection();
  connection.query('UPDATE LEADERBOARD SET score = score + ' + amount + 'WHERE name = ?', name, (err, results) => {
    if (err) {
      console.error("Erreur d'incrément de score: ", err);
      return;
    }
    console.log("Increase du score de " + name + " de " + amount + "\nresults: " + results);
  });
  closeConnection()
}


// Fermeture de la connexion à la base de données
function closeConnection() {
  connection.end((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la connexion à la base de données :', err);
      process.exit(1);
    }
    console.log('Déconnecté de la base de données MySQL');
  });
}

module.exports = {
  getLeaderboard,
  isPlaying,
  updateBestScore,
  increaseScore,
  register
};