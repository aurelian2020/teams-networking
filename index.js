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
  // var tbl = document.querySelector("#teams tbody");
  // tbl.innerHTML = "";
  // for (var i = 0; i < teams.length; i++) {
  //   tbl.innerHTML += `<tr><td>${teams[i].promotion}</td><td>${teams[i].members}</td><td>${teams[i].project}</td><td><a href="${teams[i].url}">${teams[i].url}</a></td></tr>`;

  var teamsHTML = "";
  // formateaza din json in html
  teams.forEach(function (team) {
    teamsHTML += `
            <tr>
            <td>${team.promotion}</td>
            <td>${team.members}</td>
            <td>${team.project}</td>
            <td><a href="${team.url}">${team.url}</a></td>
            <td>x e</td>
            </tr>`;
  });
  // afisare in table body
  document.querySelector("table tbody").innerHTML = teamsHTML;
}

loadTeams();
