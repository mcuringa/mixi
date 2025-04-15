---
layout: main
title: "MIXI: Imagine X"
author: "mxc"
---
<style>
.HomeIntro {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/assets/images/painting.jpg');
    text-shadow: 2px 2px 4px #000000;
    color: white;
    padding: 2em;
    line-height: 1.15;
}
.HomeText {
    font-weight: bold;
    /* font-size: 5.75rem; */
    font-size: calc(1.5vw + 2rem);
    text-align: center;
}
.HomeDesc {
    font-size: 1.75rem;
}


.square {
    width: 310px;
    height: 310px;
    min-width: 310px;
    min-height: 310px;
    margin: 0 5px;
    font-size: 22px;
}

.square p {
    margin: .2em 0;
}
.square small {
    font-size: 14px;
}

</style>

<div class="HomeIntro">
    <div class="container">
        <div class="row align-items-center">
            <div class="HomeText col-md-6">
                MIXI<br>
                Manhattan Institute<br>
                for STEM<br>
                and the<br>
                Imagination
            </div>
            <div class="HomeDesc col-md-6">
                <b>Adelphi University's</b> MIXI Institute brings together a diverse group of researchers, artists, scientists, 
                educators, and various kinds of creative practitioners. We work across the 
                boundaries of science, art, technology and mathematics, to generate new understandings 
                about STEM practices and STEM education. Founded in 2020, MIXI is housed within the 
                Brooklyn Center campus of Adelphi University. 
            </div>
        </div>
    </div>
</div>

<!-- create the content for the featured items here -->

{% assign steam = "
<a class='text-decoration-none text-black' href='/degrees/#STEAM'>
    <div class=' text-upper fw-bold'>
        <p class='text-red '>Master's Degree</p>
        <p>STEAM Education</p>
        <p><small>Math | Science | CS</small></p>
        <p><small class='text-burnt'>fellowships available</small></p>
    </div>
</a>
" %}

{% assign luac = "
<a class='text-decoration-none text-black' href='/research/luac/'>
    <div class=' text-upper fw-bold'>
        <p class='text-red'>Learning Under</p>
        <p>Algorithmic Conditions</p>
        <p><small>book coming 2025</small></p>
    </div>
</a>
" %}

{% assign phd = "
<a class='text-decoration-none text-black' href='/degrees/#PhD-LS'>
    <div class=' text-upper fw-bold'>
        <p class='text-red'>PhD Learning Sciences</p>
        <p>new research doctorate</p>
        <p class='text-burnt'><small>full funding & stipend available</small></p>
    </div>
</a>
" %}

{% assign spencer = "
<a class='text-decoration-none text-black' href='/research/#'>
    <div class=' text-upper fw-bold'>
        <p class='text-red'>School Maps</p>
        <p>and Sensory Ethnography</p>
        <p><small>Funded by the Spencer Foundation</small></p>
    </div>
</a>
" %}

{% assign maps = "
<a class='text-decoration-none text-black' href='/research/maps-that-matter/'>
    <div class=' text-upper fw-bold'>
        <p class='text-red'>maps that matter</p>
        <p>CS & Responsible Computing</p>
        <p><small>Funded by the Mozilla Foundation</small></p>
    </div>
</a>
" %}

{% assign news = "
<a class='text-decoration-none text-black' href='/blog'>
    <div class='text-upper fw-bold'>
        <p class='text-red'>Latest News</p>
        <p class='text-red'>& Events</p>
    </div>
</a>
" %}


{% assign css = "d-flex align-items-center justify-content-center square overlay p-2" %}
<div class="HomePrograms yellow-pink pb-4 d-flex">
    <div class="container p-2 text-center">
        <h1 class="text-upper text-center">Programs and Projects</h1>
        <div class="d-flex flex-wrap justify-content-center mb-3">
            <div class="{{css}}"> {{ phd | raw }} </div>
            <div class="{{css}}"> {{ luac | raw }} </div>
            <div class="{{css}}"> {{ steam | raw }} </div>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
            <div class="{{css}}"> {{ maps | raw }} </div>
            <div class="{{css}}"> {{ spencer | raw }} </div>
            <div class="{{css}}"> {{ news | raw }} </div>
        </div>
    </div>
</div>


<div class="HomePeople">
    <div class="container p-2">
        <h1 class="text-upper text-center">People</h1>
        <a href="/people" class="text-black">
            <div class="row">
                {% for person in site.data.people %}
                    <div class="col-md-3 p-3">
                        <img src="/assets/images/people/{{person.key}}.png" 
                        class="d-block img-fluid mb-2" alt="{{person.name}}">
                        <p class="text-center">
                            {{ person.title }}<br>
                            {{ person.name }}
                        </p>

                    </div>
                {% endfor %}
            </div>
        </a>
    </div>
</div>

<div class="HomeContact bg-gray pt-4">
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <h2 class="">Contact Us</h2>
                <p>
                    Thanks for your interest in our institute. Get in touch with us for any 
                    questions or comments regarding our work and our programs. 
                    We’d love to hear from you.
                </p>
                <p>
                    <b>Contact:</b> Matt Curinga<br>
                    <a class="fw-bold" href="mailto:mcuringa@adelphi.edu">mcuringa@adelphi.edu</a><br>
                    <b>MIXI</b><br>
                    Adelphi University, Brooklyn Center<br>
                    179 Livingston Street<br>
                    Brooklyn, NY 11201<br>
                </p>
            </div>
            <div class="col-md-6 mb-4 d-flex align-items-end flex-column">
                <img src="/assets/images/home-contact.png" 
                     class="img-fluid d-block"
                     alt="person working at a laptop in a busy maker lab">
            </div>
        </div>
    </div>
</div>