
function safeName(name) {
    // replace non-alphanumeric characters with underscores
    let safe = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    // replace multiple underscores with a single one
    safe = safe.replace(/_+/g, '_');
    // remove leading and trailing underscores
    
    let i = 0;
    while (document.getElementById(safe)) {
        safe = safe + i;
        i++;
    }
    return safe;
}

function addHeaders() {
    const headers = document.getElementsByTagName("h2");
    const addLink = (header) => {

        let link = document.createElement("a");
        let id = header.id;
        if (!id || id === "") {
            id = safeName(header.textContent);
            header.id = id;
        }
        link.href = "#" + header.id;

        let icon = document.createElement("i");
        icon.classList.add("bi");
        icon.classList.add("bi-link-45deg");
        icon.classList.add("text-primary");
        icon.classList.add("text-decoration-none");
        // link.classList.add("fs-4");

        link.appendChild(icon);
        header.insertAdjacentElement("beforeend", link);

    }
    for (let header of headers) {
        console.log("adding header link to " + header.id);
        addLink(header);
    }
}

function addBootstrapStyles() {
    
    let tables = document.getElementsByTagName("table");
    for (let table of tables) {
      table.classList.add("table");
      table.classList.add("table-striped");
      table.classList.add("table-hover");
    }
}

// function halfway() {

//     const fadeIn = (image) => {
//         const lift = window.matchMedia("(min-width: 721px)").matches;
//         if (lift) {
//             gsap.to(image, { y: "-50%", duration: 0, delay: 0, });
//         } else {
//             // gsap.to(image, { opacity: 1, duration: 1, delay: 0.5, });
//         }
//     };

//     let t = document.getElementsByClassName("halfway");
//     for (let el of t) {
//         if (el.tagName === "IMG") {
//             el.onload = fadeIn(el);
//         }
//     }
// }





// window.addEventListener("load", halfway);
// window.addEventListener("resize", halfway);


function cycleWords() {
    let index = 0;
    const wordCycle = document.getElementsByClassName("word-cycle");
    const words = wordCycle[0].getElementsByTagName("span");

    function cycle() {
        words[index].classList.remove("d-inline");
        words[index].classList.remove("active");
        words[index].classList.add("d-none");
        words[index].classList.add("inactive");
        index = (index + 1) % words.length;
        words[index].classList.remove("d-none");
        words[index].classList.remove("inactive");
        setTimeout(()=> words[index].classList.add("active"), 100);
    }
    setInterval(cycle, 2000);
}

// window.addEventListener("load", cycleWords);

