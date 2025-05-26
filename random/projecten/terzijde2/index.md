---
layout: default
title: "Projecten"
page_title: "Dit project"
intro: |
  <p>Je loopt door het huis zonder doel...</p>
  <p>Op tafel ligt een notitieboekje...</p>
---

{% assign data = site.data.projecten %}

<!-- Your original header/intro -->
<div class="top">
  <h1>{{ data.page_title }}</h1>
  <div class="intro">
    {{ data.intro }}
  </div>
</div>

<!-- Your custom section -->
{{ data.main_content }}

<!-- Project list -->
<ul class="project-list">
  {% for project in data.projects %}
    <li><a href="{{ project.url }}">{{ project.name }}</a></li>
  {% endfor %}
</ul>