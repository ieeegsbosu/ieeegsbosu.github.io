---
title: "Team"
layout: nosidebar
sitemap: false
permalink: /team/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/team.css">

<div class="team-hero">
  <strong>We are looking for new members!</strong>
  <a href="{{ site.baseurl }}/vacancies"><u>See openings</u></a>.
</div>

<div class="team-section">
  <div class="team-title">Faculty Advisor</div>

  <div class="team-grid-2">
{% for member in site.data.pi %}
    <div class="team-card">
      <div class="team-card-inner">
        <img class="team-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
        <div>
          <p class="team-name">{{ member.name }}</p>
          <p class="team-role">{{ member.info }}</p>
        </div>
      </div>
    </div>
{% endfor %}
  </div>
</div>

<div class="team-section">
  <div class="team-title">Top Board Members</div>

  <div class="team-grid-2">
{% for member in site.data.people %}
    <div class="team-card">
      <div class="team-card-inner">
        <img class="team-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
        <div>
          <p class="team-name">{{ member.name }}</p>
          <p class="team-role">{{ member.position }}</p>
{% if member.description and member.description != "" %}
          <div class="team-desc">{{ member.description }}</div>
{% endif %}
        </div>
      </div>
    </div>
{% endfor %}
  </div>
</div>

<div class="team-section">
  <div class="team-title">Alumni</div>

  <div class="team-grid-2">
{% for member in site.data.alumni %}
    <div class="team-card">
      <div class="team-card-inner">
        <img class="team-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
        <div>
          <p class="team-name">{{ member.name }}</p>
{% if member.info and member.info != "" %}
          <p class="team-role">{{ member.info }}</p>
{% endif %}
        </div>
      </div>
    </div>
{% endfor %}
  </div>
</div>

<div class="team-section">
  <div class="team-title">Contact</div>

  <div class="contact-box">
    Email: <a href="mailto:ieeegsbosu@gmail.com"><u>ieeegsbosu@gmail.com</u></a>
  </div>
</div>