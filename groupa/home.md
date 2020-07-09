{% if nonesense %}  
<h1>Group A</h1>
{% assign a1 = site.data.a1 %}
{% assign a2 = site.data.a2 %}
{% assign a3 = site.data.a3 %}
{% assign a4 = site.data.a4 %}

<h2>Standings</h2>
<table style="width:100%">
  <tr>
    <th>Team</th>
    <th>Members</th>
    <th>Wins</th>
    <th>Losses</th>
  </tr>
  <tr>
    <td>{{a1.teamname}} ({{a1.tag}})</td>
    <td>{% for member in a1.members %}{{member.ign}}, {% endfor %}</td>
    <td>{{a1.grp_win}}</td>
    <td>{{a1.grp_loss}}</td>
  </tr>
  <tr>
    <td>{{a2.teamname}} ({{a2.tag}})</td>
    <td>{% for member in a2.members %}{{member.ign}}, {% endfor %}</td>
    <td>{{a2.grp_win}}</td>
    <td>{{a2.grp_loss}}</td>
  </tr>
  <tr>
    <td>{{a3.teamname}} ({{a3.tag}})</td>
    <td>{% for member in a3.members %}{{member.ign}}, {% endfor %}</td>
    <td>{{a3.grp_win}}</td>	
    <td>{{a3.grp_loss}}</td>
  </tr>
  <tr>
    <td>{{a4.teamname}} ({{a4.tag}})</td>
    <td>{% for member in a4.members %}{{member.ign}}, {% endfor %}</td>
    <td>{{a4.grp_win}}</td>
    <td>{{a4.grp_loss}}</td>
  </tr>
</table>

<br>

<h2>Schedule</h2>
<table style="width:100%">
  <tr>
    <th>Matchup</th>
    <th>Time</th>
    <th>Map</th>
    <th>Result</th>
    <th>Match Page</th>
  </tr>
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
 </table>
 {% else %}
 <h3> Group Stages have not started yet! </h3>

 <p> Group Information will be available once all teams have registered. </p>
 <p> To register for the tournament, use the following link: <a href="https://forms.gle/pVTRymbMVmpsKPtz6">Signup Link</a> </p>
<form>
 <input type="button" value="Go back!" onclick="history.back()">
</form>
 {% endif %}  