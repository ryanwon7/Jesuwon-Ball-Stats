---
archetype: tournament
type: stats
year: 2020
style: tabs       # defines body main class
script: stats
layout: default
datatable: true
---
<h2> {{page.year}} Season Leaders </h2>
<br>
<h4> Regular Season Average Leaders </h4>
<table class="display2">
  <colgroup>
      <col class="twenty"/>
      <col class="twenty"/>
      <col class="twenty"/>
      <col class="twenty"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Stat</th>
        <th>Leader</th>
        <th>2nd</th>
        <th>3rd</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
  	<tr>
      <td><b>Points</b> Per Game</td>
  		<td><b>Daniel Ro, 14.8 PPG</b></td>
      <td>Abe Park, 14.2 PPG</td>
  		<td>Ryan Won, 12.2 PPG</td>
  	</tr>
    <tr>
      <td><b>Rebounds</b> Per Game</td>
      <td><b>Song Seng Geu, 8.8 RPG</b></td>
      <td>Kyle Ju, 8.2 RPG</td>
      <td>Daniel Ro, 7.5 RPG</td>
    </tr>
    <tr>
      <td><b>Assists</b> Per Game</td>
      <td><b>Abe Park, 3.2 APG</b></td>
      <td>Song Seng Geu, 3.0 APG</td>
      <td>Daniel Moon, 2.4 APG</td>
    </tr>
    <tr>
      <td><b>Steals</b> Per Game</td>
      <td><b>Abe Park, 3.0 SPG</b></td>
      <td>Joseph Jung, 2.6 SPG</td>
      <td>Dan Kim, 2.6 SPG</td>
    </tr>
    <tr>
      <td><b>Blocks</b> Per Game</td>
      <td><b>Eugene Kim, 1.0 BPG</b></td>
      <td>Caleb Jung, 1.0 BPG</td>
      <td>Bryce Kim, 1.0 BPG</td>
    </tr>
  </tbody>
</table>
<br>
<h4> Regular Season Single Game Leaders </h4>
<table class="display2">
  <colgroup>
      <col class="twenty"/>
      <col class="twenty"/>
      <col class="twenty"/>
      <col class="twenty"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Stat</th>
        <th>Leader</th>
        <th>2nd</th>
        <th>3rd</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td><b>Points</b></td>
      <td><b>Daniel Ro, <a href="/{{page.year}}/games/game14">21 PTS</a></b></td>
      <td>Abe Park, <a href="/{{page.year}}/games/game7">19 PTS</a></td>
      <td>Abe Park, <a href="/{{page.year}}/games/game15">19 PTS</a></td>
    </tr>
    <tr>
      <td><b>Rebounds</b></td>
      <td><b>Sahn Yoon, <a href="/{{page.year}}/games/game5">14 REB</a></b></td>
      <td>Ryan Lee, <a href="/{{page.year}}/games/game8">13 REB</a></td>
      <td>Daniel Ro, <a href="/{{page.year}}/games/game14">11 REB</a></td>
    </tr>
    <tr>
      <td><b>Assists</b></td>
      <td><b>Jaiyup Yoo, <a href="/{{page.year}}/games/game7">5 AST</a></b></td>
      <td>Song Seng Geu, <a href="/{{page.year}}/games/game10">5 AST</a></td>
      <td>Abe Park, <a href="/{{page.year}}/games/game11">5 AST</a></td>
    </tr>
    <tr>
      <td><b>Steals</b></td>
      <td><b>Abe Park, <a href="/{{page.year}}/games/game15">5 STL</a></b></td>
      <td>Elijah Park, <a href="/{{page.year}}/games/game4">4 STL</a></td>
      <td>Dan Kim, <a href="/{{page.year}}/games/game1">5 4TL</a></td>
    </tr>
    <tr>
      <td><b>Blocks</b></td>
      <td><b>Caleb Jung, <a href="/{{page.year}}/games/game6">3 BLK</a></b></td>
      <td>Eugene Kim, <a href="/{{page.year}}/games/game13">3 BLK</a></td>
      <td>Sahn Yoon, <a href="/{{page.year}}/games/game14">3 BLK</a></td>
    </tr>
  </tbody>
</table>