---
archetype: tournament
type: home
year: 2024
title:  Home
style:  tabs       # defines body main class
script: home
layout: default
datatable: true
---
<h2> {{page.year}} - 14th Jesuwon Basketball Tournament </h2>


<h3> Champions: Hunters </h3>
{% for team_hash in site.data.seasons.twentyfour.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == 2 %}
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
{% endif %}
{% endfor %}
<br>

<img src="/resources/2024/champs.jpg" alt="Champions">

<h3> Season Award Winners </h3>
<table class="display2">
  <colgroup>
      <col class="twenty"/>
      <col class="twenty"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Award</th>
        <th>Winner</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td>Most Valuable Player</td>
      <td>Jason Lee</td>
    </tr>
    <tr>
        <td>Defensive Player of the Year</td>
        <td>Ryan Lee</td>
    </tr>
    <tr>
      <td>Most Improved Player</td>
      <td>David Moon</td>
    </tr>
    <tr>
      <td>Rookie of the Year</td>
      <td>Justin Hong</td>
    </tr>
    <tr>
      <td>Sportmanship Award</td>
      <td>Brandon Oh</td>
    </tr>
  </tbody>
</table>