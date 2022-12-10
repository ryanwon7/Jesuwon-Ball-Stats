---
gamenum: game12
archetype: tournament
year: 2022
type: schedule
style: tabs       # defines body main class
script: tables
layout: default
datatable: true
---
{% assign game = site.data.seasons.twentytwo.games[page.gamenum] %}
{% assign home = site.data.seasons.twentytwo.teams[game.home_team_name] %}
{% assign away = site.data.seasons.twentytwo.teams[game.away_team_name] %}

<h4 style="text-align: center;"> {{game.type}}: {{game.long_date}} at {{game.time}} </h4>
<br>
<h1 style="text-align: center;"> {{home.name}} vs {{away.name}}</h1>
<h3 style="text-align: center;"> {{home.tag}} {{game.home_score}} - {{game.away_score}} {{away.tag}} </h3>
{% if game.stage == "reg" %}
<h2> {{home.name}} ({{home.wins}}-{{home.losses}})</h2>
{% else %}
<h2> ({{home.seed}}) {{home.name}} </h2>
{% endif %}
<table class="display">
  <caption style="text-align: center;"> <b>PTS</b> = Points Scored, <b>AST</b> = Assists, <b>REB</b> = Rebounds, <b>STL</b> = Steals, <b>BLK</b> = Blocks </caption>
  <colgroup>
      <col class="nineteen"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Player Name</th>
        <th>PTS</th>
        <th>AST</th>
        <th>REB</th>
        <th>STL</th>
        <th>BLK</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  {% assign pts_total = 0 %}
  {% assign ast_total = 0 %}
  {% assign reb_total = 0 %}
  {% assign stl_total = 0 %}
  {% assign blk_total = 0 %}
  {% for player in site.data.seasons.twentytwo.player_logs["gamelogs"].value %}
  {% if player.game_id == game.game_id and player.team_id == home.team_id %}
  <tr>
      <td><a href="/players/{{player.player_id}}">{{player.player_name}}</a></td>
      <td>{{player.pts}}</td>
      <td>{{player.ast}}</td>
      <td>{{player.reb}}</td>
      <td>{{player.stl}}</td>
      <td>{{player.blk}}</td>
      {% assign pts_total = pts_total | plus: player.pts %}
      {% assign ast_total = ast_total | plus: player.ast %}
      {% assign reb_total = reb_total | plus: player.reb %}
      {% assign stl_total = stl_total | plus: player.stl %}
      {% assign blk_total = blk_total | plus: player.blk %}
   </tr>
  {% endif %}
  {% endfor %}
  <tfoot style="text-align: center;">
    <tr>
        <th>Team Total</th>
        <th>{{pts_total}}</th>
        <th>{{ast_total}}</th>
        <th>{{reb_total}}</th>
        <th>{{stl_total}}</th>
        <th>{{blk_total}}</th>
    </tr>
  </tfoot>
  </tbody>
</table>
<br>
{% if game.stage == "reg" %}
<h2> {{away.name}} ({{away.wins}}-{{away.losses}})</h2>
{% else %}
<h2> ({{away.seed}}) {{away.name}} </h2>
{% endif %}
<table class="display">
  <caption style="text-align: center;"> <b>PTS</b> = Points Scored, <b>AST</b> = Assists, <b>REB</b> = Rebounds, <b>STL</b> = Steals, <b>BLK</b> = Blocks </caption>
  <colgroup>
      <col class="nineteen"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Player Name</th>
        <th>PTS</th>
        <th>AST</th>
        <th>REB</th>
        <th>STL</th>
        <th>BLK</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  {% assign pts_total = 0 %}
  {% assign ast_total = 0 %}
  {% assign reb_total = 0 %}
  {% assign stl_total = 0 %}
  {% assign blk_total = 0 %}
  {% for player in site.data.seasons.twentytwo.player_logs["gamelogs"].value %}
  {% if player.game_id == game.game_id and player.team_id == away.team_id %}
  <tr>
      <td><a href="/players/{{player.player_id}}">{{player.player_name}}</a></td>
      <td>{{player.pts}}</td>
      <td>{{player.ast}}</td>
      <td>{{player.reb}}</td>
      <td>{{player.stl}}</td>
      <td>{{player.blk}}</td>
      {% assign pts_total = pts_total | plus: player.pts %}
      {% assign ast_total = ast_total | plus: player.ast %}
      {% assign reb_total = reb_total | plus: player.reb %}
      {% assign stl_total = stl_total | plus: player.stl %}
      {% assign blk_total = blk_total | plus: player.blk %}
   </tr>
  {% endif %}
  {% endfor %}
  <tfoot style="text-align: center;">
    <tr>
        <th>Team Total</th>
        <th>{{pts_total}}</th>
        <th>{{ast_total}}</th>
        <th>{{reb_total}}</th>
        <th>{{stl_total}}</th>
        <th>{{blk_total}}</th>
    </tr>
  </tfoot>
  </tbody>
</table>
<br>
<div style="display: flex; justify-content: center; align-items: center;">
  <button type="button" onclick="window.history.back()">Go Back</button>
</div>