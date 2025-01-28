---
layout: main
title: "Adelphi Ed Tech Courses"
author: "Matthew X. Curinga"
---
<script src="/js/courses.js"></script>
<style>
.container-fluid {
    max-width: 1920px;
    margin: 0 auto;
}
body { 
    height: 100% !important;
    background: hsla(24, 100%, 83%, 1);
    background: linear-gradient(160deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}
#courses div.course {
    max-width: 400px;
    background-color: rgba(255, 255, 255, 0.2);
}

</style>
<div id="courses" class="container-fluid">
<h1 class="page-title py-3">MIXI Course Catalog</h1>
<div class="ps-md-3 btn-group flex-wrap">
    <button type="button" class="course-btn btn-all btn btn-sm btn-primary active" onclick="showCourses('all')">All</button>
    <button type="button" class="course-btn btn-edx btn btn-sm btn-primary" onclick="showCourses('edx')">Ed Tech</button>
    <button type="button" class="course-btn btn-steam-sci btn btn-sm btn-primary" onclick="showCourses('steam-sci')">STEAM Science</button>
    <button type="button" class="course-btn btn-steam-math btn btn-sm btn-primary" onclick="showCourses('steam-math')">STEAM Math</button>
    <button type="button" class="course-btn btn-steam-cs btn btn-sm btn-primary" onclick="showCourses('steam-cs')">STEAM CS</button>
    <button type="button" class="course-btn btn-steam-ls btn btn-sm btn-primary" onclick="showCourses('steam-ls')">STEAM Learning Sciences</button>
    <button type="button" class="course-btn btn-ls btn btn-sm btn-primary" onclick="showCourses('ls')">PhD Learning Sciences</button>
</div>
<div class="d-flex flex-wrap mx-auto justify-content-center">
{% for course in site.data.courses %}
    <div class="course rounded m-2 mb-4 d-flex flex-column justify-content-between shadow {{course.tags}}">
        {% if course.required == 'false' %}<div class="text-center text-danger fw-bold"><i class="bi bi-stars"></i> elective</div>{% endif %}
        {% if course.url %}
            <a class="link-underline link-underline-opacity-0" target="course" href="/courses/{{course.url}}">
                <img class="rounded-top d-block img-fluid" src="/courses/img/{{course.img}}" alt="{{course.alt}}">
                <strong class="d-block text-center py-1">{{course.course}}</strong>
            </a>
        {% else %}
            <img class="rounded-top d-block img-fluid" src="/courses/img/{{course.img}}" alt="{{course.alt}}">
            <strong class="d-block text-center py-1">{{course.course}}</strong>
        {% endif %}
    </div>
{% endfor %}
</div>
</div>