---
title: "Team"
layout: homelay
sitemap: false
permalink: /team/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/team.css">

<div class="team-wrap">

## Team

<div class="alert alert-info" style="border-radius:16px;">
  <strong>We are looking for new members!</strong>
  <a href="{{ site.baseurl }}/vacancies">See openings</a>.
</div>

### Faculty Advisor

<div class="team-grid">
{% for member in site.data.faculty_advisor %}
  <div class="team-card">
    <div class="team-card-top">
      <img class="team-avatar" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
      <div>
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{{ member.info }}</p>
      </div>
    </div>

    {% if member.education %}
    <div class="team-meta">
      {% for item in member.education %}
        <div>• {{ item }}</div>
      {% endfor %}
    </div>
    {% endif %}

    <div class="team-links">
      {% if member.website and member.website != "" %}
        <a href="{{ member.website }}" target="_blank" aria-label="Website"><i class="fa fa-home fa-lg"></i></a>
      {% endif %}
      {% if member.email and member.email != "" %}
        <a href="mailto:{{ member.email }}" aria-label="Email"><i class="fa fa-envelope fa-lg"></i></a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

### Board

<div class="team-grid">
{% for member in site.data.people %}
  <div class="team-card">
    <div class="team-card-top">
      <img class="team-avatar" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
      <div>
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{{ member.position }}</p>
      </div>
    </div>

    <div class="team-meta">
      {% if member.degree and member.degree != "" %}
        <div><strong>Degree:</strong> {{ member.degree }}</div>
      {% endif %}
      {% if member.active_years and member.active_years != "" %}
        <div><strong>Active since:</strong> {{ member.active_years }}</div>
      {% endif %}
      {% if member.info and member.info != "" %}
        <div style="margin-top:6px;">{{ member.info }}</div>
      {% endif %}
    </div>

    <div class="team-links">
      {% if member.website and member.website != "" %}
        <a href="{{ member.website }}" target="_blank" aria-label="Website"><i class="fa fa-home fa-lg"></i></a>
      {% endif %}
      {% if member.email and member.email != "" %}
        <a href="mailto:{{ member.email }}" aria-label="Email"><i class="fa fa-envelope fa-lg"></i></a>
      {% endif %}
      {% if member.github and member.github != "" %}
        <a href="{{ member.github }}" target="_blank" aria-label="GitHub"><i class="fa fa-github fa-lg"></i></a>
      {% endif %}
      {% if member.linkedin and member.linkedin != "" %}
        <a href="{{ member.linkedin }}" target="_blank" aria-label="LinkedIn"><i class="fa fa-linkedin fa-lg"></i></a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

### Alumni

<div class="team-grid">
{% for member in site.data.alumni %}
  <div class="team-card">
    <div class="team-card-top">
      <img class="team-avatar" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
      <div>
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{{ member.info }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

### Contact

<div class="alert alert-secondary" style="border-radius:16px;">
  Email us at <a href="mailto:{{ site.email }}">{{ site.email }}</a>
</div>

</div>