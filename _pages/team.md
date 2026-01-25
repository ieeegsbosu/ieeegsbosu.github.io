---
title: "Team"
layout: page
permalink: /team/
show_title: true
---

{::nomarkdown}
<!-- OSU scarlet accent bar -->
<div style="
  height: 6px;
  width: 80px;
  background: #BB0000;
  margin: 24px 0 24px 0;
  border-radius: 4px;">
</div>

<!-- PAGE INTRO -->
<div style="
  background: linear-gradient(180deg, #1b1b1b 0%, #202020 100%);
  padding: 28px 24px;
  border-radius: 16px;
  margin-bottom: 36px;
  border: 1px solid rgba(255,255,255,0.08);
">
  <div style="display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; align-items:center;">
    <div>
      <h1 style="margin:0;">Team</h1>
      <p style="margin:10px 0 0 0; opacity:0.9;">
        Meet our board, faculty advisor, and alumni who support IEEE GSB at Ohio State.
      </p>
    </div>
    <div style="
      background: rgba(80,160,255,.18);
      border: 1px solid rgba(80,160,255,.30);
      padding: 10px 12px;
      border-radius: 12px;
      white-space: nowrap;
    ">
      <strong>New members welcome!</strong>
      <a href="{{ site.baseurl }}/vacancies"><u>See openings</u></a>
    </div>
  </div>
</div>

<style>
/* --- Team grid/cards --- */
.team-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:18px;
}
@media (max-width: 750px){
  .team-grid{ grid-template-columns:1fr; }
}
.team-card{
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 26px rgba(0,0,0,.22);
  transition: transform .18s ease, box-shadow .18s ease;
}
.team-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 14px 34px rgba(0,0,0,.32);
}
.team-row{
  display:flex;
  gap:14px;
  align-items:center;
}
.team-photo{
  width: 88px;
  height: 88px;
  border-radius: 14px;
  object-fit: cover;
  border: 2px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.08);
  flex: 0 0 88px;
}
.team-name{
  font-weight: 800;
  font-size: 1.06rem;
  margin: 0;
}
.team-role{
  margin: 6px 0 0 0;
  opacity: .92;
  font-size: .95rem;
}
.team-desc{
  margin-top: 10px;
  opacity: .92;
  font-size: .93rem;
  line-height: 1.35;
}
.section-title{
  font-size: 1.45rem;
  font-weight: 850;
  margin: 34px 0 14px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,.10);
}
.badge{
  display:inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(187,0,0,.20);
  border: 1px solid rgba(187,0,0,.35);
  font-weight: 700;
  font-size: .86rem;
  margin-top: 6px;
}
.contact-box{
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 16px;
  padding: 16px;
}
</style>
{:/nomarkdown}

{::nomarkdown}
<div class="section-title">Top Board Members</div>
<div class="team-grid">
{% for member in site.data.people %}
  <div class="team-card">
    <div class="team-row">
      <img class="team-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
      <div>
        <p class="team-name">{{ member.name }}</p>
        <div class="badge">{{ member.position }}</div>
      </div>
    </div>
    {% if member.description and member.description != "" %}
      <div class="team-desc">{{ member.description }}</div>
    {% endif %}
  </div>
{% endfor %}
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="section-title">Faculty Advisor</div>
<div class="team-grid">
{% for member in site.data.pi %}
  <div class="team-card">
    <div class="team-row">
      <img class="team-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
      <div>
        <p class="team-name">{{ member.name }}</p>
        <p class="team-role">{{ member.info }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
{:/nomarkdown}

{::nomarkdown}
<div class="section-title">Alumni</div>
<div class="team-grid">
{% for member in site.data.alumni %}
  <div class="team-card">
    <div class="team-row">
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
{:/nomarkdown}

{::nomarkdown}
<div class="section-title">Contact</div>
<div class="contact-box">
  Email: <a href="mailto:ieeegsbosu@gmail.com"><u>ieeegsbosu@gmail.com</u></a>
</div>
{:/nomarkdown}