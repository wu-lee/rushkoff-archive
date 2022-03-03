---
layout: default
---
<h1>{{ page.title }}</h1>
<p><em>Published in {{ page.publication.title }} on {{ page.date | date: "%-d %B %Y" }}</em></p>

{% if page.img %}
<img src="{{ page.img }}" alt="article image">
{% endif %}

{{ content }}

