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
  width: 110px;
  background: #BB0000;
  margin: 26px 0 26px 0;
  border-radius: 4px;">
</div>

<!-- PAGE INTRO -->
<div class="team-hero">
  <div class="team-hero-row">
    <div>
      <h1 class="team-h1">Meet our team</h1>
      <p class="team-sub">
        Meet our board, faculty advisor, and alumni who support IEEE GSB at Ohio State.
      </p>
    </div>

    <div class="team-cta">
      <strong>New members welcome!</strong>
      <a href="{{ site.baseurl }}/vacancies"><u>See openings</u></a>
    </div>
  </div>
</div>

<style>
/* ===== Page width ===== */
.team-wrap{
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 16px;
}

/* ===== Hero ===== */
.team-hero{
  background: linear-gradient(180deg, #1b1b1b 0%, #202020 100%);
  padding: 40px 34px;
  border-radius: 20px;
  margin-bottom: 44px;
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 14px 34px rgba(0,0,0,.28);
}

.team-hero-row{
  display:flex;
  justify-content:space-between;
  gap:22px;
  flex-wrap:wrap;
  align-items:center;
}

.team-h1{
  margin:0;
  font-size: 2.6rem;      /* bigger */
  font-weight: 900;
  letter-spacing: -0.02em;
}

.team-sub{
  margin:14px 0 0 0;
  opacity:0.93;
  font-size:1.25rem;      /* bigger */
  max-width: 900px;
  line-height: 1.45;
}

.team-cta{
  background: rgba(80,160,255,.18);
  border: 1px solid rgba(80,160,255,.30);
  padding: 14px 16px;
  border-radius: 16px;
  white-space: nowrap;
  font-size: 1.12rem;     /* bigger */
}

/* ===== Section headings ===== */
.section-title{
  font-size: 1.95rem;     /* bigger */
  font-weight: 950;
  margin: 44px 0 18px 0;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255,255,255,.14);
}

/* ===== Grid/cards ===== */
.team-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:24px;
}

@media (max-width: 920px){
  .team-grid{ grid-template-columns:1fr; }
  .team-hero{ padding: 34px 22px; }
  .team-h1{ font-size: 2.15rem; }
  .team-sub{ font-size: 1.15rem; }
}

/* Card */
.team-card{
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 14px 34px rgba(0,0,0,.26);
  transition: transform .18s ease, box-shadow .18s ease;
}
.team-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 18px 44px rgba(0,0,0,.34);
}

.team-row{
  display:flex;
  gap:18px;
  align-items:center;
}

/* ===== Images: bigger + clearer ===== */
/* NOTE: true clarity requires higher-res source photos.
   This improves presentation but cannot invent detail. */
.team-photo{
  width: 140px;
  height: 140px;
  border-radius: 18px;
  object-fit: cover;
  object-position: center;
  border: 2px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.08);
  flex: 0 0 140px;

  /* perceived crispness */
  image-rendering: auto;
  -webkit-font-smoothing: antialiased;
  transform: translateZ(0);
}

/* Text */
.team-name{
  font-weight: 950;
  font-size: 1.45rem;     /* bigger */
  margin: 0;
  letter-spacing: -0.01em;
}

.team-role{
  margin: 10px 0 0 0;
  opacity: .93;
  font-size: 1.15rem;     /* bigger */
}

.team-desc{
  margin-top: 14px;
  opacity: .93;
  font-size: 1.10rem;     /* bigger */
  line-height: 1.55;
}

/* Badge */
.badge{
  display:inline-block;
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(187,0,0,.22);
  border: 1px solid rgba(187,0,0,.42);
  font-weight: 850;
  font-size: 1.02rem;     /* bigger */
  margin-top: 10px;
}

/* Contact */
.contact-box{
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 20px;
  padding: 20px;
  font-size: 1.2rem;      /* bigger */
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