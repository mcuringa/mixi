---
layout: post
title:  "Open Data Week: Mapping colocated schools in NYC"
image:  "open-data25.png"
excerpt: > 
  MIXI researchers and students present their work
  on mapping "colocated" schools at NYC Open Data Week
date: 2025-03-07 12:00:00 -0400
event:
  name: "Open Data Week: Mapping colocated schools in NYC"
  url: https://2025.open-data.nyc/event/visualizing-nyc-school-colocations/
  start: 2025-03-23T17:00:00-05
  end: 2025-03-23T18:00:00-05
  location: >
    Virtual, NYC
categories: [Events]
author: "matt curinga"
tags: ["Open Data", "Open Data Week", "mapping", "NYC schools", "colocations", "spatial justice"]
---

<div class="lead">
{% md %}
Matt Curinga and Liz de Freitas along with student researchers Gabriella Deninno,
Akbota Zhumabaikyzy, and Claire Filipek. Present their work at 
[NYC Open Data Week 2025](https://2025.open-data.nyc/).

{% endmd %}
</div>
<a href="https://data.mixi.nyc/nyc-colac-plurality.html">
<img src="/assets/images/blog/colo-pluralities.png" class="img-fluid d-block" alt="map showing colcated schools in Manhattan with differenct colors indicating the racial plurality in each school">
</a>

Colocated schools are not unique to New York City, but they are very much a part
of daily life of NYC schools. More than 70% of high schools and the majority
of students in grades 9-12 attend a colocated school. We will discuss
some of the recent history of the small schools and charter movement
that has increased colocations in NYC; as well as our theoretical grounding
in spatial justice, critical cartography, and the politics of aesthetics
and digital media.

For this talk, we use our open source `nycschools` python
library to access the most recent NYCPS Demographic Snapshot,
combined with the NYC Open Data school location record to identify
which schools share a location. This avoids relying on Department
of Buildings records or trying to match schools by address.

We run statistical analysis to determine that colocated schools
are more likely to have higher percentages of Black, Latine students;
and higher rates of students living in poverty.

We also discuss some of the challenges of visualizing geospatial
data where multiple data points share the same location. To address
this concern, we demonstrate a technique using radial clusters
around central campus points that allow both an overview of the
data as well as the ability to zoom to each data point. We end our
talk with optional workshops where you can get help getting started
programming Python with school and Census data.

<!-- include event.html -->
{% include event.html event=page.event %}

Resources
---------
- **Open Data Week Presentation**
  - [Event Page](https://2025.open-data.nyc/event/visualizing-nyc-school-colocations/)
  - [Slides](https://docs.google.com/presentation/d/1S-2ToL5iRSfs_asLT2CV4mxOEhaNgy-FByNTwan7x-4/edit?usp=sharing)
  - [**Recording**] (TBD)
- `nycschools` free open source software python library [[code](https://github.com/adelphi-ed-tech/nycschools)] 
   [[docs](https://adelphi-ed-tech.github.io/nycschools/)]
- `maptools` free open source software python library [[code](https://github.com/mcuringa/cartopy)]
- Colocation Data & Charts [[Colab Notebook](https://colab.research.google.com/drive/1Sskg7_I1BRxhG4r6VLENbkat4_pVfNmh?usp=sharing)]
- Colocation Plurality [[Map](https://data.mixi.nyc/nyc-colac-plurality.html)] [[Colab Notebook](https://colab.research.google.com/drive/16gvkcRpnkmbegcJ7d-gbicOmVX5Gletd?usp=sharing)]
- Census and other Maps [[Maps](https://nyc-open-data-school-colocations.netlify.app/)] 
  [[Colab Notebook](https://colab.research.google.com/drive/1fyvx47SMoQR2e8bWOyUWMg3YRPKscKwt?usp=sharing)]