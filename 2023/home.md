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

<p> The 2023 Jesuwon Basketball tournament is current underway! You can check the schedule and scores for future schedules and past results, check the stats, regular season standings, or view teams. </p>

<br>

<h2> Current Season Standings </h2>
This year, the fifth place team does not qualify for playoffs.
<table class="display">
  <caption style="text-align: center;"> <b>PF</b> = Points For/Scored, <b>PA</b> = Points Against, <b>+/-</b> = Point Differential<br><b>Tiebreakers</b>: 1. Point Differential 2. Points  For 3. Head to Head Record</caption>
  <colgroup>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
      </colgroup>
  <thead>
    <tr>
      <th>Team</th>
      <th>Wins</th>
      <th>Loss</th>
      <th>PF</th>
      <th>PA</th>
      <th>+/-</th>
    </tr>
  </thead>
  <tbody>
   {% for team_hash in site.data.seasons.twentythree.teams %}
   {% assign team = team_hash[1] %}

   {% assign pf = 0 %}
   {% assign pa = 0 %}
   {% for game_hash in site.data.seasons.twentythree.games %}
   {% assign game = game_hash[1] %}
   {% if game.stage == "reg" %}
   {% if game.home_team_id == team.team_id %}
   		{% assign pf = pf | plus: game.home_score %}
   		{% assign pa = pa | plus: game.away_score %}
   {% elsif game.away_team_id == team.team_id %}
   		{% assign pf = pf | plus: game.away_score %}
   		{% assign pa = pa | plus: game.home_score %}
   {% endif %}
   {% endif %}
   {% endfor %}
   <tr>
   	<td><a href="/{{page.year}}/teams/team{{team.team_id}}">{{team.name}}</a></td>
   	<td>{{team.wins}}</td>
   	<td>{{team.losses}}</td>
   	<td>{{pf}}</td>
   	<td>{{pa}}</td>
   	<td>{{pf| minus: pa}}</td>
   </tr>
   {% endfor %}
  </tbody>
</table>