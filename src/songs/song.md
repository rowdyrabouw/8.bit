---
layout: default.liquid
pagination:
  data: songs
  size: 1
  alias: song
permalink: "songs/{{ song.id }}/"
---

# 8bit MusiQuiz

<div class="hide">{{ song }}</div>

<audio id="audio8bit" controls class="hide">
  <source src="/assets/audio/8bit/{{song.file}}.mp3" type="audio/mpeg">
</audio>

<audio id="audioOriginal" controls class="hide">
  <source src="/assets/audio/original/{{song.file}}.mp3" type="audio/mpeg">
</audio>

<div class="buttons">
<button id="btnAudio8bit" class="btn">Play 8bit song</button>
<button id="btnAudioOriginal" class="btn">Play original song</button>
<button id="btnShowDetails" class="btn">Show song details</button>
</div>

<div id="answer" class="answer hide">

## {{ song.artist }} - {{ song.title }}

<video id="video8bit" width="500" height="500" loop>
  <source src="/assets/video/{{song.file}}.mp4" type="video/mp4">
</video>
</div>

<nav class="nav">
{%- if song.id > 1 %}
<a href="/songs/{{ song.id | | minus: 1 }}/" class="btn">Previous</a>
{%- endif %}
{%- if song.id < 16 %}
<a href="/songs/{{ song.id | | plus: 1 }}/" class="btn">Next</a>
{%- endif %}
</nav>
