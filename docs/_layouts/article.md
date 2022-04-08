---
layout: default
---
<h1 class="title">{{ page.title }}</h1>
<h2 class="subtitle">{{ page.subtitle }}</h2>
<p class="info">
  <em>Published in {{ page.publication.title }} on {{ page.date | date: "%-d %B %Y" }}</em>
</p>

{% if page.img %}
<img class="article" src="{{ page.img }}" alt="article image">
{% endif %}

<div class="content">
{{ content }}
</div>
