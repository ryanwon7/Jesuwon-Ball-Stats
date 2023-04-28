---
archetype: tournament
type: stats
year: 2023
style: tabs       # defines body main class
script: stats
layout: default
datatable: true
---
<h2> {{page.year}} Playoffs Stats </h2>
<table class="display">
  <caption style="text-align: center;"> <b>PPG</b> = Points Per Game, <b>RPG</b> = Rebounds per Game, <b>APG</b> = Assists Per Game, <b>SPG</b> = Steals per Game, <b>BPG</b> = Blocks per Game, <b>GP</b> = Games Played</caption>
  <colgroup>
      <col class="fifteen"/>
      <col class="nine"/>
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
        <th>REB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
        <th>GP</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  {% for curr_player_id in (1..38) %}
	{% assign pts_total = 0 %}
	{% assign reb_total = 0 %}
	{% assign ast_total = 0 %}
	{% assign stl_total = 0 %}
	{% assign blk_total = 0 %}
	{% assign games_played = 0 %}
  	{% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
  	  {% if player.player_id == curr_player_id and player.game_id > 10 %}
		{% assign curr_player_name = player.player_name %}
  	    {% assign pts_total = pts_total | plus: player.pts %}
        {% assign reb_total = reb_total | plus: player.reb %}
        {% assign ast_total = ast_total | plus: player.ast %}
        {% assign stl_total = stl_total | plus: player.stl %}
        {% assign blk_total = blk_total | plus: player.blk %}
        {% assign games_played = games_played | plus: 1 %}
  	  {% endif %}
    {% endfor %}
  	{% if games_played > 0 %}
  <tr>
      <td><a href="/players/{{curr_player_id}}">{{curr_player_name}}</a></td>
      <td>{{pts_total | times: 1.0 | divided_by: games_played | round: 1}}</td>
      <td>{{reb_total | times: 1.0 | divided_by: games_played | round: 1}}</td>
      <td>{{ast_total | times: 1.0 | divided_by: games_played | round: 1}}</td>
      <td>{{stl_total | times: 1.0 | divided_by: games_played | round: 1}}</td>
      <td>{{blk_total | times: 1.0 | divided_by: games_played | round: 1}}</td>
      <td>{{games_played}}</td>
   </tr>
  	{% endif %}
   {% endfor %}
  </tbody>
</table>
<br>