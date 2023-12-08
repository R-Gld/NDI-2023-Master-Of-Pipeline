document.addEventListener('DOMContentLoaded', function() {
    fetchLeaderboard();
});

function fetchLeaderboard() {
    // url.com/api/leaderboard
    fetch('/api/leaderboard') // Remplacez '/api/leaderboard' par l'URL de votre API
        .then(response => response.json())
        .then(data => updateLeaderboardTable(data))
        .catch(error => console.error('Erreur lors de la récupération des données du leaderboard:', error));
}

function updateLeaderboardTable(leaderboardData) {

    const table = document.getElementById('leaderboard');

    if (!Array.isArray(leaderboardData) || leaderboardData.length === 0 || leaderboardData.error === true) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 3;
        cell.textContent = 'Aucun joueur dans le leaderboard pour le moment.';
        return;
    }

    // Remplir le tableau avec les données du leaderboard
    leaderboardData.forEach((item, index) => {
        const row = table.insertRow();
        const rankCell = row.insertCell();
        const nameCell = row.insertCell();
        const scoreCell = row.insertCell();

        rankCell.textContent = index + 1;
        nameCell.textContent = item.name;
        scoreCell.textContent = item.best_score;
    });
}