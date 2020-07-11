---
title:  Quarterfinal 1
style:  tabs        # defines body main class
layout: default
datatable: true
---

{% assign qf1 = site.data.playoff_matches.qf1_1 %}
{% assign qf2 = site.data.playoff_matches.qf1_2 %}
{% assign qf3 = site.data.playoff_matches.qf1_3 %}
{% if true %}
<div>
	<h2> Quarterfinals: Fire Nation vs Team Avatar</h2>
	<h3> Score: TFN 1 - 2 AVT </h3>
	<input type="radio" name="tabs" id="tab1" checked />
	<label for="tab1">Game 1</label>
	<input type="radio" name="tabs" id="tab2" />
	<label for="tab2">Game 2</label>
	{% if qf3.needed == "needed" %}
	<input type="radio" name="tabs" id="tab3" />
	<label for="tab3">Game 3</label>
	{% endif %}
	<input type="radio" name="tabs" id="tab4" />
	<label for="tab4">Series</label>
	<div class="tab content1">
		{% if qf1.complete != "complete" %}
		<h2> Match Information: </h2>
		<p> <b>Time:</b> {{qf1.time}} </p>
		<p> <b>Map:</b> {{qf1.map}} </p>
		<p> <b>Team:</b> {{qf1.home_team}} </p>
		<p> <b>Team:</b> {{qf1.away_team}} </p>
		{% else %}
		<h3> Map: {{qf1.map}} </h3>
		<br>
		<h2> {{qf1.home_team}} - {{qf1.home_rounds}} </h2>
		<table style="width:100%">
		  <tr>
		    <th>Player</th>
		    <th>Agent</th>
		    <th>Combat Score</th>
		    <th>K/D/A</th>
		    <th>Econ Rating</th>
		    <th>First Bloods</th>
		    <th>Plants</th>
		    <th>Defuses</th>
		  </tr>
		  {% for player in qf1.home_members %}
		  <tr>
		    <td>{{player.ign}}</td>
		    <td>{{player.agt}}</td>
		    <td>{{player.cs}}</td>
		    <td>{{player.k}}/{{player.d}}/{{player.a}}</td>
		    <td>{{player.er}}</td>
		    <td>{{player.fb}}</td>
		    <td>{{player.p}}</td>
		    <td>{{player.df}}</td>
		  </tr>
		  {% endfor %}
		</table>
		<br>
		<h2> {{qf1.away_team}} - {{qf1.away_rounds}} </h2>
		<table style="width:100%">
		  <tr>
		    <th>Player</th>
		    <th>Agent</th>
		    <th>Combat Score</th>
		    <th>K/D/A</th>
		    <th>Econ Rating</th>
		    <th>First Bloods</th>
		    <th>Plants</th>
		    <th>Defuses</th>
		  </tr>
		  {% for player in qf1.away_members %}
		  <tr>
		    <td>{{player.ign}}</td>
		    <td>{{player.agt}}</td>
		    <td>{{player.cs}}</td>
		    <td>{{player.k}}/{{player.d}}/{{player.a}}</td>
		    <td>{{player.er}}</td>
		    <td>{{player.fb}}</td>
		    <td>{{player.p}}</td>
		    <td>{{player.df}}</td>
		  </tr>
		  {% endfor %}
		</table>
		{% endif %}
	</div>
	<div class="tab content2">
		{% if qf2.complete != "complete" %}
		<h2> Match Information: </h2>
		<p> <b>Time:</b> {{qf2.time}} </p>
		<p> <b>Map:</b> {{qf2.map}} </p>
		<p> <b>Team:</b> {{qf2.home_team}} </p>
		<p> <b>Team:</b> {{qf2.away_team}} </p>
		{% else %}
		<h3> Map: {{qf2.map}} </h3>
		<br>
		<h2> {{qf2.home_team}} - {{qf2.home_rounds}} </h2>
		<table style="width:100%">
		  <tr>
		    <th>Player</th>
		    <th>Agent</th>
		    <th>Combat Score</th>
		    <th>K/D/A</th>
		    <th>Econ Rating</th>
		    <th>First Bloods</th>
		    <th>Plants</th>
		    <th>Defuses</th>
		  </tr>
		  {% for player in qf2.home_members %}
		  <tr>
		    <td>{{player.ign}}</td>
		    <td>{{player.agt}}</td>
		    <td>{{player.cs}}</td>
		    <td>{{player.k}}/{{player.d}}/{{player.a}}</td>
		    <td>{{player.er}}</td>
		    <td>{{player.fb}}</td>
		    <td>{{player.p}}</td>
		    <td>{{player.df}}</td>
		  </tr>
		  {% endfor %}
		</table>
		<br>
		<h2> {{qf2.away_team}} - {{qf2.away_rounds}} </h2>
		<table style="width:100%">
		  <tr>
		    <th>Player</th>
		    <th>Agent</th>
		    <th>Combat Score</th>
		    <th>K/D/A</th>
		    <th>Econ Rating</th>
		    <th>First Bloods</th>
		    <th>Plants</th>
		    <th>Defuses</th>
		  </tr>
		  {% for player in qf2.away_members %}
		  <tr>
		    <td>{{player.ign}}</td>
		    <td>{{player.agt}}</td>
		    <td>{{player.cs}}</td>
		    <td>{{player.k}}/{{player.d}}/{{player.a}}</td>
		    <td>{{player.er}}</td>
		    <td>{{player.fb}}</td>
		    <td>{{player.p}}</td>
		    <td>{{player.df}}</td>
		  </tr>
		  {% endfor %}
		</table>
		{% endif %}
	</div>
	{% if qf3.needed == "needed" %}
	<div class="tab content3">
		{% if qf3.complete != "complete" %}
		<h2> Match Information: </h2>
		<p> <b>Time:</b> {{qf3.time}} </p>
		<p> <b>Map:</b> {{qf3.map}} </p>
		<p> <b>Team:</b> {{qf3.home_team}} </p>
		<p> <b>Team:</b> {{qf3.away_team}} </p>
		{% else %}
		<h3> Map: {{qf3.map}} </h3>
		<br>
		<h2> {{qf3.home_team}} - {{qf3.home_rounds}} </h2>
		<table style="width:100%">
		  <colgroup>
		    <col class="thirty" />
		    <col class="ten" />
		    <col class="twenty" />
		    <col class="ten" />
		    <col class="ten" />
		    <col class="ten" />
		    <col class="ten" />
		  </colgroup>
		  <tr>
		    <th>Player</th>
		    <th>Agent</th>
		    <th>Combat Score</th>
		    <th>K/D/A</th>
		    <th>Econ Rating</th>
		    <th>First Bloods</th>
		    <th>Plants</th>
		    <th>Defuses</th>
		  </tr>
		  {% for player in qf3.home_members %}
		  <tr>
		    <td>{{player.ign}}</td>
		    <td>{{player.agt}}</td>
		    <td>{{player.cs}}</td>
		    <td>{{player.k}}/{{player.d}}/{{player.a}}</td>
		    <td>{{player.er}}</td>
		    <td>{{player.fb}}</td>
		    <td>{{player.p}}</td>
		    <td>{{player.df}}</td>
		  </tr>
		  {% endfor %}
		</table>
		<br>
		<h2> {{qf3.away_team}} - {{qf3.away_rounds}} </h2>
		<table id="MyTable">
		  <tr>
		    <th>Player</th>
		    <th>Agent</th>
		    <th>Combat Score</th>
		    <th>K/D/A</th>
		    <th>Econ Rating</th>
		    <th>First Bloods</th>
		    <th>Plants</th>
		    <th>Defuses</th>
		  </tr>
		  {% for player in qf3.away_members %}
		  <tr>
		    <td>{{player.ign}}</td>
		    <td>{{player.agt}}</td>
		    <td>{{player.cs}}</td>
		    <td>{{player.k}}/{{player.d}}/{{player.a}}</td>
		    <td>{{player.er}}</td>
		    <td>{{player.fb}}</td>
		    <td>{{player.p}}</td>
		    <td>{{player.df}}</td>
		  </tr>
		  {% endfor %}
		</table>
		{% endif %}
	</div>
	<div class="tab content4">
		{% if qf1.complete != "complete" or qf2.complete != "complete" or qf3.complete != "complete" %}
		<h2> Match Information: </h2>
		<p> <b>Times:</b> {{qf1.time}} - {{qf3.time}} </p>
		<p> <b>Team:</b> {{qf3.home_team}} </p>
		<p> <b>Team:</b> {{qf3.away_team}} </p>
		{% else %}
		<h3> Maps: {{qf1.map}}, {{qf2.map}}, {{qf3.map}} </h3>
		<br>
		<h2> {{qf3.home_team}}</h2>
		<table id="myTable" class="display">
			<colgroup>
			    <col class="thirty"/>
			    <col class="ten"/>
			    <col class="twenty"/>
			    <col class="ten"/>
			    <col class="ten"/>
			    <col class="ten"/>
				<col class="ten"/>
			</colgroup>
				<tr>
				  	<th>Player</th>
				    <th>Avg. CS</th>
				    <th>K/D/A</th>
				    <th>Avg. ER</th>
				    <th>First Bloods</th>
				    <th>Plants</th>
				    <th>Defuses</th>
				</tr>
		    {% for player in qf1.home_members %}
		    {% assign player_name = player.ign %}
			    {% for player2 in qf2.home_members %}
			  		{% if player2.ign contains player_name %}
			  			{% assign g2_cs = player2.cs %}
			  			{% assign g2_k = player2.k %}
			  			{% assign g2_d = player2.d %}
			  			{% assign g2_a = player2.a %}
			  			{% assign g2_er = player2.er %}
			  			{% assign g2_fb = player2.fb %}
			  			{% assign g2_p = player2.p %}
			  			{% assign g2_df = player2.df %}
			  		{% endif %}
			    {% endfor %}
			    {% if qf3.needed ==  "needed" %}
				    {% for player3 in qf3.home_members %}
				  		{% if player3.ign contains player_name %}
				  			{% assign g3_cs = player3.cs %}
				  			{% assign g3_k = player3.k %}
				  			{% assign g3_d = player3.d %}
				  			{% assign g3_a = player3.a %}
				  			{% assign g3_er = player3.er %}
				  			{% assign g3_fb = player3.fb %}
				  			{% assign g3_p = player3.p %}
				  			{% assign g3_df = player3.df %}
				  		{% endif %}
				    {% endfor %}
					<tr>
						<td>{{player.ign}}</td>
						<td>{{player.cs | plus: g2_cs | plus: g3_cs | divided_by: 3}}</td>
						<td>{{player.k | plus: g2_k | plus: g3_k }}/{{player.d | plus: g2_d | plus: g3_d }}/{{player.a | plus: g2_a | plus: g3_a }}</td>
						<td>{{player.er | plus: g2_er | plus: g3_er | divided_by: 3}}</td>
						<td>{{player.fb | plus: g2_fb | plus: g3_fb }}</td>
						<td>{{player.p | plus: g2_p | plus: g3_p}}</td>
						<td>{{player.df | plus: g2_df | plus: g3_df }}</td>
					</tr>
				{% else %}
					<tr>
					    <td>{{player.ign}}</td>
					    <td>{{player.cs | plus: g2_cs | divided_by: 2}}</td>
					    <td>{{player.k | plus: g2_k  }}/{{player.d | plus: g2_d }}/{{player.a | plus: g2_a }}</td>
					    <td>{{player.er | plus: g2_er | divided_by: 2}}</td>
					    <td>{{player.fb | plus: g2_fb }}</td>
					    <td>{{player.p | plus: g2_p }}</td>
					    <td>{{player.df | plus: g2_df }}</td>
					</tr>
				{% endif %}
			{% endfor %}
		</table>
		<br>
		<h2> {{qf3.away_team}} </h2>
		<table id="myTable" class="display">
			<colgroup>
			    <col class="thirty"/>
			    <col class="ten"/>
			    <col class="twenty"/>
			    <col class="ten"/>
			    <col class="ten"/>
			    <col class="ten"/>
			    <col class="ten"/>
			</colgroup>
				<tr>
				    <th>Player</th>
				    <th>Avg. CS</th>
				    <th>K/D/A</th>
				    <th>Avg. ER</th>
				    <th>First Bloods</th>
				    <th>Plants</th>
				    <th>Defuses</th>
				</tr>
			{% for player in qf1.away_members %}
			{% assign player_name = player.ign %}
			    {% for player2 in qf2.away_members %}
			  		{% if player2.ign contains player_name %}
			  			{% assign g2_cs = player2.cs %}
			  			{% assign g2_k = player2.k %}
			  			{% assign g2_d = player2.d %}
			  			{% assign g2_a = player2.a %}
			  			{% assign g2_er = player2.er %}
			  			{% assign g2_fb = player2.fb %}
			  			{% assign g2_p = player2.p %}
			  			{% assign g2_df = player2.df %}
			  		{% endif %}
				{% endfor %}
			  	{% if qf3.needed ==  "needed" %}
			  	{% for player3 in qf3.away_members %}
			  		{% if player3.ign contains player_name %}
			  			{% assign g3_cs = player3.cs %}
			  			{% assign g3_k = player3.k %}
			  			{% assign g3_d = player3.d %}
			  			{% assign g3_a = player3.a %}
			  			{% assign g3_er = player3.er %}
			  			{% assign g3_fb = player3.fb %}
			  			{% assign g3_p = player3.p %}
			  			{% assign g3_df = player3.df %}
			  		{% endif %}
			  	{% endfor %}
				<tr>
				    <td>{{player.ign}}</td>
				    <td>{{player.cs | plus: g2_cs | plus: g3_cs | divided_by: 3}}</td>
				    <td>{{player.k | plus: g2_k | plus: g3_k }}/{{player.d | plus: g2_d | plus: g3_d }}/{{player.a | plus: g2_a | plus: g3_a }}</td>
				    <td>{{player.er | plus: g2_er | plus: g3_er | divided_by: 3}}</td>
				    <td>{{player.fb | plus: g2_fb | plus: g3_fb }}</td>
				    <td>{{player.p | plus: g2_p | plus: g3_p}}</td>
				    <td>{{player.df | plus: g2_df | plus: g3_df }}</td>
				</tr>
				{% else %}
				<tr>
				    <td>{{player.ign}}</td>
				    <td>{{player.cs | plus: g2_cs | divided_by: 2}}</td>
				    <td>{{player.k | plus: g2_k  }}/{{player.d | plus: g2_d }}/{{player.a | plus: g2_a }}</td>
				    <td>{{player.er | plus: g2_er | divided_by: 2}}</td>
				    <td>{{player.fb | plus: g2_fb }}</td>
				    <td>{{player.p | plus: g2_p }}</td>
				    <td>{{player.df | plus: g2_df }}</td>
				</tr>
				{% endif %}
				{% endfor %}
		</table>
		{% endif %}
	</div>
	{% endif %}
</div>

{% else %}
<h3> Playoffs have not started yet! </h3>
<p> Playoff Information will be available once all teams have registered and the group stages have concluded. </p>
<p> To register for the tournament, use our signup page: <a href="/signup">Sign Up</a> </p>
<form>
<input type="button" value="Go back!" onclick="history.back()">
</form>
{% endif %}  