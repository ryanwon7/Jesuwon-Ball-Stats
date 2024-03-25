---
archetype: tournament
type: home
year: 2023
title:  Home
style:  tabs       # defines body main class
script: home
layout: default
datatable: true
---
<h2> {{page.year}} - 13th Jesuwon Basketball Tournament </h2>

<h3> Champions: Fish Taxi </h3>
{% for team_hash in site.data.seasons.twentythree.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == 1 %}
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
{% endif %}
{% endfor %}
<br>

<img src="/resources/2023/champs.jpg" alt="Champions">

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
      <td>Minwoo Lee</td>
    </tr>
    <tr>
        <td>Defensive Player of the Year</td>
        <td>Jaiyup Yoo</td>
    </tr>
    <tr>
      <td>Most Improved Player</td>
      <td>Alan Moon</td>
    </tr>
    <tr>
      <td>Rookie of the Year</td>
      <td>Alex Hong</td>
    </tr>
    <tr>
      <td>Sportmanship Award</td>
      <td>Jeremiah Park</td>
    </tr>
  </tbody>
</table>