---
layout: page
title: Assignments
---

{% assign assignment_pages = site.pages | where_exp: "page", "page.path contains 'assignments/'" | where_exp: "page", "page.name != 'index.md'" | sort: "path" %}

{% for page in assignment_pages %}
- [{{ page.title | default: page.name | remove: '.md' }}]({{ page.url }})
{% endfor %}
