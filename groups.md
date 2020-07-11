
<h1>Group Stages</h1>
<p>Click the group name to view the standings, schedule, and results for each group.</p>
{% if true %}
<h2><a href="/groupa/home">Group A</a></h2>
{% assign a1 = site.data.a1 %}
{% assign a2 = site.data.a2 %}
{% assign a3 = site.data.a3 %}
{% assign a4 = site.data.a4 %}
<table style="width:100%">
  <tr>
    <th>Team</th>
    <th>Team Members</th>
    <th>Team Information</th>
  </tr>
  <tr>
    <td>{{a1.teamname}}</td>
    <td>{% for member in a1.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{a2.teamname}}</td>
    <td>{% for member in a2.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{a3.teamname}}</td>
    <td>{% for member in a3.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{a4.teamname}}</td>
    <td>{% for member in a4.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
</table>

<br>
<h2><a href="/groupb/home">Group B</a></h2>
{% assign b1 = site.data.b1 %}
{% assign b2 = site.data.b2 %}
{% assign b3 = site.data.b3 %}
{% assign b4 = site.data.b4 %}
<table style="width:100%">
  <tr>
    <th>Team</th>
    <th>Team Members</th>
    <th>Team Information</th>
  </tr>
  <tr>
    <td>{{b1.teamname}}</td>
    <td>{% for member in b1.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{b2.teamname}}</td>
    <td>{% for member in b2.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{b3.teamname}}</td>
    <td>{% for member in b3.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{b4.teamname}}</td>
    <td>{% for member in b4.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
</table>
 {% else %}
 <h3> Group Stages have not started yet! </h3>

 <p> Group Information will be available once all teams have registered. </p>
 <p> To register for the tournament, use our signup page: <a href="/signup">Sign Up</a> </p>
 {% endif %}  