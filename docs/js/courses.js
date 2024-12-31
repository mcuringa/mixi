function showCourses(tag) {
    let buttons = document.getElementsByClassName("course-btn");
    buttons = Array.from(buttons);
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    let active = document.getElementsByClassName("btn-" + tag);
    active[0].classList.add("active");

    let courses = document.getElementsByClassName("course");
    courses = Array.from(courses);

    const hide = (course) => {
        course.classList.remove("visible");
        course.classList.add("invisible");
        course.classList.remove("d-flex");
        course.classList.add("d-none");
    }
    const show = (course) => {
        course.classList.remove("d-none");
        course.classList.add("d-flex");
        course.classList.remove("invisible");
        course.classList.add("visible");
    }
    if (tag === "all") {
        degree = courses;
    }
    else {
        degree = Array.from(document.getElementsByClassName(tag));
    }

    courses.forEach(hide);  
    degree.forEach(show);
}

