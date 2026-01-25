---
title: "Team"
layout: gridlay
sitemap: false
permalink: /team/
---

## Team

**We are looking for new members** [(see openings)]({{ site.baseurl }}/vacancies) **!**

## Faculty Advisor

{% for member in site.data.faculty_advisor %}

<div class="jumbotron">
  <div class="row">
    <div class="col-sm-2">
      <img src="{{ site.baseurl }}/images/{{ member.photo }}" width="100%" style="max-width:250px"/>
    </div>
    <div class="col-sm-9 col-xs-12">
      <h4>{{ member.name }}</h4>
      <i>{{ member.info }}</i><br>

      {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a>{% endif %}
      {% if member.email %} <a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a>{% endif %}

      {% if member.education %}
      <ul style="overflow: hidden">
        {% for item in member.education %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
      {% endif %}
    </div>
  </div>
</div>

{% endfor %}

## Board

<div class="jumbotron">
{% assign number_printed = 0 %}
{% for member in site.data.board %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
  <div class="row">
{% endif %}

    <div class="col-sm-2">
      <img src="{{ site.baseurl }}/images/{{ member.photo }}" width="100%" style="max-width:250px"/>
    </div>

    <div class="col-sm-4 col-xs-12">
      <h4>{{ member.name }}</h4>
      <i>{{ member.role }}</i><br>
      {% if member.info %}<span>{{ member.info }}</span><br>{% endif %}

      {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a>{% endif %}
      {% if member.email %} <a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a>{% endif %}
      {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>{% endif %}
    </div>

{% assign number_printed = number_printed | plus: 1 %}
{% if even_odd == 1 %}
  </div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
  </div>
{% endif %}
</div>

## Alumni

<div class="jumbotron">
{% for member in site.data.alumni %}
  <div class="row" style="margin-bottom: 20px;">
    <div class="col-sm-2">
      <img src="{{ site.baseurl }}/images/{{ member.photo }}" width="100%" style="max-width:250px"/>
    </div>
    <div class="col-sm-10 col-xs-12">
      <h4>{{ member.name }}</h4>
      <i>{{ member.info }}</i>
    </div>
  </div>
{% endfor %}
</div>

## Contact

Email us at <a href="mailto:{{ site.email }}">{{ site.email }}</a>