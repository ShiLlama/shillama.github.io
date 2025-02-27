function showSection(sectionId){
    //Hide all the sections
    let section = document.getElementById(sectionId);
    if(!section)
    {
        console.error("Section not find:", sectionId);
        return;
    }

    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });

    section.classList.add('active');

    //Smooth page transitions

    document.addEventListener("DOMContentLoaded", () => {
        const body = document.body;
        body.classList.add("fade");
        setTimeout(() => body.classList.add("show"), 100);
    });

    //Dark mode

    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    //Load preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
}