---
archetype: tournament
type: home
year: 2022
style: tabs       # defines body main class
script: stats
layout: default
datatable: true
---
<h2> {{page.year}} - 12th Jesuwon Basketball Tournament </h2>

<h3> Champions: Taco Amigos </h3>
{% for team_hash in site.data.seasons.twentytwo.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == 4 %}
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
{% endif %}
{% endfor %}

<br>
<br>
<h3> Season Award Winners </h3>
<table class="display2">
  <colgroup>
      <col class="twenty"/>
      <col class="twenty"/>
      <col class="fiftyfive"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Award</th>
        <th>Winner</th>
        <th>Stats</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td>Most Valuable Player</td>
      <td>Isaac Sohn</td>
  	  <td>25.8 PPG, 1.3 APG, 4.0 RPG, 3.3 SPG, 0.3 BPG, 3-1 Record</td>
    </tr>
    <tr>
      	<td>Defensive Player of the Year</td>
  		<td>Eric Moon</td>
  		<td>5.0 RPG, 2.3 SPG, 2.0 BPG, 3-1 Record</td>
    </tr>
    <tr>
  		<td>Most Improved Player</td>
  		<td>Elijah Park</td>
  		<td>7.5 PPG, 1.5 APG, 5.5 RPG, 1.8 SPG, 0.5 BPG, 3-1 Record</td>
    </tr>
    <tr>
  		<td>Rookie of the Year</td>
  		<td>Daniel Lee</td>
  		<td>14.0 PPG, 2.3 APG, 8.0 RPG, 1.8 SPG, 1.3 BPG, 3-1 Record</td>
    </tr>
    <tr>
      <td>Sportmanship Award</td>
      <td>David Moon</td>
  	  <td>3 Votes</td>
    </tr>
  </tbody>
</table>