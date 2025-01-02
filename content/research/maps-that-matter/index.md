---
layout: main
title: "MIXI Research"
author: "mxc"

intro:
  img: "/assets/images/nyc-dots.png"
  alt: "dot density map of residential housing in NYC"
  content: >
    <p>
      With <strong class="text-black">Maps that Matter</strong>
      we rethink the methods and content we use to
      teach computer science in order. Our goals are to expand the field to welcome students
      from previously excluded groups. We have a co-commitment to
      changing the culture of computer science by challenging the core
      core tenets of solutionism and techo-capitalism; looking for ways that
      computer programming can be used as a tool for expression and critique.
    </p>
    <p>
      Drawing on theories of <span class="text-danger">spatial justice and critical
      cartography</span>, we design interdisciplinary computing courses,
      and new software tools to embed the study of computer science
      in the context of geospatial, political data, and map-making.
    </p>
project:
  img: "/assets/images/maps-students.jpg"
  alt: "students presenting interactive map project"
  content: >
    <p>
      Funding from the <strong>Mozilla Foundation's <a href="https://foundation.mozilla.org/en/responsible-computing-challenge/">Responsible Computing Challenge</a></strong>
      provided MIXI faculty Matt Curinga and Suraj Uttamchandani, along with John Drew (SUNY New Paltz),
      the opportunity to redesign a 300-level Communications seminar and a First-Year Seminar. We are studying how 
      interweaving aspects of computer science, interaction design, spatial justice, and critical cartography;
      can increase motivation and achievement in grasping core CS concepts, while deepening students understanding
      of the both the spatial and technical connections to political questions.
    </p>
    <p>
      Dr. Curinga was also able to use the approaches developed to rethink
      his graduate <a href="/courses/intro-to-programming/">Introduction to Programming</a>
      as a project-based intro to CS using maps, python, and data from the US Census.
    </p>
publications:
  img: "/assets/images/school-data-portal.png"
  alt: "educatonal materials from the data portal"
  content: >
    <h3 class="text-black text-right mb-2">Publications</h3>
      <p>
        Curinga, M. X., Uttamchandani, S., & Drew, J. (under review). 
        Examining the role of computing as an expressive medium for spatial issues in framing undergraduates’ learning. 
        <i>Proceedings of the Fifth Annual Meeting of the International Society of the Learning Sciences.</i> 
      </p>
      <p>
        Uttamchandani, S., Curinga, M. X., & Drew, J. (2024). 
        Cartographic Syntonicity as a Tool for Equitable Computer Science Education. 
        <i>Proceedings of the Fourth Annual Meeting of the International Society of the Learning Sciences.</i> 
        <a href="https://doi.org/10.22318/icls2024.796467">https://doi.org/10.22318/icls2024.796467</a>
      </p>
      <h3 class="text-black text-right mt-4 mb-2">Software</h3>
      <p>
        <code class="fw-bold">nycscyhools</code>: Free Open Sources Software python library, clean data, and learning materials to help
        new (and experienced) programmers work with open data and geospatial data related to
        New York City Public Schools.<br>
        [<a href="https://adelphi-ed-tech.github.io/nycschools/intro.html">docs</a>]
        [<a href="https://github.com/adelphi-ed-tech/nycschools">code</a>]
      </p>
      <p>
        <code class="fw-bold">maptools</code>: Free Open Sources Software python library
        that provides utilities for working with US Census data and creating geospatial visualizations
        that work with <code>geopandas</code>, <code>folium</code>, and <code>leaflet.js</code><br>
        [<a href="https://github.com/mcuringa/cartopy/tree/main/src/maptools">code</a>]
      </p>
      <p><b>Contact:</b> Dr. Curinga, <a class="fw-bold" href="mailto:mcuringa@adelphi.edu">mcuringa@adelphi.edu</a></p>

---


<style>
.section { min-height: 75vh; }
.section-img {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100px;
  visibility: hidden;
}

.text {
    opacity: 0;
}

.text h3, .text p {
  max-width: 720px;
}
</style>




<div id="sections container-fluid position-relative">
  <!-- Intro -->
  <div class="d-flex flex-row py-4 section align-content-stretch">
    <div class="d-none d-md-block w-50">
      <div class="section-img" style="background-image: url('{{page.intro.img}}');"></div>
    </div>
    <div class="w-auto d-flex flex-column justify-content-center">
      <div class="text fs-2 text-secondary px-2">{{page.intro.content}}</div>
    </div>
  </div>
  <img src="{{page.intro.img}}" alt="{{page.intro.alt}}" class="d-block d-md-none img-fluid mx-auto">
  <!-- Project -->
  <div class="d-flex flex-row py-4 section align-content-stretch">
    <div class="d-none d-md-block w-50">
      <div class="section-img" style="background-image: url('{{page.project.img}}');"></div>
    </div>
    <div class="w-auto d-flex flex-column justify-content-center">
      <div class="text fs-2 text-secondary px-2">{{page.project.content}}</div>
    </div>
  </div>
  <img src="{{page.project.img}}" alt="{{page.project.alt}}" class="d-block d-md-none img-fluid mx-auto">
  <!-- Publications -->
  <div class="d-flex flex-row py-4 section align-content-stretch">
    <div class="w-auto d-flex flex-column justify-content-center">
      <div class="text fs-5 mx-2 apa">{{page.publications.content}}</div>
    </div>
    <div class="d-none d-md-block w-50">
      <div class="section-img" style="background-image: url('{{page.publications.img}}');"></div>
    </div>
  </div>

  <div class="transparent fw-bold p-2"><a href="/research"><i class="bi bi-arrow-left-circle-fill"></i> Back to Research Projects</a></div>

</div>


<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/EasePack.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js"></script>

<!-- <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Flip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Observer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/EaselPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/PixiPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js"></script> -->


<script>
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const scaleImg = (image, el) => {
    gsap.to(image, {
      duration: 1,
      height: "100%",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      onStart: () => { image.style.visibility = "visible"; }, 
      onReverseComplete: () => { image.style.visibility = "hidden"; }, 
    });
  }

  sections.forEach((section, index) => {
    const image = section.querySelector(".section-img");
    const text = section.querySelector(".text");
    scaleImg(image, section);


    gsap.to(text, {
      duration: 1,
      opacity: 1,
      delay: 0,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reset",
      },
    });
  });
});
</script>