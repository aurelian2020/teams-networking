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
  // var teamsHTML = "";
  // // formateaza din json in html
  // teams.forEach(function (team) {
  //   teamsHTML += teamToRow(team);
  // });
  var teamsHTML = teams.map(function (team) {
    //console.info(team);
    return teamToRow(team);
  });
  //console.warn(teamsHTML);

  // afisare in table body
  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
}

loadTeams();
