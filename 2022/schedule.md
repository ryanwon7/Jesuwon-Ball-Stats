---
archetype: tournament
type: schedule
year: 2022
title:  Schedule
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> {{page.year}} Schedule and Scores </h2>
<table class="display3">
  <colgroup>
    <col class="thirtyy"/>
    <col class="twenty"/>
    <col class="ten"/>
    <col class="ten"/>
    <col class="fifteen"/>
    <col class="fifteen"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Stage</th>
      <th>Date</th>
      <th>Time</th>
      <th>Result</th>
      <th>Match Page</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.twentytwo.games %}
    {% assign match = game[1] %}
	{% assign home = site.data.seasons.twentytwo.teams[match.home_team_name] %}
	{% assign away = site.data.seasons.twentytwo.teams[match.away_team_name] %}
    <tr>
      <td><b>{{home.name}} vs {{away.name}}</b></td>
      <td>{{match.type}}</td>
      <td>{{match.short_date}}</td>
      <td>{{match.time}}</td>
      <td>{{home.tag}} {{match.home_score}} - {{match.away_score}} {{away.tag}}</td>
      <td><a href="/{{page.year}}/games/game{{match.game_id}}">Match Stats</a></td>
    </tr>
    {% endfor %}
  </tbody>
 </table>