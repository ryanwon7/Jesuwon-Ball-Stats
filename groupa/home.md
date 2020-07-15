---
title:  Group A
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
{% if true %}  
<h1>Group A</h1>
{% assign a1 = site.data.a1 %}
{% assign a2 = site.data.a2 %}
{% assign a3 = site.data.a3 %}
{% assign a4 = site.data.a4 %}

<h2>Standings</h2>
<table class="display">
  <colgroup>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="fiftyfive"/>
          <col class="five"/>
          <col class="five"/>
          <col class="five"/>
      </colgroup>
  <thead>
    <tr>
      <th>Team</th>
      <th>Tag</th>
      <th>Team Members</th>
      <th>Wins</th>
      <th>Loss</th>
      <th>Rds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{a1.teamname}}</td>
      <td>{{a1.tag}}</td>
      <td>{% for member in a1.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{a1.grp_win}}</td>
      <td>{{a1.grp_loss}}</td>
      <td>{{a1.grp_g1_rd_w | plus:a1.grp_g2_rd_w | plus:a1.grp_g3_rd_w | minus:a1.grp_g1_rd_l | minus:a1.grp_g2_rd_l | minus:a1.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{a2.teamname}}</td>
      <td>{{a2.tag}}</td>
      <td>{% for member in a2.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{a2.grp_win}}</td>
      <td>{{a2.grp_loss}}</td>
      <td>{{a2.grp_g1_rd_w | plus:a2.grp_g2_rd_w | plus:a2.grp_g3_rd_w | minus:a2.grp_g1_rd_l | minus:a2.grp_g2_rd_l | minus:a2.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{a3.teamname}}</td>
      <td>{{a3.tag}}</td>
      <td>{% for member in a3.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{a3.grp_win}}</td>
      <td>{{a3.grp_loss}}</td>
      <td>{{a3.grp_g1_rd_w | plus:a3.grp_g2_rd_w | plus:a3.grp_g3_rd_w | minus:a3.grp_g1_rd_l | minus:a3.grp_g2_rd_l | minus:a3.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{a4.teamname}}</td>
      <td>{{a4.tag}}</td>
      <td>{% for member in a4.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{a4.grp_win}}</td>
      <td>{{a4.grp_loss}}</td>
      <td>{{a4.grp_g1_rd_w | plus:a4.grp_g2_rd_w | plus:a4.grp_g3_rd_w | minus:a4.grp_g1_rd_l | minus:a4.grp_g2_rd_l | minus:a4.grp_g3_rd_l }}</td>
    </tr>
  </tbody>
</table>

<br>

<h2>Schedule</h2>
<table class="display2">
  <colgroup>
    <col class="thirtyy"/>
    <col class="twenty"/>
    <col class="ten"/>
    <col class="twenty"/>
    <col class="twenty"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Time</th>
      <th>Map</th>
      <th>Result</th>
      <th>Match Page</th>
    </tr>
  </thead>
  <tbody>
    {% for match_hash in site.data.a_matches %}
    {% assign match = match_hash[1] %}
    <tr>
      <td>{{match.home_team}} vs {{match.away_team}}</td>
      <td>{{match.time}}</td>
      <td>{{match.map}}</td>
      {% if match.complete == "complete" %}	
      <td>{{match.hometag}} {{match.home_rounds}}-{{match.away_rounds}} {{match.awaytag}} </td>
      {% else %}
      <td> Not Played Yet </td>
      {% endif %}
      <td><a href="/groupa/{{match.id}}">Match Stats</a></td>
    </tr>
    {% endfor %}
  </tbody>
 </table>
 {% else %}
 <h3> Group Stages have not started yet! </h3>

 <p> Group Information will be available once all teams have registered. </p>
 <p> To register for the tournament, use our signup page: <a href="/signup">Sign Up</a> </p>
<form>
 <input type="button" value="Go back!" onclick="history.back()">
</form>
 {% endif %}  