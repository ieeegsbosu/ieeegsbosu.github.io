---
title: "Team"
layout: page
permalink: /team/
show_title: true
---

{::nomarkdown}

<div class="team-wrap">

<!-- OSU scarlet accent bar -->
<div style="
  height: 6px;
  width: 100px;
  background: #BB0000;
  margin: 24px 0 24px 0;
  border-radius: 4px;">
</div>

<!-- PAGE INTRO -->
<div style="
  background: linear-gradient(180deg, #1b1b1b 0%, #202020 100%);
  padding: 34px 30px;
  border-radius: 18px;
  margin-bottom: 40px;
  border: 1px solid rgba(255,255,255,0.10);
">
  <div style="display:flex; justify-content:space-between; gap:18px; flex-wrap:wrap; align-items:center;">
    <div>
      <h1 style="margin:0; font-size: 2.2rem;">Team</h1>
      <p style="margin:12px 0 0 0; opacity:0.92; font-size:1.15rem; max-width: 820px;">
        Meet our board, faculty advisor, and alumni who support IEEE GSB at Ohio State.
      </p>
    </div>
    <div style="
      background: rgba(80,160,255,.18);
      border: 1px solid rgba(80,160,255,.30);
      padding: 12px 14px;
      border-radius: 14px;
      white-space: nowrap;
      font-size: 1.05rem;
    ">
      <strong>New members welcome!</strong>
      <a href="{{ site.baseurl }}/vacancies"><u>See openings</u></a>
    </div>
  </div>
</div>

<style>
/* ===== Make page wider ===== */
.team-wrap{
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 14px;
}

/* --- Team grid/cards --- */
.team-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:22px;
}
@media (max-width: 820px){
  .team-grid{ grid-template-columns:1fr; }
}

.team-card{
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,.24);
  transition: transform .18s ease, box-shadow .18s ease;
}
.team-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 16px 38px rgba(0,0,0,.34);
}

.team-row{
  display:flex;
  gap:16px;
  align-items:center;
}

/* ===== Bigger images (not compressed) ===== */
.team-photo{
  width: 118px;
  height: 118px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  border: 2px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.08);
  flex: 0 0 118px;
}

/* ===== Bigger fonts ===== */
.team-name{
  font-weight: 850;
  font-size: 1.25rem;
  margin: 0;
}
.team-role{
  margin: 8px 0 0 0;
  opacity: .92;
  font-size: 1.05rem;
}
.team-desc{
  margin-top: 12px;
  opacity: .92;
  font-size: 1.02rem;
  line-height: 1.45;
}

.section-title{
  font-size: 1.75rem;
  font-weight: 900;
  margin: 38px 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255,255,255,.12);
}

/* Role badge slightly bigger */
.badge{
  display:inline-block;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(187,0,0,.22);
  border: 1px solid rgba(187,0,0,.40);
  font-weight: 750;
  font-size: .95rem;
  margin-top: 8px;
}

.contact-box{
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 18px;
  padding: 18px;
  font-size: 1.1rem;
}
</style>

</div>
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