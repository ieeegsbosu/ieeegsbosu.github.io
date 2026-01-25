---
title: "Team"
layout: page
permalink: /team/
show_title: false
---

{::nomarkdown}

<!-- Use same accent bar class as Home -->
<div class="gsb-accent-bar"></div>

<!-- HERO header like Home -->
<div class="gsb-hero" style="padding: 34px 28px; margin-bottom: 28px;">
  <h1 class="gsb-hero-title" style="margin-bottom: 10px;">
    Meet Our Team
    <span class="gsb-accent"> @ IEEE GSB</span>
  </h1>

  <p class="gsb-hero-text" style="margin-top: 10px;">
    Meet our board and faculty advisor who support IEEE GSB at Ohio State.
    <span style="white-space: nowrap;">
      <a href="{{ site.baseurl }}/vacancies"><u>New members welcome — see openings</u></a>.
    </span>
  </p>
</div>

<div class="team-wrap">

<style>
/* ===== Full-width feel ===== */
.team-wrap{
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== Section titles (match dark theme) ===== */
.section-title{
  font-size: 1.85rem;
  font-weight: 900;
  margin: 34px 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255,255,255,.12);
}

/* ===== People grid ===== */
.people-grid{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px 60px;
}
@media (max-width: 640px){
  .people-grid{ grid-template-columns: 1fr; gap: 18px; }
}

/* ===== Person row ===== */
.person{
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 0;

  /* animation start state */
  opacity: 0;
  transform: translateY(14px);
  transition: transform .18s ease;
}

.person-photo{
  width: 110px;
  height: 110px;
  border-radius: 999px;
  object-fit: cover;
  object-position: center;
  border: 3px solid rgba(187,0,0,.35);
  box-shadow: 0 10px 24px rgba(0,0,0,.25);
  flex: 0 0 110px;
}

.person-name{
  margin: 0;
  font-size: 1.35rem;
  font-weight: 900;
  line-height: 1.15;
}

.person-role{
  margin: 8px 0 0 0;
  font-size: 1.10rem;
  opacity: .88;
}

.person-desc{
  margin: 10px 0 0 0;
  font-size: 1.05rem;
  line-height: 1.5;
  opacity: .92;
}

/* ===== Role pill ===== */
.role-pill{
  display: inline-block;
  margin-top: 10px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(187,0,0,.18);
  border: 1px solid rgba(187,0,0,.32);
  font-weight: 800;
  font-size: 1.0rem;
}

/* ===== Hover micro-interaction ===== */
.person:hover{
  transform: translateY(-2px);
}

/* ===== Animation keyframes ===== */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce){
  .person{ opacity: 1 !important; transform: none !important; }
}
</style>

<script>
/* Fade + slide-in members when they enter the viewport */
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".person");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute("data-delay") || "0ms";
        el.style.animation = `fadeUp 520ms ease-out ${delay} forwards`;
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => obs.observe(el));
});
</script>

</div>
{:/nomarkdown}

{::nomarkdown}
<div class="team-wrap">

<div class="section-title">Board Members</div>
<div class="people-grid">
{% assign idx = 0 %}
{% for member in site.data.people %}
  <div class="person" data-delay="{{ idx | times: 80 }}ms">
    <img class="person-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
    <div>
      <p class="person-name">{{ member.name }}</p>
      {% if member.position and member.position != "" %}
        <div class="role-pill">{{ member.position }}</div>
      {% endif %}
      {% if member.description and member.description != "" %}
        <p class="person-desc">{{ member.description }}</p>
      {% endif %}
    </div>
  </div>
  {% assign idx = idx | plus: 1 %}
{% endfor %}
</div>

<div class="section-title">Faculty Advisor</div>
<div class="people-grid">
{% assign idx2 = 0 %}
{% for member in site.data.pi %}
  <div class="person" data-delay="{{ idx2 | times: 80 }}ms">
    <img class="person-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
    <div>
      <p class="person-name">
        {% if member.website and member.website != "" %}
          <a href="{{ member.website }}" target="_blank"><u>{{ member.name }}</u></a>
        {% else %}
          {{ member.name }}
        {% endif %}
      </p>
      {% if member.info and member.info != "" %}
        <p class="person-role">{{ member.info }}</p>
      {% endif %}
      {% if member.description and member.description != "" %}
        <p class="person-desc">{{ member.description }}</p>
      {% endif %}
    </div>
  </div>
  {% assign idx2 = idx2 | plus: 1 %}
{% endfor %}
</div>

<!--
<div class="section-title">Alumni</div>
<div class="people-grid">
{% for member in site.data.alumni %}
  <div class="person">
    <img class="person-photo" src="{{ site.baseurl }}/images/{{ member.photo }}" alt="{{ member.name }}">
    <div>
      <p class="person-name">{{ member.name }}</p>
      {% if member.info and member.info != "" %}
        <p class="person-role">{{ member.info }}</p>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
-->

</div>
{:/nomarkdown}