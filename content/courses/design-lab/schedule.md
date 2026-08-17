---
layout: design-fall-26
design_lab_section: schedule
---

## Class schedule

<div class="container mx-auto row mt-3">

This course meets in person in our STEAM Lab every other week. When we are not
working in the lab, we will focus on readings, design and planning, group work,
out of class activities (museum visits, public art encounters, etc.), and
open time in the lab.

<div class="container-fluid bg-white border rounded-3 shadow-sm p-3 mb-4">

  <div class="row fw-bold border-bottom py-2">
    <div class="col-1">Session</div>
    <div class="col-2">Date</div>
    <div class="col-3">Lab</div>
    <div class="col-2">Readings</div>
    <div class="col-3">Assignments</div>
    <div class="col-1 text-center">Mode</div>
  </div>

  {% for meeting in site.data.courses.design-lab-meetings %}
  <div class="row border-bottom py-2 {% cycle '', 'bg-body-tertiary' %}">
    <div class="col-1">{{ meeting.session }}</div>
    <div class="col-2">{{ meeting.date }}</div>
    <div class="col-3">{{ meeting.lab }}</div>
    <div class="col-2">{{ meeting.readings }}</div>
    <div class="col-3">{{ meeting.assignments }}</div>
    <div class="col-1 text-center">
    {% case meeting.mode %}
      {% when "in class" %}
        <i class="bi bi-tools text-primary" title="In Class/Lab"></i>
        <i class="bi bi-flask text-danger" title="In Class/Lab"></i>
      {% when "asynchronous" %}
        <i class="bi bi-clock-history" title="Asynchronous Online"></i>
        <i class="bi bi-laptop text-success" title="Asynchronous Online"></i>
      {% when "show" %}
        <i class="bi bi-person-arms-up text-info" title="STEAM Conference in person"></i>
        <i class="bi bi-projector text-info" title="STEAM Conference in person"></i>
    {% endcase %}
    </div>
  </div>
  {% endfor %}

</div>
</div>


