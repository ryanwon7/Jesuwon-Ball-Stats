---
archetype: tournament
type: home
year: 2020
style: tabs       # defines body main class
script: stats
layout: default
datatable: true
---
<h2> {{page.year}} - 11th Jesuwon Basketball Tournament </h2>

<h3> Champions: Unending Prophets </h3>
{% for team_hash in site.data.seasons.twenty.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == 6 %}
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
{% endif %}
{% endfor %}

<img src="/resources/2020/champs.JPG" alt="Champions">

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
      <td>Abe Park</td>
      <td>14.2 PPG, 7.4 RPG, 3.2 APG, 3.0 SPG, 0.0 BPG, 5-0 Record</td>
    </tr>
    <tr>
      <td>Defensive Player of the Year</td>
      <td>Joseph Jung</td>
      <td>7.4 RPG, 2.6 SPG, 0.2 BPG, 4-1 Record</td>
    </tr>
    <tr>
  		<td>Most Improved Player</td>
      <td>Kyle Ju</td>
      <td>10.6 PPG, 8.2 RPG, 1.2 APG, 0.4 SPG, 0.8 BPG, 2-3 Record</td>
    </tr>
    <tr>
  		<td>Rookie of the Year</td>
      <td>Isaac Sohn</td>
      <td>5.3 PPG, 2.5 RPG, 1.3 APG, 1.5 SPG, 0.3 BPG, 1-4 Record</td>
    </tr>
    <tr>
      <td>Sportmanship Award</td>
      <td>Urim Lee</td>
  	  <td>4 Votes</td>
    </tr>
  </tbody>
</table>