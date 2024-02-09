---
archetype: tournament
type: stats
year: 2024
style: tabs       # defines body main class
script: stats_longer
layout: default
datatable: true
---
<h2> {{page.year}} Regular Season Stats </h2>
<table class="display">
  <caption style="text-align: center;"> <b>PPG</b> = Points Per Game, <b>RPG</b> = Rebounds Per Game, <b>APG</b> = Assists Per Game, <b>SPG</b> = Steals per Game, <b>BPG</b> = Blocks per Game, <b>FG%</b> = Total % Of Shots Made, <b>3PT%</b> = Total % Of 3PT Shots Made, <b>FT%</b> = Total % Of Free Throws Made <b>GP</b> = Games Played</caption>
  <colgroup>
      <col class="fifteen"/>
      <col class="nine"/>
      <col class="nine"/>
      <col class="nine"/>
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
        <th>PPG</th>
        <th>RPG</th>
        <th>APG</th>
        <th>SPG</th>
        <th>BPG</th>
        <th>FG%</th>
        <th>3PT%</th>
        <th>FT%</th>
        <th>GP</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  {% for curr_player_id in (1..51) %}
	{% assign pts_total = 0 %}
	{% assign reb_total = 0 %}
	{% assign ast_total = 0 %}
	{% assign stl_total = 0 %}
	{% assign blk_total = 0 %}
  {% assign fgmk_total = 0 %}
  {% assign fgms_total = 0 %}
  {% assign thrpmk_total = 0 %}
  {% assign thrpms_total = 0 %}
  {% assign ftmk_total = 0 %}
  {% assign ftms_total = 0 %}
	{% assign games_played = 0 %}
  	{% for player in site.data.seasons.twentyfour.player_logs["gamelogs"].value %}
  	  {% if player.player_id == curr_player_id and player.game_id <= 10 %}
		{% assign curr_player_name = player.player_name %}
        {% assign twopt_pts = player.twopmk | times:2 %}
        {% assign thrpt_pts = player.thrpmk | times:3 %}
  	    {% assign pts_total = pts_total | plus: twopt_pts | plus: thrpt_pts | plus: player.ftmk %}
        {% assign reb_total = reb_total | plus: player.reb %}
        {% assign ast_total = ast_total | plus: player.ast %}
        {% assign stl_total = stl_total | plus: player.stl %}
        {% assign blk_total = blk_total | plus: player.blk %}
        {% assign fgmk_total = fgmk_total | plus: player.twopmk | plus: player.thrpmk %}
        {% assign fgms_total = fgms_total | plus: player.twopms | plus: player.thrpms %}
        {% assign thrpmk_total = thrpmk_total | plus: player.thrpmk %}
        {% assign thrpms_total = thrpms_total | plus: player.thrpms %}
        {% assign thrpms_total = thrpms_total | plus: player.thrpms %}
        {% assign ftmk_total = ftmk_total | plus: player.ftmk %}
        {% assign ftms_total = ftms_total | plus: player.ftms %}
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
      {% assign fg_total = fgmk_total | plus: fgms_total %}
      <td>{{100.0 | times: fgmk_total | divided_by: fg_total | round: 1 }}%</td>
      {% assign thrp_total = thrpmk_total | plus: thrpms_total %}
      {% if thrp_total == 0 %}
      <th>--%</th>
      {% else %}
      <td>{{100.0 | times: thrpmk_total | divided_by: thrp_total | round: 1 }}%</td>
      {% endif %}
      {% assign ft_total = ftmk_total | plus: ftms_total %}
      {% if ft_total == 0 %}
      <th>--%</th>
      {% else %}
      <td>{{100.0 | times: ftmk_total | divided_by: ft_total | round: 1 }}%</td>
      {% endif %}
      <td>{{games_played}}</td>
   </tr>
  	{% endif %}
   {% endfor %}
  </tbody>
</table>
<br>