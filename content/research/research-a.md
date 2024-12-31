---
layout: main
title: "MIXI Research"
author: "mxc"
permalink: /research/research-a.html
---
<style>
    .bg-slate-blue {
    background-color: #bfdfe3;
    }

  .research-header {
    margin: 2rem 0;
    position: relative;
  }

  .research-header img {
    max-width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }

  .research-header h1 {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #333;
    background-color: #fff;
    padding: 10px 20px;
  }

  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
    gap: 2rem;
    padding: 2rem;
  }

  .research-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: #fff;
  }

  .research-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .research-card h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .research-card p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .research-card .btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    text-decoration: none;
    font-weight: bold;
  }

  .research-card .btn:hover {
    background-color: #0056b3;
  }

  /* Responsive adjustments for smaller screens */
  @media (max-width: 768px) {
    .research-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .research-header h1 {
      position: static;
      text-align: center;
      transform: none;
      margin-top: 1rem;
    }
  }
</style>
<div class="bg-slate-blue">
`<div class="container">
  <!-- Header Section -->
  <div class="research-header">
    <img src="/assets/images/research.png" alt="Research overview image">
    <h1>MIXI Research</h1>
  </div>

  <!-- Research Topics Grid -->
  <div class="research-grid">
{% for project in site.data.projects %}
    <div class="research-card">
      <img src="{{project.img}}" alt="{{project.alt}}">
      <h3>{{project.title}}</h3>
      <p>{{project.desc}}</p>
      <a href="{{project.link}}" class="btn">Learn More</a>
    </div>
{% endfor %}
</div>`
</div>
