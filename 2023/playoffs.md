---
archetype: tournament
type: playoffs
year: 2023
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> {{page.year}} Playoff Bracket </h2>
<h4> Champions: TBD</h4>

<img src="/resources/{{page.year}}/bracket.png" alt="Championship Bracket">

<br>
<h4> Match Pages </h4>
<h2> {{page.year}} Schedule and Scores </h2>
<table class="display3">
  <colgroup>
    <col class="thirty"/>
    <col class="fifteen"/>
    <col class="twenty"/>
    <col class="twenty"/>
    <col class="fifteen"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Match Page</th>
      <th>Stage</th>
      <th>Date and Time</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.twentythree.games %}
    {% assign match = game[1] %}
    {% if match.stage != "reg" %}
    {% assign home = site.data.seasons.twentythree.teams[match.home_team_name] %}
    {% assign away = site.data.seasons.twentythree.teams[match.away_team_name] %}
    <tr>
      <td><b>({{home.seed}}) {{home.name}} vs ({{away.seed}}) {{away.name}}</b></td>
      <td><a href="/{{page.year}}/games/game{{match.game_id}}">Match Stats</a></td>
      <td>{{match.type}}</td>
      <td>{{match.short_date}}, {{match.time}}</td>
      <td>{{home.tag}} {{match.home_score}} - {{match.away_score}} {{away.tag}}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
 </table>