layout: page
title: "Group Stages"
permalink: /groups/

<h1>Group Stages</h1>
<p>Click the group name to view the standings, schedule, and results for each group.</p>
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

<br>
<h2><a href="/groupc/home">Group C</a></h2>
{% assign c1 = site.data.c1 %}
{% assign c2 = site.data.c2 %}
{% assign c3 = site.data.c3 %}
{% assign c4 = site.data.c4 %}
<table style="width:100%">
  <tr>
    <th>Team</th>
    <th>Team Members</th>
    <th>Team Information</th>
  </tr>
  <tr>
    <td>{{c1.teamname}}</td>
    <td>{% for member in c1.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{c2.teamname}}</td>
    <td>{% for member in c2.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{c3.teamname}}</td>
    <td>{% for member in c3.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{c4.teamname}}</td>
    <td>{% for member in c4.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
</table>

<br>
<h2><a href="/groupa/home">Group A</a></h2>
{% assign d1 = site.data.d1 %}
{% assign d2 = site.data.d2 %}
{% assign d3 = site.data.d3 %}
{% assign d4 = site.data.d4 %}
<table style="width:100%">
  <tr>
    <th>Team</th>
    <th>Team Members</th>
    <th>Team Information</th>
  </tr>
  <tr>
    <td>{{d1.teamname}}</td>
    <td>{% for member in d1.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{d2.teamname}}</td>
    <td>{% for member in d2.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{d3.teamname}}</td>
    <td>{% for member in d3.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
  <tr>
    <td>{{d4.teamname}}</td>
    <td>{% for member in d4.members %}{{member.ign}}, {% endfor %}</td>
    <td>Team Page</td>
  </tr>
</table>