<h1>Group A</h1>
{% assign a1 = site.data.a1 %}
{% assign a2 = site.data.a2 %}
{% assign a3 = site.data.a3 %}
{% assign a4 = site.data.a4 %}

<h2>Standings</h2>
<table style="width:100%">
  <tr>
    <th>Team</th>
    <th>Wins</th>
    <th>Losses</th>
  </tr>
  <tr>
    <td>{{a1.teamname}}</td>
    <td>{{a1.grp_win}}</td>
    <td>{{a1.grp_loss}}</td>
  </tr>
  <tr>
    <td>{{a2.teamname}}</td>
    <td>{{a2.grp_win}}</td>
    <td>{{a2.grp_loss}}</td>
  </tr>
  <tr>
    <td>{{a3.teamname}}</td>
    <td>{{a3.grp_win}}</td>
    <td>{{a3.grp_loss}}</td>
  </tr>
  <tr>
    <td>{{a4.teamname}}</td>
    <td>{{a4.grp_win}}</td>
    <td>{{a4.grp_loss}}</td>
  </tr>
</table>

<h2>Schedule</h2>
<table style="width:100%">
  <tr>
    <th>Matchup</th>
    <th>Time</th>
    <th>Map</th>
    <th>Result</th>
    <th>Match Page</th>
  </tr>