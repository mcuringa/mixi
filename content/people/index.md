---
layout: main
title: "MIXI: People"
author: "mxc"
---
<h1 class="page-title text-center mb-3">People</h1>


<div class="container p-2 mt-3 mb-3">
<h2 class="">Core Faculty</h2>
    <div class="row">
    {% for person in site.data.people %}
        {% include person.html person=person %}
    {% endfor %}
    </div>
</div>

<div class="container blue-purple p-2 mt-3 mb-3">
<h2 class="">Affiliated faculty</h2>
    <div class="row">
    {% for person in site.data.adjuncts %}
        {% include person.html person=person %}
    {% endfor %}
    </div>
</div>

<div class="container p-2 mt-3 mb-3">
<h2 class="">Learning Sciences PhD Students</h2>
    <div class="row">
    {% for person in site.data.students %}
        {% include person.html person=person %}
    {% endfor %}
    </div>
</div>