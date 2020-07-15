---
title:  Groups
style:  tabs       # defines body main class
script: groups
layout: default
datatable: true
---

<h1>Group Stages</h1>
<p>Click the group name to view the standings, schedule, and results for each group.</p>
{% if true %}
<h2><a href="/groupa/home">Group A</a></h2>
{% assign a1 = site.data.a1 %}
{% assign a2 = site.data.a2 %}
{% assign a3 = site.data.a3 %}
{% assign a4 = site.data.a4 %}
<table class="display">
  <colgroup>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="forty"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
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
<h2><a href="/groupb/home">Group B</a></h2>
{% assign b1 = site.data.b1 %}
{% assign b2 = site.data.b2 %}
{% assign b3 = site.data.b3 %}
{% assign b4 = site.data.b4 %}
<table class="display">
  <colgroup>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="forty"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
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
      <td>{{b1.teamname}}</td>
      <td>{{b1.tag}}</td>
      <td>{% for member in b1.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b1.grp_win}}</td>
      <td>{{b1.grp_loss}}</td>
      <td>{{b1.grp_g1_rd_w | plus:b1.grp_g2_rd_w | plus:b1.grp_g3_rd_w | minus:b1.grp_g1_rd_l | minus:b1.grp_g2_rd_l | minus:b1.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{b2.teamname}}</td>
      <td>{{b2.tag}}</td>
      <td>{% for member in b2.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b2.grp_win}}</td>
      <td>{{b2.grp_loss}}</td>
      <td>{{b2.grp_g1_rd_w | plus:b2.grp_g2_rd_w | plus:b2.grp_g3_rd_w | minus:b2.grp_g1_rd_l | minus:b2.grp_g2_rd_l | minus:b2.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{b3.teamname}}</td>
      <td>{{b3.tag}}</td>
      <td>{% for member in b3.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b3.grp_win}}</td>
      <td>{{b3.grp_loss}}</td>
      <td>{{b3.grp_g1_rd_w | plus:b3.grp_g2_rd_w | plus:b3.grp_g3_rd_w | minus:b3.grp_g1_rd_l | minus:b3.grp_g2_rd_l | minus:b3.grp_g3_rd_l }}</td>
    </tr>
    <tr>
      <td>{{b4.teamname}}</td>
      <td>{{b4.tag}}</td>
      <td>{% for member in b4.members %}{{member.ign}}, {% endfor %}</td>
      <td>{{b4.grp_win}}</td>
      <td>{{b4.grp_loss}}</td>
      <td>{{b4.grp_g1_rd_w | plus:b4.grp_g2_rd_w | plus:b4.grp_g3_rd_w | minus:b4.grp_g1_rd_l | minus:b4.grp_g2_rd_l | minus:b4.grp_g3_rd_l }}</td>
    </tr>
  </tbody>
</table>
 {% else %}
 <h3> Group Stages have not started yet! </h3>

 <p> Group Information will be available once all teams have registered. </p>
 <p> To register for the tournament, use our signup page: <a href="/signup">Sign Up</a> </p>
 {% endif %}  