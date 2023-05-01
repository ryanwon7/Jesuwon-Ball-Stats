---
archetype: tournament
type: teams
year: 2023
id: 5
style: tabs       # defines body main class
script: tables
layout: default
datatable: true
---
{% for team_hash in site.data.seasons.twentythree.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == page.id %}
<h2> {{page.year}} Season - {{team.name}} </h2>
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
<div>
	<ul class="nav nav-tabs" role="tablist">
        <li class="active">
            <a href="#tab-table1" data-toggle="tab">Regular Season</a>
        </li>
        <li>
            <a href="#tab-table2" data-toggle="tab">Playoffs</a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="tab-table1">
			<table class="display3">
			  <colgroup>
			      <col class="nineteen"/>
			      <col class="nineteen"/>
			      <col class="nine"/>
			      <col class="nine"/>
			      <col class="nine"/>
			      <col class="nine"/>
			      <col class="nine"/>
			  </colgroup>
			  <thead>
			    <tr>
			      <th>Opponent</th>
			      <th>Date, Result</th>
			      <th>PTS</th>
			      <th>REB</th>
			      <th>AST</th>
			      <th>STL</th>
			      <th>BLK</th>
			    </tr>
			  </thead>
			  <tbody>
				{% assign 3pts_pttotal = 0 %}
				{% assign 2pts_pttotal = 0 %}
				{% assign ovr_pts_total = 0 %}
				{% assign ovr_ast_total = 0 %}
				{% assign ovr_reb_total = 0 %}
				{% assign ovr_stl_total = 0 %}
				{% assign ovr_blk_total = 0 %}
				{% assign ovr_gp = 0 %}
			    {% for game in site.data.seasons.twentythree.games %}
				    {% assign match = game[1] %}
					{% if match.stage == "reg" %}
					{% if match.home_team_id == page.id %}
					{% if match.fin == "yes"  %}
					{% assign ovr_gp = ovr_gp | plus: 1 %}
					{% endif %}
					{% assign opp = match.away_team_name %}
					{% assign opp_data = site.data.seasons.twentythree.teams[opp] %}
				    <tr>
				      <td>vs <a href="/{{page.year}}/teams/team{{opp_data.team_id}}">{{opp_data.name}}</a></td>
				      <td>{{match.short_date}}, 
					  {% if match.home_score > match.away_score %}
				      <b>W</b>, {{match.home_score}} - {{match.away_score}} </td>
				      {% elsif match.home_score < match.away_score %} %}
				      <b>L</b>, {{match.home_score}} - {{match.away_score}} </td>
				      {% else %}
				      <b>TBD</b> </td>
				      {% endif %}
					{% assign pts_total = 0 %}
					{% assign twoptmk_total = 0 %}
					{% assign twoptms_total = 0 %}
					{% assign thrptmk_total = 0 %}
					{% assign thrptms_total = 0 %}
					{% assign ftmk_total = 0 %}
					{% assign ftms_total = 0 %}
					{% assign ast_total = 0 %}
					{% assign reb_total = 0 %}
					{% assign stl_total = 0 %}
					{% assign blk_total = 0 %}
					{% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
					{% if player.game_id == match.game_id and player.team_id == page.id %}
				    {% assign twoptmk_total = twoptmk_total | plus: player.twopmk %}
				    {% assign twoptms_total = twoptms_total | plus: player.twopms %}
				    {% assign thrptmk_total = thrptmk_total | plus: player.thrpmk %}
				    {% assign thrptms_total = thrptms_total | plus: player.thrpms %}
				    {% assign ftmk_total = ftmk_total | plus: player.ftmk %}
				    {% assign ftms_total = ftms_total | plus: player.ftms %}
				    {% assign ast_total = ast_total | plus: player.ast %}
				    {% assign reb_total = reb_total | plus: player.reb %}
				    {% assign stl_total = stl_total | plus: player.stl %}
				    {% assign blk_total = blk_total | plus: player.blk %}
					{% endif %}
					{% endfor %}
					{% assign thrpts_pttotal = thrptmk_total | times: 3 %}
					{% assign twopts_pttotal = twoptmk_total | times: 2 %}
					{% assign pts_total = thrpts_pttotal | plus: twopts_pttotal | plus: ftmk_total %}
				    {% assign ovr_pts_total = ovr_pts_total | plus: pts_total %}
				    {% assign ovr_ast_total = ovr_ast_total | plus: ast_total %}
				    {% assign ovr_reb_total = ovr_reb_total | plus: reb_total %}
				    {% assign ovr_stl_total = ovr_stl_total | plus: stl_total %}
				    {% assign ovr_blk_total = ovr_blk_total | plus:blk_total %}
						<td style="text-align: center;">{{pts_total}}</td>
						<td style="text-align: center;">{{reb_total}}</td>
						<td style="text-align: center;">{{ast_total}}</td>
						<td style="text-align: center;">{{stl_total}}</td>
						<td style="text-align: center;">{{blk_total}}</td>
					</tr>
					{% elsif match.away_team_id == page.id %}
					{% if match.fin == "yes"  %}
					{% assign ovr_gp = ovr_gp | plus: 1 %}
					{% endif %}
					{% assign opp = match.home_team_name %}
					{% assign opp_data = site.data.seasons.twentythree.teams[opp] %}
				    <tr>
				      <td>@ <a href="/{{page.year}}/teams/team{{opp_data.team_id}}">{{opp_data.name}}</a></td>
				      <td>{{match.short_date}}, 
					  {% if match.home_score > match.away_score %}
				      <b>L</b>,  {{match.home_score}} - {{match.away_score}} </td>
				      {% elsif match.home_score < match.away_score %}
				      <b>W</b>, {{match.home_score}} - {{match.away_score}} </td>
				      {% else %}
				      <b>TBD</b> </td>
				      {% endif %}
					{% assign pts_total = 0 %}
					{% assign twoptmk_total = 0 %}
					{% assign twoptms_total = 0 %}
					{% assign thrptmk_total = 0 %}
					{% assign thrptms_total = 0 %}
					{% assign ftmk_total = 0 %}
					{% assign ftms_total = 0 %}
					{% assign ast_total = 0 %}
					{% assign reb_total = 0 %}
					{% assign stl_total = 0 %}
					{% assign blk_total = 0 %}
					{% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
					{% if player.game_id == match.game_id and player.team_id == page.id %}
				    {% assign twoptmk_total = twoptmk_total | plus: player.twopmk %}
				    {% assign twoptms_total = twoptms_total | plus: player.twopms %}
				    {% assign thrptmk_total = thrptmk_total | plus: player.thrpmk %}
				    {% assign thrptms_total = thrptms_total | plus: player.thrpms %}
				    {% assign ftmk_total = ftmk_total | plus: player.ftmk %}
				    {% assign ftms_total = ftms_total | plus: player.ftms %}
				    {% assign ast_total = ast_total | plus: player.ast %}
				    {% assign reb_total = reb_total | plus: player.reb %}
				    {% assign stl_total = stl_total | plus: player.stl %}
				    {% assign blk_total = blk_total | plus: player.blk %}
					{% endif %}
					{% endfor %}
					{% assign thrpts_pttotal = thrptmk_total | times: 3 %}
					{% assign twopts_pttotal = twoptmk_total | times: 2 %}
					{% assign pts_total = thrpts_pttotal | plus: twopts_pttotal | plus: ftmk_total %}
				    {% assign ovr_pts_total = ovr_pts_total | plus: pts_total %}
				    {% assign ovr_ast_total = ovr_ast_total | plus: ast_total %}
				    {% assign ovr_reb_total = ovr_reb_total | plus: reb_total %}
				    {% assign ovr_stl_total = ovr_stl_total | plus: stl_total %}
				    {% assign ovr_blk_total = ovr_blk_total | plus:blk_total %}
						<td style="text-align: center;">{{pts_total}}</td>
						<td style="text-align: center;">{{reb_total}}</td>
						<td style="text-align: center;">{{ast_total}}</td>
						<td style="text-align: center;">{{stl_total}}</td>
						<td style="text-align: center;">{{blk_total}}</td>
					</tr>
				    {% endif %}
					{% else %}
				    {% endif %}
			    {% endfor %}
			  </tbody>
				<tfoot style="text-align: center;">
				<tr>
				    <th>Regular Season Average</th>
				    <th></th>
				    <th>{{ovr_pts_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_reb_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_ast_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_stl_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_blk_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				</tr>
				</tfoot>
			 </table>
		</div>
        <div class="tab-pane" id="tab-table2">
			<table class="display3">
			  <colgroup>
			      <col class="nineteen"/>
			      <col class="nineteen"/>
			      <col class="nine"/>
			      <col class="nine"/>
			      <col class="nine"/>
			      <col class="nine"/>
			      <col class="nine"/>
			  </colgroup>
			  <thead>
			    <tr>
			      <th>Opponent</th>
			      <th>Date, Result</th>
			      <th>PTS</th>
			      <th>AST</th>
			      <th>REB</th>
			      <th>STL</th>
			      <th>BLK</th>
			    </tr>
			  </thead>
			  <tbody>
				{% assign ovr_pts_total = 0 %}
				{% assign ovr_ast_total = 0 %}
				{% assign ovr_reb_total = 0 %}
				{% assign ovr_stl_total = 0 %}
				{% assign ovr_blk_total = 0 %}
				{% assign ovr_gp = 0 %}
			    {% for game in site.data.seasons.twentythree.games %}
				    {% assign match = game[1] %}
					{% if match.stage != "reg" %}
					{% if match.home_team_id == page.id %}
					{% assign ovr_gp = ovr_gp | plus: 1 %}
					{% assign opp = match.away_team_name %}
					{% assign opp_data = site.data.seasons.twentythree.teams[opp] %}
				    <tr>
				      <td>vs <a href="/{{page.year}}/teams/team{{opp_data.team_id}}">{{opp_data.name}}</a></td>
					  {% if match.home_score > match.away_score %}
				      <td>{{match.short_date}}, <b>W</b>, {{match.home_score}} - {{match.away_score}} </td>
				      {% else %}
				      <td>{{match.short_date}}, <b>L</b>, {{match.home_score}} - {{match.away_score}} </td>
				      {% endif %}
					{% assign pts_total = 0 %}
					{% assign ast_total = 0 %}
					{% assign reb_total = 0 %}
					{% assign stl_total = 0 %}
					{% assign blk_total = 0 %}
					{% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
					{% if player.game_id == match.game_id and player.team_id == page.id %}
				    {% assign pts_total = pts_total | plus: player.pts %}
				    {% assign ast_total = ast_total | plus: player.ast %}
				    {% assign reb_total = reb_total | plus: player.reb %}
				    {% assign stl_total = stl_total | plus: player.stl %}
				    {% assign blk_total = blk_total | plus: player.blk %}
					{% endif %}
					{% endfor %}
				    {% assign ovr_pts_total = ovr_pts_total | plus: pts_total %}
				    {% assign ovr_ast_total = ovr_ast_total | plus: ast_total %}
				    {% assign ovr_reb_total = ovr_reb_total | plus: reb_total %}
				    {% assign ovr_stl_total = ovr_stl_total | plus: stl_total %}
				    {% assign ovr_blk_total = ovr_blk_total | plus:blk_total %}
						<td style="text-align: center;">{{pts_total}}</td>
						<td style="text-align: center;">{{ast_total}}</td>
						<td style="text-align: center;">{{reb_total}}</td>
						<td style="text-align: center;">{{stl_total}}</td>
						<td style="text-align: center;">{{blk_total}}</td>
					</tr>
					{% elsif match.away_team_id == page.id %}
					{% assign ovr_gp = ovr_gp | plus: 1 %}
					{% assign opp = match.home_team_name %}
					{% assign opp_data = site.data.seasons.twentythree.teams[opp] %}
				    <tr>
				      <td>@ <a href="/{{page.year}}/teams/team{{opp_data.team_id}}">{{opp_data.name}}</a></td>
					  {% if match.home_score > match.away_score %}
				      <td>{{match.short_date}}, <b>L</b>,  {{match.home_score}} - {{match.away_score}} </td>
				      {% else %}
				      <td>{{match.short_date}}, <b>W</b>, {{match.home_score}} - {{match.away_score}} </td>
				      {% endif %}
					{% assign pts_total = 0 %}
					{% assign ast_total = 0 %}
					{% assign reb_total = 0 %}
					{% assign stl_total = 0 %}
					{% assign blk_total = 0 %}
					{% for player in site.data.seasons.twentythree.player_logs["gamelogs"].value %}
					{% if player.game_id == match.game_id and player.team_id == page.id %}
				    {% assign pts_total = pts_total | plus: player.pts %}
				    {% assign ast_total = ast_total | plus: player.ast %}
				    {% assign reb_total = reb_total | plus: player.reb %}
				    {% assign stl_total = stl_total | plus: player.stl %}
				    {% assign blk_total = blk_total | plus: player.blk %}
					{% endif %}
					{% endfor %}
				    {% assign ovr_pts_total = ovr_pts_total | plus: pts_total %}
				    {% assign ovr_ast_total = ovr_ast_total | plus: ast_total %}
				    {% assign ovr_reb_total = ovr_reb_total | plus: reb_total %}
				    {% assign ovr_stl_total = ovr_stl_total | plus: stl_total %}
				    {% assign ovr_blk_total = ovr_blk_total | plus:blk_total %}
						<td style="text-align: center;">{{pts_total}}</td>
						<td style="text-align: center;">{{ast_total}}</td>
						<td style="text-align: center;">{{reb_total}}</td>
						<td style="text-align: center;">{{stl_total}}</td>
						<td style="text-align: center;">{{blk_total}}</td>
					</tr>
				    {% endif %}
					{% else %}
				    {% endif %}
			    {% endfor %}
			  </tbody>
				<tfoot style="text-align: center;">
				<tr>
				    <th>Playoff Average</th>
				    <th></th>
				    <th>{{ovr_pts_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_ast_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_reb_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_stl_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				    <th>{{ovr_blk_total | times: 1.0 | divided_by: ovr_gp | round: 1}}</th>
				</tr>
				</tfoot>
			 </table>
		</div>
	</div>
</div>
<br>
{% endif %}
{% endfor %}