---
layout: main
title: "MIXI Research"
author: 
  - "claire"
  - "mxc"
---


<style>
body {
  background-color: var(--blue-slate);
}

.Project {
  position: relative;
  height: 300px;
  width: 300px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.Project h4 {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin: 0;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.Project p {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0;
  z-index: 1;
  box-sizing: border-box;

}

</style>

<div class="container">
  <img src="/assets/images/mixi-research.svg" alt="MIXI Research" class="d-block img-fluid mt-4 mb-4 mx-auto">
</div>
<div class="container d-flex flex-wrap justify-content-center">
{% for project in site.data.projects %}
  <a class="Project rounded-2 shadow-lg bg-white p-0 m-2 d-block" 
     style="background-image: url('{{project.img}}')"
     href="{{project.link}}">
      <h4 class="transparent text-center text-black fw-bold">{{project.title}}</h4>
      <p class="text-black p-2">
        {{project.desc}}
      </p>
  </a>
{% endfor %}


</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  document.querySelectorAll(".Project").forEach((project) => {
    const title = project.querySelector("h4");
    const description = project.querySelector("p");

    project.addEventListener("mouseenter", () => {
      // Fade out the title
      gsap.to(title, { duration: 0.3, opacity: 0 });

      // Show and animate the description to cover the block
      gsap.to(description, { duration: 0.5, opacity: 1, zIndex: 2 });
    });

    project.addEventListener("mouseleave", () => {
      // Fade in the title
      gsap.to(title, { duration: 0.3, opacity: 1 });

      // Hide the description
      gsap.to(description, { duration: 0.5, opacity: 0, zIndex: 1 });
    });
  });
</script>
