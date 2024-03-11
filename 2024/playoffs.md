---
archetype: tournament
type: playoffs
year: 2024
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> {{page.year}} Playoff Bracket </h2>
<br>

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
    {% for game in site.data.seasons.twentyfour.games %}
    {% assign match = game[1] %}
    {% if match.stage != "reg" %}
    {% assign home = site.data.seasons.twentyfour.teams[match.home_team_name] %}
    {% assign away = site.data.seasons.twentyfour.teams[match.away_team_name] %}
    <tr>
      <td><b>({{home.seed}}) {{home.name}} vs ({{away.seed}}) {{away.name}}</b></td>
      {% if match.fin == "yes" %}
      <td><a href="/{{page.year}}/games/game{{match.game_id}}">Match Stats</a></td>
      {% else %}
      <td> TBD </td>
      {% endif %}
      <td>{{match.type}}</td>
      <td>{{match.short_date}}, {{match.time}}</td>
      {% if match.fin == "yes" %}
      <td>{{home.tag}} {{match.home_score}} - {{match.away_score}} {{away.tag}}</td>
      {% else %}
      <td> TBD </td>
      {% endif %}
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
 </table>