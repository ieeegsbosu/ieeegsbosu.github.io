---
title: "Team"
layout: homelay
sitemap: false
permalink: /team/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/team.css">

<div class="container" style="max-width: 980px;">

  <div class="alert alert-info" style="border-radius:14px; margin-top: 10px;">
    <strong>We are looking for new members!</strong>
    <a href="{{ site.baseurl }}/vacancies"><u>See openings</u></a>.
  </div>

  <h2 style="margin-top: 26px;">Faculty Advisor</h2>

  <div class="team-grid">
    {% for member in site.data.faculty_advisor %}
    <div class="team-card">
      <div class="team-card-top">
        <img class="team-avatar" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
        <div>
          <div class="team-name">{{ member.name }}</div>
          <div class="team-role">{{ member.info }}</div>
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
        <a href="{{ member.website }}" target="_blank" aria-label="Website"><i class="fa fa-home"></i></a>
        {% endif %}
        {% if member.email and member.email != "" %}
        <a href="mailto:{{ member.email }}" aria-label="Email"><i class="fa fa-envelope"></i></a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>

  <h2 style="margin-top: 28px;">Board</h2>

  <div class="team-grid">
    {% for member in site.data.people %}
    <div class="team-card">
      <div class="team-card-top">
        <img class="team-avatar" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
        <div>
          <div class="team-name">{{ member.name }}</div>
          <div class="team-role">
            <span class="badge badge-primary" style="border-radius:999px; padding:6px 10px;">{{ member.position }}</span>
          </div>
        </div>
      </div>

      <div class="team-meta">
        {% if member.degree and member.degree != "" %}
        <div><strong>Degree:</strong> {{ member.degree }}</div>
        {% endif %}
        {% if member.active_years and member.active_years != "" %}
        <div><strong>Active:</strong> {{ member.active_years }}</div>
        {% endif %}
        {% if member.info and member.info != "" %}
        <div style="margin-top:8px;">{{ member.info }}</div>
        {% endif %}
      </div>

      <div class="team-links">
        {% if member.website and member.website != "" %}
        <a href="{{ member.website }}" target="_blank" aria-label="Website"><i class="fa fa-home"></i></a>
        {% endif %}
        {% if member.email and member.email != "" %}
        <a href="mailto:{{ member.email }}" aria-label="Email"><i class="fa fa-envelope"></i></a>
        {% endif %}
        {% if member.github and member.github != "" %}
        <a href="{{ member.github }}" target="_blank" aria-label="GitHub"><i class="fa fa-github"></i></a>
        {% endif %}
        {% if member.linkedin and member.linkedin != "" %}
        <a href="{{ member.linkedin }}" target="_blank" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>

  <h2 style="margin-top: 28px;">Alumni</h2>

  <div class="team-grid">
    {% for member in site.data.alumni %}
    <div class="team-card">
      <div class="team-card-top">
        <img class="team-avatar" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
        <div>
          <div class="team-name">{{ member.name }}</div>
          <div class="team-role">{{ member.info }}</div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <h2 style="margin-top: 28px;">Contact</h2>
  <div class="alert alert-secondary" style="border-radius:14px;">
    Email us at <a href="mailto:{{ site.email }}"><u>{{ site.email }}</u></a>
  </div>

</div>