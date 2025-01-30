---
layout: main
title: "MIXI Research"
author: 
  - "claire"
  - "mxc"
---


<style>
html, body {
  margin: 0;
  padding: 0;
  background: black;
  overflow: hidden;
}

#Intro .title {
  background-image: url('/assets/images/hydroponics.jpg');
  height: 100vh !important;
}

#LUAC .about {
  background: linear-gradient( 145deg, #e6e6e6 0%, #cfcfcf 25%, #b0b0b0 50%, #cfcfcf 75%, #e6e6e6 100% );
  color: black;
}


#RCC .about { background-color: #26323E; }
#Decolonizing .about { background-color: #24392E; }
#SchoolMaps .about { background-color: #1B224B; }
#Choir .about { background-color: #5671BE; }
#STEAM .about { background-color: #5f0f40; }
#VT .about { background-color: #A95724; }
#LLM .about { background-color: #5B3B16; }

.hidden {
  display: none !important;
}

section {
  height: 100vh;
  min-height: 100vh;
}
.panel {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.title {
  background-size: cover;
  text-shadow: 2px 2px 4px #000000;
  color: white;
  padding-left: 2em;
  padding-top: 2em;
  flex-grow: 1;
}

.about {
  padding: 2em;
  hyphens: auto;
  background-color: black;
  color: white;
  overflow-y: auto;
  height: auto;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}

@media (max-width: 991px) {
  .title, .about {
    height: auto;
    max-height: auto;
    width: 100%;
  }
  .about {
    max-width: 100%;
    overflow-y: auto;
    padding-bottom: 2em;
  }
}


.panel.active { display: block; opacity: 1; }

.prev, .next { cursor: pointer; }

/* hide next on the last section */
#LLM .next {display: none; }
</style>


<section id="Intro" class="panel active container-fluid p-0 m-0">
  <div class="title">
    <h1 class="fs-huge">Research @ MIXI</h1>
    <h2 class="">Selected Research Projects & Publications</h2>
    <p class="fs-3 fw-bold next">
      <i class="bi bi-arrow-down-square"></i>
      <span class="d-none d-md-auto">Scroll to begin</span>
      <span class="d-auto d-md-none border-bottom">Click to start</span>
    </p>
  </div>
</section>

{% for project in site.data.projects %}
<section id="{{project.id}}" class="panel container-fluid d-flex flex-lg-row flex-column p-0 m-0 hidden">
  <div class="title" style="background-image: url('{{project.img}}')">
    <div class="inner">
      <h1 class="fs-3 fs-md-1">
        {{ forloop.index0 | prepend: "0" | slice: -2, 2 }} | 
        <span class="prev fs-3 cursor-pointer"><i class="bi bi-arrow-left-square"></i></span>
        <span class="next fs-3 cursor-pointer"><i class="bi bi-arrow-right-square"></i></span><br>
        {{project.title}}
      </h1>
      <h2 class="fs-4 fs-md-2">{{project.subtitle}}</h2>
    </div>
  </div>
  <div class="about fs-3 font-serif">
    <div class="inner">
      <div class="mx-2 d-block d-md-none text-center fs-3">
        <i class="bi bi-chevron-up text-shadow prev"></i>
      </div>
      {{ project.desc | markdownify}}
      <hr>
      <div>
        <b>MIXI faculty:</b><br>
      </div>
      <div class="ps-2"><small>{{project.researchers}}</small></div>
      {% if forloop.last == false %}
        <div class="mx-2 d-block d-md-none text-center fs-3">
          <i class="bi bi-chevron-down text-shadow next pb-2"></i>
        </div>
      {% endif %}
    </div>
  </div>
</section>
{% endfor %}

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.js"></script>

<script>

function updateURL(id) {
  const newURL = `${window.location.pathname}#${id}`;
  if (window.location.hash !== `#${id}`) {
    history.pushState(null, null, newURL);
  }
}

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".MainNav");
const panels = gsap.utils.toArray(".panel");
let currentPanel = 0;

function scrollDown() {
  if (currentPanel == 0) {
    gsap.set(header, {display: "none" })
  }
  if (currentPanel < panels.length - 1) {
    currentPanel++;
    activatePanel(currentPanel, "down");
  }
}

function scrollUp() {
  if (currentPanel > 0) {
    currentPanel--;
    if (currentPanel == 0) {
      gsap.set(header, {display: "block" })
    }
    activatePanel(currentPanel, "up");
  }
}

function activatePanel(index, direction) {
  const panel = panels[index];
  let last = null;
  if (index > 0 ) {
    last = panels[index -1];
    last.classList.add("hidden");
  }

  const title = panel.querySelector(".title .inner");
  const about = panel.querySelector(".about .inner");

  if(direction == "down") {
    gsap.set(title, { y: "300%" });
    gsap.set(about, { y: "300%" });
  }
  else {
    gsap.set(title, { y: "-100%" });
    gsap.set(about, { y: "-100%" });
  }
  gsap.set(panel, { display: "flex", opacity: 0 });
  panel.classList.remove("hidden");

  const tl = gsap.timeline();
  tl.to(panel, { opacity: 1, duration: 0.2, ease: "power2.out" })
    .to(title, { y: "0%", duration: 2, ease: "power3.out" }, "<")
    .to(about, { y: "0%", duration: 2, ease: "power3.out" }, "<");
}


document.querySelectorAll(".prev").forEach(button => {
  button.addEventListener("click", scrollUp);
});

document.querySelectorAll(".next").forEach(button => {
  button.addEventListener("click", scrollDown);
});

window.addEventListener("wheel", _.debounce(onMouseWheel, 100,{
    leading: false
}));

function onMouseWheel(e) {
  if (e.deltaY > 0) {
    scrollDown();
  } else {
    scrollUp();
  }
}

// Prevent scroll in .about from triggering the main scroll
document.querySelectorAll(".about").forEach(aboutSection => {
  aboutSection.addEventListener("wheel", _.debounce(onMouseWheel1, 100,{
    leading: false
  }));
});

function onMouseWheel1(e) {
  const buffer = 0.2;
  let atTop = aboutSection.scrollTop <= aboutSection.clientHeight * buffer;
  let atBottom = aboutSection.scrollTop >= (aboutSection.scrollHeight - aboutSection.clientHeight * (1 + buffer));
  e.stopPropagation();
}


// add swipe for mobile (left/right)
function isTouch() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// gsap.registerPlugin(Draggable);

// Draggable.create(".about", {
//   // if (!isTouch()) {
//   //   return;
//   // }
//   type: "x",
//   bounds: document.querySelector(".about"),
//   onDragEnd: function () {
//     const direction = this.getDirection();
//     if (direction === "left") {
//       scrollDown()
//     } else if (direction === "right") {
//       scrollUp();
//     }
//   }
// });


</script>
