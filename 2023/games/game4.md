---
gamenum: game4
archetype: tournament
year: 2023
type: schedule
style: tabs       # defines body main class
script: tables
layout: default
datatable: true
---
{% assign game = site.data.seasons.twentythree.games[page.gamenum] %}
{% assign home = site.data.seasons.twentythree.teams[game.home_team_name] %}
{% assign away = site.data.seasons.twentythree.teams[game.away_team_name] %}

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
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Player Name</th>
        <th>PTS</th>
        <th>REB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
        <th>FG</th>
        <th>3PT</th>
        <th>FT</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  {% assign pts_total = 0 %}
  {% assign ast_total = 0 %}
  {% assign reb_total = 0 %}
  {% assign stl_total = 0 %}
  {% assign blk_total = 0 %}
  {% assign fgmk_total = 0 %}
  {% assign fgms_total = 0 %}
  {% assign thrpmk_total = 0 %}
  {% assign thrpms_total = 0 %}
  {% assign ftmk_total = 0 %}
  {% assign ftms_total = 0 %}
  {% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
  {% if player.game_id == game.game_id and player.team_id == home.team_id %}
  {% assign twopt_pts = player.twopmk | times:2 %}
  {% assign thrpt_pts = player.thrpmk | times:3 %}
  <tr>
      <td><a href="/players/{{player.player_id}}">{{player.player_name}}</a></td>
      <td>{{twopt_pts | plus: thrpt_pts | plus: player.ftmk }}</td>
      <td>{{player.reb}}</td>
      <td>{{player.ast}}</td>
      <td>{{player.stl}}</td>
      <td>{{player.blk}}</td>
      <td>{{player.twopmk | plus: player.thrpmk}}-{{player.twopms | plus: player.thrpms | plus: player.twopmk | plus: player.thrpmk}}</td>
      <td>{{player.thrpmk}}-{{player.thrpms | plus: player.thrpmk}}</td>
      <td>{{player.ftmk}}-{{player.ftms | plus: player.ftmk}}</td>
      {% assign pts_total = pts_total | plus: twopt_pts | plus: thrpt_pts | plus: player.ftmk  %}
      {% assign reb_total = reb_total | plus: player.reb %}
      {% assign ast_total = ast_total | plus: player.ast %}
      {% assign stl_total = stl_total | plus: player.stl %}
      {% assign blk_total = blk_total | plus: player.blk %}
      {% assign fgmk_total = fgmk_total | plus: player.twopmk | plus: player.thrpmk %}
      {% assign fgms_total = fgms_total | plus: player.twopms | plus: player.thrpms %}
      {% assign thrpmk_total = thrpmk_total | plus: player.thrpmk %}
      {% assign thrpms_total = thrpms_total | plus: player.thrpms %}
      {% assign ftmk_total = ftmk_total | plus: player.ftmk %}
      {% assign ftms_total = ftms_total | plus: player.ftms %}
   </tr>
  {% endif %}
  {% endfor %}
  <tfoot style="text-align: center;">
    <tr>
        <th>Team Total</th>
        <th>{{pts_total}}</th>
        <th>{{reb_total}}</th>
        <th>{{ast_total}}</th>
        <th>{{stl_total}}</th>
        <th>{{blk_total}}</th>
        <th>{{fgmk_total}}-{{fgms_total| plus: fgmk_total }}</th>
        <th>{{thrpmk_total}}-{{thrpms_total| plus: thrpmk_total }}</th>
        <th>{{ftmk_total}}-{{ftms_total| plus: ftmk_total }}</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        {% assign fg_total = fgmk_total | plus: fgms_total %}
        <th>{{100.0 | times: fgmk_total | divided_by: fg_total | round: 1 }} %</th>
        {% assign thrpt_total = thrpmk_total | plus: thrpms_total %}
        <th>{{100.0 | times: thrpmk_total | divided_by: thrpt_total | round: 1 }} %</th>
        {% assign ft_total = ftmk_total | plus: ftms_total %}
        {% if ft_total == 0 %}
        <th>-- %</th>
        {% else %}
        <th>{{100.0 | times: ftmk_total | divided_by: ft_total | round: 1 }}%</th>
        {% endif %}
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
  <caption style="text-align: center;"> <b>PTS</b> = Points Scored, <b>AST</b> = Assists, <b>REB</b> = Rebounds, <b>STL</b> = Steals, <b>BLK</b> = Blocks. <b>FG</b> = Both 2PT and 3PT total made-shot, <b>3PT</b> = Three Pointers made-shot, <b>FT</b> = Free Throws made-shot </caption>
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
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Player Name</th>
        <th>PTS</th>
        <th>REB</th>
        <th>AST</th>
        <th>STL</th>
        <th>BLK</th>
        <th>FG</th>
        <th>3PT</th>
        <th>FT</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  {% assign pts_total = 0 %}
  {% assign ast_total = 0 %}
  {% assign reb_total = 0 %}
  {% assign stl_total = 0 %}
  {% assign blk_total = 0 %}
  {% assign fgmk_total = 0 %}
  {% assign fgms_total = 0 %}
  {% assign thrpmk_total = 0 %}
  {% assign thrpms_total = 0 %}
  {% assign ftmk_total = 0 %}
  {% assign ftms_total = 0 %}
  {% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
  {% if player.game_id == game.game_id and player.team_id == away.team_id %}
  {% assign twopt_pts = player.twopmk | times:2 %}
  {% assign thrpt_pts = player.thrpmk | times:3 %}
  <tr>
      <td><a href="/players/{{player.player_id}}">{{player.player_name}}</a></td>
      <td>{{twopt_pts | plus: thrpt_pts | plus: player.ftmk }}</td>
      <td>{{player.reb}}</td>
      <td>{{player.ast}}</td>
      <td>{{player.stl}}</td>
      <td>{{player.blk}}</td>
      <td>{{player.twopmk | plus: player.thrpmk}}-{{player.twopms | plus: player.thrpms | plus: player.twopmk | plus: player.thrpmk}}</td>
      <td>{{player.thrpmk}}-{{player.thrpms | plus: player.thrpmk}}</td>
      <td>{{player.ftmk}}-{{player.ftms | plus: player.ftmk}}</td>
      {% assign pts_total = pts_total | plus: twopt_pts | plus: thrpt_pts | plus: player.ftmk  %}
      {% assign reb_total = reb_total | plus: player.reb %}
      {% assign ast_total = ast_total | plus: player.ast %}
      {% assign stl_total = stl_total | plus: player.stl %}
      {% assign blk_total = blk_total | plus: player.blk %}
      {% assign fgmk_total = fgmk_total | plus: player.twopmk | plus: player.thrpmk %}
      {% assign fgms_total = fgms_total | plus: player.twopms | plus: player.thrpms %}
      {% assign thrpmk_total = thrpmk_total | plus: player.thrpmk %}
      {% assign thrpms_total = thrpms_total | plus: player.thrpms %}
      {% assign ftmk_total = ftmk_total | plus: player.ftmk %}
      {% assign ftms_total = ftms_total | plus: player.ftms %}
   </tr>
  {% endif %}
  {% endfor %}
  <tfoot style="text-align: center;">
    <tr>
        <th>Team Total</th>
        <th>{{pts_total}}</th>
        <th>{{reb_total}}</th>
        <th>{{ast_total}}</th>
        <th>{{stl_total}}</th>
        <th>{{blk_total}}</th>
        <th>{{fgmk_total}}-{{fgms_total| plus: fgmk_total }}</th>
        <th>{{thrpmk_total}}-{{thrpms_total| plus: thrpmk_total }}</th>
        <th>{{ftmk_total}}-{{ftms_total| plus: ftmk_total }}</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        {% assign fg_total = fgmk_total | plus: fgms_total %}
        <th>{{100.0 | times: fgmk_total | divided_by: fg_total | round: 1 }} %</th>
        {% assign thrpt_total = thrpmk_total | plus: thrpms_total %}
        <th>{{100.0 | times: thrpmk_total | divided_by: thrpt_total | round: 1 }} %</th>
        {% assign ft_total = ftmk_total | plus: ftms_total %}
        {% if ft_total == 0 %}
        <th>-- %</th>
        {% else %}
        <th>{{100.0 | times: ftmk_total | divided_by: ft_total | round: 1 }}%</th>
        {% endif %}
    </tr>
  </tfoot>
  </tbody>
</table>
<br>
<div style="display: flex; justify-content: center; align-items: center;">
  <button type="button" onclick="window.history.back()">Go Back</button>
</div>