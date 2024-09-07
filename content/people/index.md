---
layout: main
title: "MIXI: People"
author: "mxc"
---
<h1 class="page-title text-center">Core Faculty</h1>


<div class="container p-2">
    <div class="row">
        {% for person in site.data.people %}
            <div class="col-md-4 p-3">
                <img src="/assets/images/people/{{person.key}}.png" 
                class="d-block img-fluid mb-2" alt="{{person.name}}">
                <p class="text-center">
                    {{ person.name }}<br>
                    {{ person.title }}<br>
                    {{ person.dept }}<br>
                </p>

            </div>
        {% endfor %}
    </div>
</div>
