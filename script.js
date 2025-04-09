// Data for Premier League teams
const teams = [
  { position: 1, team: "Manchester City", played: 38, won: 28, drawn: 5, lost: 5, points: 89 },
  { position: 2, team: "Liverpool", played: 38, won: 24, drawn: 8, lost: 6, points: 80 },
  { position: 3, team: "Chelsea", played: 38, won: 21, drawn: 6, lost: 11, points: 69 },
  { position: 4, team: "Arsenal", played: 38, won: 20, drawn: 7, lost: 11, points: 67 },
  { position: 5, team: "Tottenham Hotspur", played: 38, won: 18, drawn: 8, lost: 12, points: 62 },
  { position: 6, team: "Manchester United", played: 38, won: 18, drawn: 7, lost: 13, points: 61 },
  { position: 7, team: "West Ham United", played: 38, won: 12, drawn: 8, lost: 18, points: 44 },
  { position: 8, team: "Wolves", played: 38, won: 12, drawn: 9, lost: 17, points: 45 },
  { position: 9, team: "Leicester City", played: 38, won: 12, drawn: 9, lost: 17, points: 45 },
  { position: 10, team: "Aston Villa", played: 38, won: 11, drawn: 8, lost: 19, points: 41 },
];

// Function to create table rows dynamically
function createTable() {
  const tableBody = document.querySelector("#league-table tbody");
  tableBody.innerHTML = ''; // Clear existing rows

  teams.forEach(team => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${team.position}</td>
      <td>${team.team}</td>
      <td>${team.played}</td>
      <td>${team.won}</td>
      <td>${team.drawn}</td>
      <td>${team.lost}</td>
      <td>${team.points}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Call the function to populate the table when the page loads
window.onload = createTable;
