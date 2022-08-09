function teamToRow(team) {
  return `
  <tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>${team.project}</td>
  <td><a href="${team.url}">${team.url}</a></td>
  <td>x e</td>
  </tr>`;
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (teams) {
      teamsToTable(teams);
    });
}

function teamsToTable(teams) {
  // var teamsHTML = teams.map(function (team) {
  //   return teamToRow(team);
  // });
  var teamsHTML = teams.map(teamToRow);

  // afisare in table body
  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
}

loadTeams();
